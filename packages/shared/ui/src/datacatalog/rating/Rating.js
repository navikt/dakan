import * as React from 'react'
import { StarRating as BaseStarRating } from 'baseui/rating'

export const Rating = (props) => {
  const [value, setValue] = React.useState(0)

  return (
    <BaseStarRating
      {...props}
      numItems={5}
      size={22}
      value={value}
      onChange={(e) => setValue(e.value)}
    />
  )
}
export default Rating
