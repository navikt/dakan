import * as React from 'react'
import { StarRatingProps } from 'baseui/rating'

export interface CustomRatingProps {
  theme?: any
  spec?: any
}

export declare const Rating: React.FC<StarRatingProps & CustomRatingProps>
export default Rating
