import * as React from 'react'
import { Block } from 'baseui/block'
import { KIND } from 'baseui/button'
import Cookies from 'js-cookie'
import {
  LabeledContent,
  ToggleUserText,
  SingleUserText,
  LayoutSplit as Layout,
  Rating,
  GetValue,
  ElasticTagging,
  Button,
  EditIcon,
  CheckIfAuthorized,
} from '@dakan/ui'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { format } from 'date-fns'
import { LabelMedium } from 'baseui/typography'

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
    teamTags,
    setTeamTags,
    personTags,
    setPersonTags,
  } = props

  const [isEditMode, setIsEditMode] = React.useState(false)

  const expiresIn5mins = 0.0035

  React.useEffect(() => {
    const editModeActivated = Cookies.get('TableauEditModeActivated')
    const clientUser = Cookies.get('ClientUser')
    const tokenId = Cookies.get('ClientToken')
    if (editModeActivated && clientUser && tokenId) {
      setIsEditMode(true)
    }
    Cookies.remove('TableauEditModeActivated')
  }, [])

  return (
    <Block>
      {data && data.id && data.properties && data.properties.workbook_name && (
        <Layout
          headingLabel="Tableau workbook"
          headingText={data.id}
          toolbar={
            <Block display="flex" flex="1" justifyContent="flex-end">
              <div role="form" aria-label="Rediger side innhold">
                <Button
                  role="switch"
                  aria-checked={isEditMode}
                  kind={KIND.secondary}
                  startEnhancer={<EditIcon />}
                  startEnhancerHover={<EditIcon fill="white" />}
                  onClick={() => {
                    Cookies.set('TableauEditModeActivated', 'true', {
                      expires: expiresIn5mins,
                    })
                    if (isEditMode === true) {
                      Cookies.remove('TableauEditModeActivated')
                    }
                    CheckIfAuthorized(() => setIsEditMode(!isEditMode))
                  }}
                >
                  Rediger innhold
                </Button>
              </div>
            </Block>
          }
          left={
            <div role="main">
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
                  isEditMode={isEditMode}
                />
              </Block>
              <Block marginBottom="scale800">{items(data)}</Block>
              <Block marginBottom="scale800">
                <ElasticTagging
                  header="Team navn"
                  tagType={['naisteam', 'team']}
                  dataId={data.id}
                  dataTags={teamTags}
                  setDataTags={setTeamTags}
                  edgeLabel={'hasTableauTeamTag'}
                  tagLabel={'name'}
                  placeholder="Søk og legg til team"
                  isEditMode={isEditMode}
                />
              </Block>
              <Block marginBottom="scale800">
                <ElasticTagging
                  header="Kontaktperson"
                  tagType={['person']}
                  dataId={data.id}
                  dataTags={personTags}
                  setDataTags={setPersonTags}
                  edgeLabel={'hasTableauPersonTag'}
                  tagLabel={['fornavn', 'etternavn']}
                  placeholder="Søk og legg til kontaktperson"
                  isEditMode={isEditMode}
                />
              </Block>
              <Block marginBottom="scale800">
                <ToggleUserText
                  dataId={data.id}
                  userTexts={comments}
                  setUserTexts={setComments}
                  title="Kommentar"
                  edgeLabel="hasTableauComment"
                  nodeLabel="tableau_comment"
                  isEditMode={isEditMode}
                />
              </Block>
            </div>
          }
          right={
            viewList &&
            viewList.length > 0 && (
              <div role="navigation">
                <div role="list">
                  <TableauViewList
                    viewList={viewList}
                    tagOptions={tagOptions}
                    clientUser={clientUser}
                    isEditMode={isEditMode}
                  />
                </div>
              </div>
            )
          }
        />
      )}
    </Block>
  )
}

export default Content
