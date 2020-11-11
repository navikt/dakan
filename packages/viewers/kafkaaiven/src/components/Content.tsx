import * as React from 'react'
import { Block } from 'baseui/block'
import { Layout, ContentItems, LabeledContent } from '@dakan/ui'


const ITEMS = [
  { item: 'namespace', label: 'namespace' },
  { item: 'resourceVersion', label: 'resourceVersion' },
  { item: 'creationTimestamp', label: 'creation Timestamp', format: 'date' },
]

const SPECITEMS = [
  { item: 'cleanupPolicy', label: 'Cleanup Policy' },
  { item: 'minimumInSyncReplicas', label: 'Minimum InSync Replicas' },
  { item: 'partitions', label: 'Partitions'},
  { item: 'replication', label: 'Replication'},
  { item: 'retentionBytes', label: 'Retention Bytes'},
  { item: 'retentionHours', label: 'Retention Hours'},
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
      <React.Fragment>
        <ContentItems ITEMS={SPECITEMS} item={item} />
      </React.Fragment>
    )
  }

  return (
    <Block>
      {data && data.properties && data.properties.object && data.properties.object.metadata && (
        <Layout
          headingLabel="Kafka Aiven topic"
          headingText={data.properties.object.metadata.name}
          left={
            <Block>
              <Head/>
            </Block>
          }
          right={
            <Block>
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
