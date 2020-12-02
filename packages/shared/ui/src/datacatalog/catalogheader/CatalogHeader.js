import * as React from 'react'
import { Header } from '../../components/header/Header'
import { Metrics } from '../../utils/Metrics'

export const CatalogHeader = (props) => {
  const { config } = props
  return (
    <React.Fragment>
      <Metrics
        gt={config.gt}
        amplitude_project_id={config.amplitude_project_id}
        amplitude_endpoint={config.amplitude_endpoint}
        page={config.page}
        section={config.section}
      />
      <Header config={config} {...props} />
    </React.Fragment>
  )
}

export default CatalogHeader
