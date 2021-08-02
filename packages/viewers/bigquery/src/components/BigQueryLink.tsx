import * as React from 'react'
import { Block } from 'baseui/block'
import { StyledLink } from 'baseui/link'

export const BigQueryLink = ({dataset_id}): JSX.Element | null => {
    if (!dataset_id) {
        return null
    }

    try {
        const ids =  dataset_id.split('.')
        const project = ids[0] 
        const dataset = ids[1] 
        const table = ids[2] 

        const url = `https://console.cloud.google.com/bigquery?d=${dataset}&t=${table}&p=${project}&page=table`

        return (
        <Block>
            <StyledLink
            //@ts-ignore
            isAnimateUnderline={false}
            isFocusVisible={false}
            target="_blank"
            href={url}
            >
            {'Åpne i BigQuery'}
            </StyledLink>
        </Block>
        )
    }
    catch (e) {
        return null
    }
  }

  export default BigQueryLink