import * as React from 'react'

import { ResponsiveCalendar } from '@nivo/calendar'
import { Block } from 'baseui/block'

const Heatmap = (props) => {
  const { data } = props

  const today = new Date().toISOString().split('T')[0]
  const oneYearAgo = new Date()
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)

  const nivoTheme = {
    background: '#ffffff',
    textColor: 'black',
    fontSize: 16,
  }

  return (
    <Block aria-label="Github commit historikk" height="240px" width="100%">
      <ResponsiveCalendar
        data={data}
        theme={nivoTheme}
        from={oneYearAgo.toISOString().split('T')[0]}
        to={today}
        align="top-left"
        emptyColor="#eeeeee"
        colors={['#d6e685', '#8cc665', '#44a340;', '#1e6823']}
        margin={{ top: 40, right: 0, bottom: 0, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'row',
            translateY: 36,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: 'right-to-left',
          },
        ]}
      />
    </Block>
  )
}

export default Heatmap
