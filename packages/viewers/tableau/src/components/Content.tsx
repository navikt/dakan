import * as React from 'react'
import { Block } from 'baseui/block'
import {
  LabeledContent,
  ToggleUserText,
  SingleUserText,
  LayoutSplit as Layout,
  Rating,
  GetValue,
} from '@dakan/ui'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { format } from 'date-fns'

import TableauViewList from './TableauViewList'

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
    description,
    setDescription,
  } = props

  return (
    <Block>
      {data && data.id && data.properties && data.properties.workbook_name && (
        <Layout
          headingLabel="Tableau workbook"
          headingText={data.id}
          left={
            <Block>
              <Block marginBottom="scale800" marginTop="-20px">
                <Rating
                  ratings={props.ratings}
                  setRatings={props.setRatings}
                  dataId={props.data.id}
                  edgeLabel="hasTableauRating"
                  nodeLabel="tableau_rating"
                />
              </Block>
              <Block>
                <LabeledContent description="Beskrivelse" list>
                  {data.properties.description}
                </LabeledContent>
              </Block>
              <Block marginTop="scale800" marginBottom="scale800">
                <SingleUserText
                  dataId={data.id}
                  userText={description}
                  setUserText={setDescription}
                  title="Utvidet beskrivelse"
                  edgeLabel="hasTableauDescription"
                  nodeLabel="tableau_description"
                />
              </Block>
              <Block marginBottom="scale800">{items(data)}</Block>
              <Block marginBottom="scale800">
                <ToggleUserText
                  dataId={data.id}
                  userTexts={comments}
                  setUserTexts={setComments}
                  title="Kommentar"
                  edgeLabel="hasTableauComment"
                  nodeLabel="tableau_comment"
                />
              </Block>
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
