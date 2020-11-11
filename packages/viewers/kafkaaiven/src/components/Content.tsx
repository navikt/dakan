import * as React from 'react'
import { Block } from 'baseui/block'
import { LayoutSplit as Layout, ContentItems, LabeledContent } from '@dakan/ui'

const ITEMS = [
  { item: 'namespace', label: 'namespace' },
  { item: 'resourceVersion', label: 'resourceVersion' },
  { item: 'creationTimestamp', label: 'creation Timestamp', format: 'date' },
]

const SPEC_ITEMS = [
  { item: 'cleanupPolicy', label: 'Cleanup Policy' },
  { item: 'minimumInSyncReplicas', label: 'Minimum InSync Replicas' },
  { item: 'partitions', label: 'Partitions' },
  { item: 'replication', label: 'Replication' },
  { item: 'retentionBytes', label: 'Retention Bytes' },
  { item: 'retentionHours', label: 'Retention Hours' },
]

const ANNOTATION_ITEMS = [
  { item: 'dcat.data.nav.no/accessRights', label: 'Access rights' },
  { item: 'dcat.data.nav.no/catalog', label: 'Catalog' },
  { item: 'dcat.data.nav.no/creator', label: 'Creator' },
  { item: 'dcat.data.nav.no/description', label: 'Description' },
  { item: 'dcat.data.nav.no/keyword', label: ' Keyword' },
  { item: 'dcat.data.nav.no/language', label: 'Language' },
  { item: 'dcat.data.nav.no/license', label: 'License' },
  { item: 'dcat.data.nav.no/publisher', label: 'Publisher' },
  { item: 'dcat.data.nav.no/rights', label: 'Rights' },
  { item: 'dcat.data.nav.no/temporal', label: 'Temporal' },
  { item: 'dcat.data.nav.no/theme', label: 'Theme' },
  { item: 'dcat.data.nav.no/title', label: 'Title' },
]


const Content = (props: any): JSX.Element => {
  const { data } = props

  const Head = () => {
    const item = {
      properties: data.properties.object.metadata
    }

    return (
      <React.Fragment>
        <ContentItems ITEMS={ITEMS} item={item} />
        {data.properties.object.spec && (
          <LabeledContent description="Aiven pool" list>
            {data.properties.object.spec.pool}
          </LabeledContent>
        )}
      </React.Fragment>
    )
  }

  const Spec = () => {
    const item = {
      properties: data.properties.object.spec.config
    }
    return (
        <ContentItems ITEMS={SPEC_ITEMS} item={item} />
    )
  }

  const Annotations = () => {
    const item = {
      properties: data.properties.object.metadata.annotations
    }
    return (
      <ContentItems ITEMS={ANNOTATION_ITEMS} item={item} />
    )
  }

  return (
    <Block>
      {data && data.properties && data.properties.object && data.properties.object.metadata && (
        <Layout
          headingLabel="Kafka Aiven topic"
          headingText={data.properties.object.metadata.name}
          left={
            <Block width="100%" >
              {data.properties.object.metadata.annotations && (
                <Annotations />
              )}
            </Block>
          }
          right={
            <Block width="100%" >
              <Head />
              {data.properties.object.spec && data.properties.object.spec.config && (
                <Spec />
              )}
            </Block>
          }
        />
      )}
    </Block>
  )
}

export default Content
