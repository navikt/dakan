import React from 'react'
import { StyledLink } from 'baseui/link'
import { Block } from 'baseui/block'
import { Paragraph2 } from 'baseui/typography'
import { Label } from '@dakan/ui'
import { Tag, KIND } from 'baseui/tag'
import getViewerProps from '../components/getViewerProps'
import { getLocal, toTermQueries } from '../components/utils'
import { useSharedContext } from '../components/SharedContextProvider'

const htmlEscape = (str) => {
    if (!str) return ''

    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
}

const getEscapedField = (result, field) => {
    if (result && field) {
        const safeField = htmlEscape(result[field])
        return Array.isArray(safeField) ? safeField.join(', ') : safeField
    }
    return 'Ukjent'
}

const getDateField = (result, field) => {
    if (result && field && result[field]) {
        var options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }
        const dateObject = new Date(result[field])
        return dateObject.toLocaleString('no-NO', options)
    }
    return 'Ukjent'
}

const getTag = (type, dispatch) => {
    const label = getLocal(type)
    return (
        <Tag
            closeable={false}
            kind={KIND.accent}
            onClick={(e) => {
                dispatch({
                    type: 'setWidget',
                    key: 'format',
                    query: {
                        bool: {
                            should: toTermQueries('format.keyword', [type]),
                        },
                    },
                    value: [type],
                })
            }}
        >
            {label}
        </Tag>
    )
}

const shorten = (string) => {
    const length = 150
    const sep = ' '
    if (string.length <= length) return string
    return `${string.substr(0, string.lastIndexOf(sep, length))} ...`
}

const Result = ({ result, titleField, even }) => {
    const [, dispatch] = useSharedContext()
    const title = getEscapedField(result, titleField)
    const description = shorten(getEscapedField(result, 'description'))
    const id = getEscapedField(result, 'id')
    const issued = getDateField(result, 'issued')
    let type = getEscapedField(result, 'type')
    if (!type || type === 'NA') {
        type = getEscapedField(result, 'format')
    }
    if (!type) {
        type = 'NA'
    }
    const url = getViewerProps(type).link
    const link = `${url}/${id}`

    return (
        <Block backgroundColor={even ? 'white' : '#efefef'}>
            <Block
                paddingBottom="scale400"
                paddingTop="scale400"
                marginLeft="scale800"
                marginRight="scale800"
            >
                {title && id && (
                    <Block width="100%" marginBottom="scale200">
                        <Block overflow="wrap">
                            <Label>
                                <StyledLink href={link} animateUnderline>
                                    {title}
                                </StyledLink>
                            </Label>
                        </Block>
                    </Block>
                )}
                <Paragraph2 overflow={'wrap'}>
                    {description && (
                        <span dangerouslySetInnerHTML={{ __html: description }} />
                    )}
                </Paragraph2>
                <Block
                    width="100%"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Block flex="1">Oppdatert {issued}</Block>
                    <Block>{getTag(type, dispatch)}</Block>
                </Block>
            </Block>
        </Block>
    )
}

export default Result
