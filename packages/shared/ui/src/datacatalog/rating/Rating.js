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

  const [averageValue, setAverageValue] = React.useState(0)
  const [userRate, setUserRate] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(false)
  const [userFound, setUserFound] = React.useState(false)

  const calculateRatings = () => {
    if (ratings && Array.isArray(ratings) && ratings.length > 0) {
      let ratingValue = 0
      ratings.forEach((rating) => {
        ratingValue += rating.properties.rate
      })
      setAverageValue(ratingValue / ratings.length)
    } else {
      setAverageValue(0)
    }
  }

  const getUserRate = () => {
    if (clientUser && ratings && Array.isArray(ratings) && ratings.length > 0) {
      ratings
        .filter((rating) => rating.properties.author === clientUser.userId)
        .map((rate) => {
          setUserRate(rate.properties.rate)
        })
    }
  }

  const updateRatings = (newRatings, newRating, rateValue) => {
    newRatings
      .filter(
        (rating) => rating.properties.author === newRating.properties.author,
      )
      .map((rate) => {
        setUserFound(true)
        rate.properties.rate = rateValue
        rate.properties.date = newRating.properties.date
        rate.properties.time = newRating.properties.time
      })
    if (userFound) {
      setRatings(newRatings)
    } else {
      newRatings.push(newRating)
      setRatings(newRatings)
    }
    setUserRate(rateValue)
    setIsLoading(false)
  }

  const upsertRate = (rateValue) => {
    const tokenId = Cookies.get('ClientToken')
    const newRatings = ratings && Array.isArray(ratings) ? [...ratings] : []
    const newRating = {
      id: `${dataId}.${nodeLabel}_${clientUser.userId}`,
      label: nodeLabel,
      properties: {
        type: nodeLabel,
        author: clientUser.userId,
        rate: rateValue,
        date: GetCurrentDate(),
        time: GetCurrentTime(),
      },
    }

    const RatingPayload = {
      outV: dataId,
      label: edgeLabel,
      inV: newRating.id,
    }
    setIsLoading(true)
    axios
      .put(`${graph_server}/node`, [newRating], {
        headers: { 'JWT-Token': tokenId },
      })
      .then((response) => {
        if (response.status === 200) {
          axios
            .put(`${graph_server}/edge`, [RatingPayload], {
              headers: { 'JWT-Token': tokenId },
            })
            .then(() => {
              updateRatings(newRatings, newRating, rateValue)
            })
            .catch((error) => {
              console.log(error)
              setIsLoading(false)
            })
        }
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }

  React.useEffect(() => {
    calculateRatings()
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
              onChange={(e) => {
                CheckIfAuthorized(() => upsertRate(e.value))
              }}
              overrides={{
                Item: {
                  props: (itemprops) => ({
                    ...itemprops,
                    title: `${itemprops.$index} star rating`,
                  }),
                },
              }}
            />
          </Block>
          <Block display="flex" flexDirection="column" justifyContent="center">
            <LabelMedium>
              Gjennomsnittlig vurdering: {averageValue.toFixed(2)}
            </LabelMedium>
          </Block>
          <Block display="flex" flexDirection="column" justifyContent="center">
            <LabelMedium>
              Antall vurderinger:{' '}
              {ratings && Array.isArray(ratings) && ratings.length > 0
                ? ratings.length
                : 0}
            </LabelMedium>
          </Block>
        </React.Fragment>
      ) : (
        <Spinner size={22} />
      )}
    </Block>
  )
}
export default Rating
