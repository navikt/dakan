import * as React from 'react'
import amplitude from 'amplitude-js'
import { GoogleTagManager } from './GoogleTagManager'

const Amplitude = !global.isServer ? require('amplitude-js') : null

export const Metrics = ({
  gt,
  amplitude_project_id,
  amplitude_endpoint,
  page,
  section,
}) => {
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
      { page &&
        section &&
        gt &&
        amplitude_project_id &&
        amplitude_endpoint && <GoogleTagManager gtmId={gt} />}
    </React.Fragment>
  )
}

export default Metrics
