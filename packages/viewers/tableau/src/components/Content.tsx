import * as React from 'react'
import { Block } from 'baseui/block'
import {
  LabeledContent,
  ToggleComments,
  LayoutSplit as Layout,
} from '@dakan/ui'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { format } from 'date-fns'

import TableauViewList from './TableauViewList'
import GetValue from '../utils/GetValue'

const items = (props: any): JSX.Element => {
  const content = props.properties

  const ITEMS = [
    { item: 'db_name', label: 'Kilde' },
    { item: 'publisher', label: 'Eier' },
    { item: 'project_name', label: 'Prosjekt' },
    { item: 'provenance', label: 'Opphav' },
    { item: 'host', label: 'Host adresse' },
    { item: 'issued', label: 'Publisert' },
    { item: 'modified', label: 'Oppdatert' },
  ]

  const getItems = (items: Array<{}>) => {
    return items.map((entry: any, i: number) => {
      let value = GetValue(() => content[entry.item])
      if (entry.format && entry.format === 'date') {
        const date = new Date(value)
        if (typeof date.getMonth === 'function') {
          value = format(date, 'yyyy-MM-dd')
        }
      }

      return (
        <FlexGridItem key={`item_${i}`}>
          <LabeledContent description={entry.label} list>
            {value}
          </LabeledContent>
          <Block width="scale1000" />
        </FlexGridItem>
      )
    })
  }

  return (
    <FlexGrid flexGridColumnCount={[1, 2, 2, 3]}>{getItems(ITEMS)}</FlexGrid>
  )
}

const Content = (props: any): JSX.Element => {
  const {
    data,
    viewList,
    tagOptions,
    comments,
    setComments,
    clientUser,
  } = props

  return (
    <Block>
      {data && data.id && data.properties && data.properties.workbook_name && (
        <Layout
          headingLabel="Tableau workbook"
          headingText={data.id}
          left={
            <Block>
              <Block marginBottom="scale1000">{items(data)}</Block>
              <Block>
                <LabeledContent description="Beskrivelse" list>
                  {data.properties.description}
                </LabeledContent>
              </Block>
              <ToggleComments
                dataId={data.id}
                comments={comments}
                setComments={setComments}
                title='Kommentar'
                edgeLabel='hasComment'
                nodeLabel='tableau_comment'
              />
            </Block>
          }
          right={
            <Block>
              {viewList && viewList.length > 0 && (
                <Block>
                  <TableauViewList
                    viewList={viewList}
                    tagOptions={tagOptions}
                    clientUser={clientUser}
                  />
                </Block>
              )}
            </Block>
          }
        />
      )}
    </Block>
  )
}

export default Content
