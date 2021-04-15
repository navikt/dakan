import * as React from 'react'
import amplitude from 'amplitude-js'
import env from '@beam-australia/react-env'
import { GoogleTagManager } from './GoogleTagManager'

const amplitude_project_id = 'default'
const amplitude_endpoint = env('AMPLITUDE_ENDPOINT')
const gt = env('GTM_ID')

export const Metrics = ({ page, section }) => {
  const AmplitudeConfig = {
    apiEndpoint: amplitude_endpoint,
    saveEvents: false,
    includeUtm: true,
    includeReferrer: true,
    platform: window.location.toString(),
  }

  React.useEffect(() => {
    const eventProperty = {
      sidetittel: page,
      section: section,
    }
    if (amplitude_project_id && amplitude_endpoint) {
      const amplitudeInstance = amplitude.getInstance()
      amplitudeInstance.init(amplitude_project_id, undefined, AmplitudeConfig)
      amplitudeInstance.logEvent('sidevisning', eventProperty)
    }
  }, [gt, amplitude_project_id, amplitude_endpoint, page, section])

  return (
    <React.Fragment>
      {page && section && gt && amplitude_project_id && amplitude_endpoint && (
        <GoogleTagManager gtmId={gt} />
      )}
    </React.Fragment>
  )
}

export default Metrics
