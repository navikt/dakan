import * as React from 'react'
import { Block } from 'baseui/block'
import { Label } from '@dakan/ui'
import { useLineage } from '../hooks/useLineage'
import { EChart } from '@deetly/echart-view'

const getOption = (data) => {
  const option = {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove',
    },
    series: [
      {
        type: 'tree',
        id: 0,
        name: 'tree1',
        data: [data],

        top: '10%',
        left: '12%',
        bottom: '22%',
        right: '20%',

        symbolSize: 7,

        edgeShape: 'polyline',
        edgeForkPosition: '63%',
        initialTreeDepth: 1,

        lineStyle: {
          width: 2,
        },

        label: {
          backgroundColor: '#fff',
          position: 'left',
          verticalAlign: 'middle',
          align: 'right',
        },

        leaves: {
          label: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left',
          },
        },

        emphasis: {
          focus: 'descendant',
        },

        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750,
      },
    ],
  }
  return option
}

const getLast = (input: string) => {
  const el = input.split(/[\s.]+/)
  return el[el.length - 1]
}

const getFirst = (input: string) => {
  const el = input.split(/[\s.]+/)
  return el[0]
}

// TODO : multilevel
const getChildChart = (data: any, res: any): void => {
  const nodes: object[] = []
  if (data && typeof data === 'object') {
    for (const key in data) {
      if (getFirst(key) === 'source') {
        res['name'] = getLast(key)
        if (Array.isArray(data[key])) {
          data[key].forEach((el) => {
            const children = res['children'] || []
            children.push({ name: getLast(el) })
            res['children'] = children
          })
        } else {
          nodes.push(data)
        }
      }
    }
  }
}

const Lineage = ({ url, dataset_id }) => {
  const [data, loading, error] = useLineage(url, dataset_id)

  const children: object = {}
  if (data) {
    getChildChart(data['child_map'], children)
  }

  const spec_children = { option: getOption(children) }

  return (
    <React.Fragment>
      {data && (
        <Block>
          <Label>Kilde</Label>
          <EChart spec={spec_children} height={600} />
        </Block>
      )}
    </React.Fragment>
  )
}
export default Lineage
