import * as React from 'react'
import { Block } from 'baseui/block'
import { DatePicker } from 'baseui/datepicker'
import { Button } from '@dakan/ui'
import { KIND } from 'baseui/button'
import { Label, CheckIfAuthorized } from '@dakan/ui'

const Access = ({ dataset_id }) => {
  const [todate, setTodate] = React.useState([new Date()])
  const [isEditMode, setIsEditMode] = React.useState(false)

  return (
    <React.Fragment>
      <Block marginTop="scale800">
        <Block marginBottom="scale800">
          <Label>Få midlertidig tilgang til datasettet</Label>
        </Block>
        <Label>Til dato</Label>
        <DatePicker
          value={todate}
          onChange={({ date }) =>
            setTodate(Array.isArray(date) ? date : [date])
          }
          formatString="yyyy-MM-dd"
          placeholder="YYYY-MM-DD"
          mask="9999-99-99"
        ></DatePicker>
        <Block marginTop="scale800">
          <Button
            role="switch"
            aria-checked={isEditMode}
            kind={KIND.secondary}
            onClick={() => {
              CheckIfAuthorized(() => setIsEditMode(!isEditMode))
            }}
          >
            Be om tilgang
          </Button>
        </Block>
      </Block>
    </React.Fragment>
  )
}
export default Access
