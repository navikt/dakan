import env from '@beam-australia/react-env'
import { navTheme } from '@dakan/ui'

const theme = navTheme()

export function getViewerProps(format) {
  if (!format) {
    return { link: '/viewer', backgroundColor: '#FFA733' }
  }

  if (Array.isArray(format)) {
    format = format[0]
  }

  if (typeof format != 'string') {
    return { link: '/viewer', backgroundColor: '#FFA733' }
  }

  format = format.toLowerCase().trim()

  //console.log(format)

  if (
    format === 'datapackage' ||
    format === 'datapakke' ||
    format === 'datasett'
  ) {
    return {
      link: env('DATAPACKAGE_VIEWER_URL') || '/viewer',
      backgroundColor: theme.colors.tagDatasetBackgroundColor,
      borderColor: theme.colors.tagDatasetBorderColor,
    }
  }

  if (format === 'api') {
    return {
      link: env('API_VIEWER_URL') || '/viewer',
      backgroundColor: theme.colors.tagApiBackgroundColor,
      borderColor: theme.colors.tagApiBorderColor,
    }
  }

  if (format === 'begrep' || format === 'term') {
    return {
      link: env('TERM_VIEWER_URL') || '/viewer',
      backgroundColor: theme.colors.tagTermBackgroundColor,
      borderColor: theme.colors.tagTermBorderColor,
    }
  }

  if (format === 'godkjent_begrep' || format === 'approved_term') {
    return {
      link: env('TERM_VIEWER_URL') || '/viewer',
      backgroundColor: theme.colors.tagTermBackgroundColor,
      borderColor: theme.colors.tagTermBorderColor,
    }
  }

  if (
    format === 'table' ||
    format === 'tabell' ||
    format === 'database_tabell'
  ) {
    return {
      link: env('TABLE_VIEWER_URL') || '/viewer',
      backgroundColor: theme.colors.tagTableBackgroundColor,
      borderColor: theme.colors.tagTableBorderColor,
    }
  }

  if (format === 'tableau') {
    return {
      link: env('TABLEAU_VIEWER_URL') || '/viewer',
      backgroundColor: theme.colors.tagTableauBackgroundColor,
      borderColor: theme.colors.tagTableauBorderColor,
    }
  }

  if (format.includes('pii_type')) {
    return {
      link: env('PIITYPE_VIEWER_URL') || '/viewer',
      backgroundColor: theme.colors.tagInformationtypeBackgroundColor,
      borderColor: theme.colors.tagInformationtypeBorderColor,
    }
  }

  if (format === 'kafka topic' || format === 'kafka') {
    return {
      link: env('KAFKA_TOPIC_VIEWER_URL') || '/viewer',
      backgroundColor: theme.colors.tagKafkaBackgroundColor,
      borderColor: theme.colors.tagKafkaBorderColor,
    }
  }

  if (format === 'opplysningstype' || format === 'informationtype') {
    return {
      link: env('INFORMATION_TYPE_VIEWER_URL') || '/viewer',
      backgroundColor: theme.colors.tagInformationtypeBackgroundColor,
      borderColor: theme.colors.tagInformationtypeBorderColor,
    }
  }

  if (format === 'purpose' || format === 'formål') {
    return {
      link: env('PURPOSE_VIEWER_URL') || '/viewer',
      backgroundColor: theme.colors.tagPurposeBackgroundColor,
      borderColor: theme.colors.tagPurposeBorderColor,
    }
  }

  if (format === 'person') {
    return {
      link: env('PERSON_VIEWER_URL') || '/viewer',
      backgroundColor: theme.colors.tagPurposeBackgroundColor,
      borderColor: theme.colors.tagPurposeBorderColor,
    }
  }

  if (format === 'team') {
    return {
      link: env('TEAM_VIEWER_URL') || '/viewer',
      backgroundColor: theme.colors.tagPurposeBackgroundColor,
      borderColor: theme.colors.tagPurposeBorderColor,
    }
  }

  if (format === 'produktområde' || format === 'productarea') {
    return {
      link: env('PRODUCTAREA_VIEWER_URL') || '/viewer',
      backgroundColor: theme.colors.tagPurposeBackgroundColor,
      borderColor: theme.colors.tagPurposeBorderColor,
    }
  }

  // fallback to generic viewer
  return { link: '/viewer', color: '#FFA733' }
}

export default getViewerProps
