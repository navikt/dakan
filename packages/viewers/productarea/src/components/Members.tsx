import React from 'react'
import { LoadingSpinner, PersonTable } from '@dakan/ui'
import { useNodeEdges } from '@dakan/hooks'
import { Block } from 'baseui/block'

export const Members = ({ id }: any) => {
  const [nodes, loadingNodes, errorLoadingNodes] = useNodeEdges(
    id,
    'hasProductAreaMember',
  )

  return (
    <React.Fragment>
      {errorLoadingNodes && 'Error loading team members'}
      {loadingNodes && <LoadingSpinner />}
      {nodes && (
        <Block width="100%" marginBottom="scale1200">
          <PersonTable members={nodes} />
        </Block>
      )}
    </React.Fragment>
  )
}

export default Members
