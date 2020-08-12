import * as React from 'react'
import { Select } from 'baseui/select'
import { VARIANT } from 'baseui/tag'
import { Block } from 'baseui/block'
import axios from 'axios'
import Cookies from 'js-cookie'
import env from '@beam-australia/react-env'

import { Tag } from '../../components/tag/Tag'
import GetValue from '../../utils/GetValue/GetValue'
import CheckIfAuthorized from '../../utils/CheckIfAuthorized/CheckIfAuthorized'

const graph_server = env('GRAPH_SERVER')

export const SelectOpplysningstype = (props) => {
  const { tagOptions, dataId, columnTags, setColumnTags } = props

  const deleteTag = (index, tagId) => {
    const tokenId = Cookies.get('ClientToken')
    const newTags = [...columnTags]

    newTags.splice(index, 1)

    axios
      .delete(`${graph_server}/edge`, {
        params: { n1: dataId, n2: tagId },
        headers: { 'JWT-Token': tokenId },
      })
      .then(() => setColumnTags(newTags))
      .catch((e) => console.log(e))
  }

  const addTag = (value) => {
    const tokenId = Cookies.get('ClientToken')
    const newTag = value[0]
    const newTags = [...columnTags]

    newTags.unshift(newTag)

    const tagPayload = [
      {
        outV: dataId,
        inV: newTag.id,
        label: 'hasTag',
      },
    ]

    axios
      .put(`${graph_server}/edge`, tagPayload, {
        headers: { 'JWT-Token': tokenId },
      })
      .then(() => setColumnTags(newTags))
      .catch((e) => console.log(e))
  }

  const getTags = () => {
    return columnTags.map((tag, index) => {
      return (
        <React.Fragment>
          {tag && tag.properties && (
            <Tag
              key={'tag_' + index}
              variant={VARIANT.outlined}
              onActionClick={() =>
                CheckIfAuthorized(() => deleteTag(index, tag.id))
              }
            >
              {GetValue(() => tag.properties.name)}
            </Tag>
          )}
        </React.Fragment>
      )
    })
  }

  const getOptions = () => {
    const options = tagOptions.map((tag) => ({
      name: GetValue(() => tag.properties.name),
      id: tag.id,
      properties: tag.properties,
    }))
    return (
      <Select
        options={options}
        labelKey="name"
        valueKey="name"
        onChange={(tag) =>
          CheckIfAuthorized(() => addTag(tag.value))
        }
        placeholder="Velg opplysningtype"
        maxDropdownHeight="300px"
      />
    )
  }

  return (
    <Block>
      {tagOptions && getOptions()}
      {columnTags && columnTags.length > 0 && (
        <Block marginTop="scale300">
          <Block marginTop="scale300">{getTags()}</Block>
        </Block>
      )}
    </Block>
  )
}
export default SelectOpplysningstype
