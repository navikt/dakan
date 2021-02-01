import React from 'react'
import { Block } from 'baseui/block'
import { StyledLink as Link } from 'baseui/link'
import { Tag } from '@dakan/ui'
import { KIND } from 'baseui/tag'

import getViewerProps from './getViewerProps'
import { getLocal } from './utils'

function getValue(result, value) {
  if (!result[value] || !result[value]) return
  return result[value]
}

function getTitle(source) {
  const title = source && source['_source'] && source['_source']['title']
  return title
}

function getTitleSnippet(source) {
  const title = source && source['_source'] && source['_source']['title']
  return title
}

function getLink(type, url) {
  return `${getViewerProps(type)['link']}/${url}`
}

function getType(source) {
  const type = source && source['_source'] && source['_source']['type']
  return type
}

const tag = (type, link) => {
  const backgroundColor = getViewerProps(type).backgroundColor
  const borderColor = getViewerProps(type).borderColor
  const label = getLocal(type)
  return (
    <Tag
      closeable={false}
      kind={KIND.accent}
      color="black"
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    >
      {label}
    </Tag>
  )
}

const Autocomplete = ({ autocompleteResults, autocompletedResults }) => {
  const items = autocompletedResults.map((result) => {
    const titleSnippet = getTitleSnippet(result, autocompleteResults.titleField)
    const title = getTitle(result, autocompleteResults.titleField)
    const url = getValue(result, autocompleteResults.urlField)
    const type = getType(result, autocompleteResults.sourceField)
    const score = getValue(result, autocompleteResults.scoreField)
    const link = getLink(type, url)
    return {
      titleSnippet: titleSnippet || title,
      title: title,
      link: link,
      type: type,
      score: score,
    }
  })

  const getList = (items) => {
    return items.map((item, index) => {
      return (
        <Block
          display="flex"
          width="100%"
          key={`autocomplete_result_${index}`}
          marginBottom="scale400"
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Block overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
            <Link
              isAnimateUnderline={false}
              isFocusVisible={false}
              href={item.link}
            >
              {` ${item.title}`}
            </Link>
          </Block>
          <Block >{tag(item.type, item.link)}</Block>
        </Block>
      )
    })
  }

  return (
    <Block
      left={0}
      right={0}
      top={'100%'}
      padding="scale300"
      position="absolute"
      overrides={{
        Block: {
          style: ({ $theme }) => ({
            border: `2px solid ${$theme.colors.borderFocus}`,
            backgroundColor: $theme.colors.background,
            zIndex: 900,
          }),
        },
      }}
    >
      {!!autocompleteResults &&
        !!autocompletedResults &&
        autocompletedResults.length > 0 && <Block>{getList(items)}</Block>}
    </Block>
  )
}

export default Autocomplete
