import env from '@beam-australia/react-env'
import { navTheme } from '@dakan/theme'

const theme = navTheme()

export function getViewerProps(type) {
    if (!type) {
        return { link: '/viewer', backgroundColor: '#FFA733' }
    }

    if (Array.isArray('type', type)) {
        type = type[0]
    }

    if (typeof type != 'string') {
        return { link: '/viewer', backgroundColor: '#FFA733' }
    }

    if (type.includes('aiven')) {
        console.log("type", type)
    }

    type = type.toLowerCase().trim()

    if (type === 'datapackage' || type === 'datapakke' || type === 'datasett') {
        return {
            link: env('DATAPACKAGE_VIEWER_URL') || '/viewer',
            backgroundColor: theme.colors.tagDatasetBackgroundColor,
            borderColor: theme.colors.tagDatasetBorderColor,
        }
    }

    if (type === 'api') {
        return {
            link: env('API_VIEWER_URL') || '/viewer',
            backgroundColor: theme.colors.tagApiBackgroundColor,
            borderColor: theme.colors.tagApiBorderColor,
        }
    }

    if (type === 'apier') {
        return {
            link: env('API_VIEWER_URL') || '/viewer',
            backgroundColor: theme.colors.tagApiBackgroundColor,
            borderColor: theme.colors.tagApiBorderColor,
        }
    }

    if (type === 'begrep' || type === 'term') {
        return {
            link: env('TERM_VIEWER_URL') || '/viewer',
            backgroundColor: theme.colors.tagTermBackgroundColor,
            borderColor: theme.colors.tagTermBorderColor,
        }
    }

    if (type === 'parquet' || type === 'egg') {
        return {
            link: env('PARQUET_VIEWER_URL') || '/viewer',
            backgroundColor: theme.colors.tagTermBackgroundColor,
            borderColor: theme.colors.tagTermBorderColor,
        }
    }

    if (type === 'bigquery') {
        return {
            link: env('BIGQUERY_VIEWER_URL') || '/viewer',
            backgroundColor: theme.colors.tagTermBackgroundColor,
            borderColor: theme.colors.tagTermBorderColor,
        }
    }

    if (type === 'godkjent_begrep' || type === 'approved_term') {
        return {
            link: env('TERM_VIEWER_URL') || '/viewer',
            backgroundColor: theme.colors.tagTermBackgroundColor,
            borderColor: theme.colors.tagTermBorderColor,
        }
    }

    if (type === 'table' || type === 'tabell' || type === 'database_tabell') {
        return {
            link: env('TABLE_VIEWER_URL') || '/viewer',
            backgroundColor: theme.colors.tagTableBackgroundColor,
            borderColor: theme.colors.tagTableBorderColor,
        }
    }

    if (type === 'tableau') {
        return {
            link: env('TABLEAU_VIEWER_URL') || '/viewer',
            backgroundColor: theme.colors.tagTableauBackgroundColor,
            borderColor: theme.colors.tagTableauBorderColor,
        }
    }

    if (type.includes('pii_type')) {
        return {
            link: env('PIITYPE_VIEWER_URL') || '/viewer',
            backgroundColor: theme.colors.tagInformationtypeBackgroundColor,
            borderColor: theme.colors.tagInformationtypeBorderColor,
        }
    }

    if (type === 'kafka_topic' || type === 'kafka') {
        return {
            link: env('KAFKA_AIVEN_TOPIC_VIEWER_URL') || '/viewer',
            backgroundColor: theme.colors.tagKafkaBackgroundColor,
            borderColor: theme.colors.tagKafkaBorderColor,
        }
    }

    if (type === 'opplysningstype' || type === 'informationtype') {
        return {
            link: env('INFORMATION_TYPE_VIEWER_URL') || '/viewer',
            backgroundColor: theme.colors.tagInformationtypeBackgroundColor,
            borderColor: theme.colors.tagInformationtypeBorderColor,
        }
    }

    if (type === 'purpose' || type === 'formål') {
        return {
            link: env('PURPOSE_VIEWER_URL') || '/viewer',
            backgroundColor: theme.colors.tagPurposeBackgroundColor,
            borderColor: theme.colors.tagPurposeBorderColor,
        }
    }

    if (type === 'person') {
        return {
            link: env('PERSON_VIEWER_URL') || '/viewer',
            backgroundColor: theme.colors.tagPurposeBackgroundColor,
            borderColor: theme.colors.tagPurposeBorderColor,
        }
    }

    if (type === 'team') {
        return {
            link: env('TEAM_VIEWER_URL') || '/viewer',
            backgroundColor: theme.colors.tagPurposeBackgroundColor,
            borderColor: theme.colors.tagPurposeBorderColor,
        }
    }

    if (type === 'nais_team' || type === 'naisteam') {
        return {
            link: env('NAISTEAM_VIEWER_URL') || '/viewer',
            backgroundColor: theme.colors.tagPurposeBackgroundColor,
            borderColor: theme.colors.tagPurposeBorderColor,
        }
    }

    if (type === 'nais_app' || type === 'naisapp') {
        return {
            link: env('NAISAPP_VIEWER_URL') || '/viewer',
            backgroundColor: theme.colors.tagPurposeBackgroundColor,
            borderColor: theme.colors.tagPurposeBorderColor,
        }
    }

    if (type === 'office') {
        return {
            link: env('OFFICE_VIEWER_URL') || '/viewer',
            backgroundColor: theme.colors.tagPurposeBackgroundColor,
            borderColor: theme.colors.tagPurposeBorderColor,
        }
    }

    if (type === 'ad_department') {
        return {
            link: env('AD_DEPARTMENT_VIEWER_URL') || '/viewer',
            backgroundColor: theme.colors.tagPurposeBackgroundColor,
            borderColor: theme.colors.tagPurposeBorderColor,
        }
    }

    if (type === 'produktområde' || type === 'productarea') {
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
