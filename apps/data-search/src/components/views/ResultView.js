import React from 'react'
import { StyledLink } from 'baseui/link'
import { Block } from 'baseui/block'
import { Paragraph2, Label1 } from 'baseui/typography'
import { Tag } from '@dakan/ui'
import { KIND } from 'baseui/tag'

import getViewerProps from './view-helpers/getViewerProps'
import { getLocal } from './view-helpers/getLocal'
import { getEscapedField, getRaw } from './view-helpers/utils'

const getTag = (type) => {
  const backgroundColor = getViewerProps(type).backgroundColor
  const borderColor = getViewerProps(type).borderColor
  const label = getLocal(type)
  return (
    <Tag
      closeable={false}
      kind={KIND.custom}
      color="black"
      backgroundColor={backgroundColor}
      borderColor={borderColor}
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

const ResultView = ({ result, titleField }) => {
  const title = getEscapedField(result, titleField)
  const description = shorten(getEscapedField(result, 'description'))
  const id = getEscapedField(result, 'id')
  let type = getRaw(result, 'type')
  if (!type || type === 'NA') {
    type = getRaw(result, 'format')
  }
  if (!type) {
    type = 'NA'
  }
  const url = getViewerProps(type).link
  const link = `${url}/${id}`

  return (
    <Block marginBottom="scale400">
      {title && id && (
        <Label1>
          <StyledLink href={link}>
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </StyledLink>
        </Label1>
      )}
      <Paragraph2 overflow={'wrap'}>
        {description && (
          <span dangerouslySetInnerHTML={{ __html: description }} />
        )}
      </Paragraph2>
      <Block marginTop="scale400">{getTag(type)}</Block>
      <Block
        marginTop="scale400"
        width="100%"
        overrides={{
          Block: {
            style: { borderBottom: '1px solid #efefef' },
          },
        }}
      />
    </Block>
  )
}

export default ResultView
