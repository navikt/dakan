import * as React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import ReactTooltip from 'react-tooltip';

const Heatmap = (props) => {
  const { data } = props
  
  const today = new Date().toISOString().split('T')[0]
  const oneYearAgo = new Date()
  oneYearAgo.setFullYear(oneYearAgo.getFullYear()-1)

  return (
    <React.Fragment>
      <CalendarHeatmap
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
      />
      <ReactTooltip />
    </React.Fragment>
  )
}

export default Heatmap;