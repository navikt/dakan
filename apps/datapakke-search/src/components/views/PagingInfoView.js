import React from 'react'
import { Caption2 } from 'baseui/typography'

const PagingInfoView = ({ start, end, totalResults }) => (
  <Caption2 color="colorSecondary">
    Viser {start} - {end} av totalt {totalResults}
  </Caption2>
)

export default PagingInfoView
