import * as React from 'react'
import { StarRatingProps } from 'baseui/rating'

export interface CustomRatingProps {
  ratings?: any
  setRatings?: any
  dataId?: any
  clientUser?: any
  edgeLabel: string
  nodeLabel: string
}

export declare const Rating: React.FC<StarRatingProps & CustomRatingProps>
export default Rating
