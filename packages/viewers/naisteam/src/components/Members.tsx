import React from 'react'
import { LoadingSpinner, PersonTable } from '@dakan/ui'
import { useNodeEdges} from '@dakan/hooks'

export const Members = ({ id }: any) => {
  const [nodes, loadingNodes, errorLoadingNodes] = useNodeEdges(
    id,
    'hasNaisTeamMember',
  )


  return (
    <React.Fragment>
      {errorLoadingNodes && 'Error loading nais team members'}
      {loadingNodes && <LoadingSpinner />}
      {nodes && (
        <PersonTable members={nodes} />
      )}
    </React.Fragment>
  )
}

export default Members
