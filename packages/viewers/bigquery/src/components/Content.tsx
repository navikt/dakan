import * as React from 'react'
import { Block } from 'baseui/block'
import { KIND } from 'baseui/button'
import Cookies from 'js-cookie'
import { Tabs, Tab } from 'baseui/tabs'
import {
  LargeWidth,
  LabeledContent,
  ToggleUserText,
  SingleUserText,
  Searchbox,
  Rating,
  GetValue,
  ElasticTagging,
  Button,
  EditIcon,
  CheckIfAuthorized,
} from '@dakan/ui'
import { LabelLarge } from 'baseui/typography'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { useStyletron } from 'baseui'

import Metadata from './Metadata'
import AuditLogs from './AuditLogs'
import Access from './Access'
//import GoogleDataCatalog from './GoogleDataCatalog'
import Examples from './Examples'
import Lineage from './Lineage'
import Readme from './Readme'
//import DbtCatalog from './DbtCatalog'
import CosmosCatalog from './CosmosCatalog'

const Content = ({
  id,
  data,
  node,
  columns,
  tagOptions,
  comments,
  setComments,
  description,
  setDescription,
  numberOfColumns,
  ratings,
  setRatings,
  personTags,
  setPersonTags,
  teamTags,
  setTeamTags,
}) => {
  const [activeKey, setActiveKey] = React.useState<string | number>('0')
  const [filteredColumns, setFilteredColumns] = React.useState()
  const [filterText, setFilterText] = React.useState()
  const [isEditMode, setIsEditMode] = React.useState(false)

  const expiresIn5mins = 0.0035

  React.useEffect(() => {
    const editModeActivated = Cookies.get('TableEditModeActivated')
    const clientUser = Cookies.get('ClientUser')
    const tokenId = Cookies.get('ClientToken')
    if (editModeActivated && clientUser && tokenId) {
      setIsEditMode(true)
    }
    Cookies.remove('TableEditModeActivated')
  }, [])

  if (!data) return null

  const Main = (): JSX.Element => {
    const [, theme] = useStyletron()
    return (
      <React.Fragment>
        {data && (
          <Block>
            <Block marginBottom="scale1200" flex="1">
              {data.properties && data.properties.table_description && (
                <Block>
                  <LabelLarge>
                    <b>Beskrivelse</b>
                  </LabelLarge>
                  <Block
                    marginTop="scale200"
                    $style={{ ...theme.typography.font300 }}
                  >
                    {data.properties.table_description}
                  </Block>
                </Block>
              )}
              {(description || isEditMode) && (
                <Block marginTop="scale800">
                  <SingleUserText
                    dataId={data.id}
                    userText={description}
                    setUserText={setDescription}
                    title="Utvidet beskrivelse"
                    edgeLabel="hasTableDescription"
                    nodeLabel="table_description"
                    isEditMode={isEditMode}
                  />
                </Block>
              )}
            </Block>
          </Block>
        )}
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <LargeWidth
        headingLabel="BigQuery"
        headingText={data.title}
        toolbar={
          <Block display="flex" flex="1" justifyContent="flex-end">
            <div role="form">
              <Button
                role="switch"
                aria-checked={isEditMode}
                kind={KIND.secondary}
                startEnhancer={<EditIcon />}
                startEnhancerHover={<EditIcon fill="white" />}
                onClick={() => {
                  Cookies.set('TableEditModeActivated', 'true', {
                    expires: expiresIn5mins,
                  })
                  if (isEditMode === true) {
                    Cookies.remove('TableEditModeActivated')
                  }
                  CheckIfAuthorized(() => setIsEditMode(!isEditMode))
                }}
              >
                Rediger innhold
              </Button>
            </div>
          </Block>
        }
      >
        <div role="main">
          <Block display="flex" marginBottom="scale800" marginTop="-20px">
            <Block display="flex" flex="1" justifyContent="flex-start">
              <Rating
                ratings={ratings}
                setRatings={setRatings}
                dataId={data.id}
                edgeLabel="hasTableRating"
                nodeLabel="table_rating"
              />
            </Block>
          </Block>
          <Main />
          <Tabs
            onChange={({ activeKey }) => {
              setActiveKey(activeKey)
            }}
            activeKey={activeKey}
          >
            <Tab title="Om datasettet">
              <Block display="flex" marginTop="scale1200">
                <Block display="flex" flex="1" justifyContent="flex-start">
                  <Metadata item={data} id={id} />
                </Block>
                <Block display="flex" flex="1" justifyContent="flex-start">
                  <CosmosCatalog node={node} />
                </Block>
              </Block>
            </Tab>
            {data && data.content && data.content.readme && (
              <Tab title="Om dataproduktet">
                <Block marginTop="scale1200">
                  <Readme url={data.content.readme} />
                </Block>
              </Tab>
            )}
            {/*             <Tab title="Skjema">
              <Block marginTop="scale1200">
                <CosmosCatalog node={node} />
              </Block>
            </Tab> */}
            {data && data.content && data.content.manifest_path && (
              <Tab title="Lineage">
                <Block marginTop="scale1200">
                  <Lineage url={data.content.manifest_path} dataset_id={id} />
                </Block>
              </Tab>
            )}
            {/*             {data && data.content && data.content.catalog_path && (
              <Tab title="Metadata (dbt)">
                <Block marginTop="scale1200">
                  <DbtCatalog url={data.content.catalog_path} dataset_id={id} />
                </Block>
              </Tab>
            )} */}
            <Tab title="Eksempler">
              <Block marginTop="scale1200">
                <Examples dataset_id={id} />
              </Block>
            </Tab>
            <Tab title="Brukere">
              <Block marginTop="scale1200">
                <AuditLogs dataset_id={id} />
              </Block>
            </Tab>
            {/*             <Tab title="Google Data Catalog">
              <Block marginTop="scale1200">
                <CosmosCatalog node={node} />
              </Block>
            </Tab> */}
            <Tab title="Få tilgang">
              <Block marginTop="scale1200">
                <Access dataset_id={id} />
              </Block>
            </Tab>
          </Tabs>
        </div>
      </LargeWidth>
    </React.Fragment>
  )
}

export default Content
