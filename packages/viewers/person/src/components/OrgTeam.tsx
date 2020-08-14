import React from 'react'
import { useNodeEdges } from '@dakan/hooks'
import { LoadingSpinner } from '@dakan/ui'
import { Label } from '@dakan/ui'

import isEmpty from '../utils/IsEmpty'

export const OrgTeam = ({id}: any) => {
    const [nodes, loadingNodes, errorLoadingNodes] = useNodeEdges(
        id, 'memberOfTeam',
    )

   const getContent = (nodes) => {
       if (!isEmpty(nodes)) {
           return 'Kommer' //JSON.stringify(nodes)
       }
       else {
           return 'Ingen'
       }
   }

  return (
    <React.Fragment>
      {errorLoadingNodes && 'Error loading org teams'}
      {loadingNodes && <LoadingSpinner />}
      {nodes && (
        <React.Fragment>
            <Label>Team</Label>
            {getContent(nodes)}
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default OrgTeam