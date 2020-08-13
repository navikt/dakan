import * as React from 'react'
import amplitude from 'amplitude-js'
import env from '@beam-australia/react-env'
import { GoogleTagManager } from './GoogleTagManager'

const amplitude_project_id = env('AMPLITUDE_PROJECT_ID')
const amplitude_endpoint = env('AMPLITUDE_ENDPOINT')
const gt = env('GTM_ID')

export const Metrics = ({ viewer, page, section }) => {
  const AmplitudeConfig = {
    apiEndpoint: amplitude_endpoint,
    saveEvents: true,
    includeUtm: true,
    includeReferrer: true,
    trackingOptions: {
      city: false,
      ip_address: false,
    },
  }

  React.useEffect(() => {
    const eventProperty = {
      viewer: viewer,
      page: page,
      section: section,
    }
    if (amplitude_project_id && amplitude_endpoint) {
      const amplitudeInstance = amplitude.getInstance()
      amplitudeInstance.init(amplitude_project_id, undefined, AmplitudeConfig)
      amplitudeInstance.logEvent('page_visit', eventProperty)
    }
  }, [gt, amplitude_project_id, amplitude_endpoint, viewer, page, section])

  return (
    <React.Fragment>
      {viewer &&
        page &&
        section &&
        gt &&
        amplitude_project_id &&
        amplitude_endpoint && <GoogleTagManager gtmId={gt} />}
    </React.Fragment>
  )
}

export default Metrics
