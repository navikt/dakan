import * as React from 'react'
import { StarRating as BaseStarRating } from 'baseui/rating'
import { Block } from 'baseui/block'
import { LabelMedium } from 'baseui/typography'
import { Spinner } from 'baseui/spinner'
import Cookies from 'js-cookie'
import axios from 'axios'
import env from '@beam-australia/react-env'
import { useClientUser } from '@dakan/hooks'

import GetCurrentDate, {
  GetCurrentTime,
} from '../../utils/GetCurrentDate/GetCurrentDate'
import CheckIfAuthorized from '../../utils/CheckIfAuthorized/CheckIfAuthorized'

const graph_server = env('GRAPH_SERVER')

export const Rating = (props) => {
  const { ratings, setRatings, dataId, edgeLabel, nodeLabel } = props

  const clientUser = useClientUser()

  const [value, setValue] = React.useState(0)
  const [userRate, setUserRate] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(false)

  const calculateRatings = () => {
    if (ratings && ratings.length > 0) {
      let ratingValue = 0
      ratings.forEach((rating) => {
        ratingValue += rating.properties.rate
      })
      return ratingValue / ratings.length
    } else {
      return 0
    }
  }

  const getUserRate = () => {
    if (ratings && ratings.length > 0) {
      ratings.forEach((rating) => {
        if (rating.properties.author === clientUser.userId) {
          setUserRate(rating.properties.rate)
        }
      })
    } else {
      setUserRate(0)
    }
  }

  const upsertRate = (rateValue) => {
    let userFound = false
    const tokenId = Cookies.get('ClientToken')
    const newRatings = ratings ? [...ratings] : []
    const newRating = {
      id: `${dataId}.${nodeLabel}_${clientUser.userId}`,
      label: nodeLabel,
      properties: {
        author: clientUser.userId,
        rate: rateValue,
        date: GetCurrentDate(),
        time: GetCurrentTime(),
      },
    }

    const RatingPayload = {
      source_id: dataId,
      edge_label: edgeLabel,
      node_body: newRating,
    }
    setIsLoading(true)
    axios
      .put(`${graph_server}/node/edge/upsert`, RatingPayload, {
        headers: { 'JWT-Token': tokenId },
      })
      .then(() => {
        newRatings.forEach((rating) => {
          if (rating.properties.author === newRating.properties.author) {
            rating.properties.rate = rateValue
            rating.properties.date = newRating.properties.date
            rating.properties.time = newRating.properties.time
            userFound = true
          }
        })
        if (userFound) {
          setRatings(newRatings)
        } else {
          newRatings.push(newRating)
          setRatings(newRatings)
        }
        setUserRate(rateValue)
      })
      .catch((error) => console.log(error))
    setIsLoading(false)
  }

  React.useEffect(() => {
    setValue(calculateRatings())
    getUserRate()
  }, [ratings])

  return (
    <Block display="block" justifyContent="center">
      {!isLoading ? (
        <React.Fragment>
          <Block
            display="flex"
            flexDirection="column"
            justifyContent="center"
            marginTop="4px"
          >
            <BaseStarRating
              numItems={5}
              size={22}
              value={userRate}
              onChange={(e) => CheckIfAuthorized(() => upsertRate(e.value))}
            />
          </Block>
          <Block display="flex" flexDirection="column" justifyContent="center">
            <LabelMedium>Gjennomsnittlig vurdering {value.toFixed(2)}</LabelMedium>
          </Block>
        </React.Fragment>
      ) : (
        <Spinner size={22} />
      )}
    </Block>
  )
}
export default Rating
