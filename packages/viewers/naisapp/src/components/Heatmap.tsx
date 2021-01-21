import * as React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import ReactTooltip from 'react-tooltip';

import { ResponsiveCalendar } from '@nivo/calendar'
import { Block } from 'baseui/block';

const Heatmap = (props) => {
  const { data } = props

  const today = new Date().toISOString().split('T')[0]
  const oneYearAgo = new Date()
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)

  const nivoTheme = {
    "background": "#ffffff",
    "textColor": "black",
    "fontSize": 16,
  }

  return (
      <Block aria-label="Github heatmap historikk" height="240px" width="100%">
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
              itemDirection: 'right-to-left'
            }
          ]}
        />

        {/* <CalendarHeatmap
      startDate={oneYearAgo.toISOString().split('T')[0]}
      endDate={today}
        values={data}
        classForValue={value => {
          if (!value) {
            return 'color-empty';
          }
          else if (value.count <= 10) {
            return 'color-github-1'
          }
          else if (value.count <= 20) {
            return 'color-github-2'
          }
          else if (value.count <= 30) {
            return 'color-github-3'
          }
          else {
            return 'color-github-4'
          }
        }}
        tooltipDataAttrs={value => {
          if (!value.count) {
            return {
              'data-tip': "0 commits"
            }
          }
          else {
            return {
              'data-tip': `${value.date} has ${value.count} commits`,
            };
          }
        }}
        showWeekdayLabels={true}
      /> */}
        <ReactTooltip />
      </Block>
  )
}

export default Heatmap;