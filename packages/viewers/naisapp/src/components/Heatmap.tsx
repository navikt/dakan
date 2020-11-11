import * as React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import ReactTooltip from 'react-tooltip';

const Heatmap = () => {
  return(
    <React.Fragment>
    <CalendarHeatmap
  values={[
    { date: '2020-07-01', count: 12 },
    { date: '2020-11-01', count: 122 },
    { date: '2020-08-01', count: 38 },
    { date: '2020-09-01', count: 8 },
    { date: '2020-10-01', count: 28 },
  ]}
  classForValue={value => {
    if (!value) {
      return 'color-empty';
    }
    else if(value.count <= 10){
      return 'color-github-1'
    }
    else if(value.count <= 20){
      return 'color-github-2'
    }
    else if(value.count <= 30){
      return 'color-github-3'
    }
    else {
      return 'color-github-4'
    }
  }}
  tooltipDataAttrs={value => {
    if(!value.count){
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