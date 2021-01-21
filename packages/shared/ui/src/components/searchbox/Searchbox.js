import React from 'react'
import { Input } from '../input'
import { Search } from 'baseui/icon'
import { Block } from 'baseui/block'
import {
  SearchIcon,
  SearchHoverIcon,
  SearchActiveIcon,
} from '../icons/SearchIcon'

import { Button } from '../button/Button'

/**
 * **Searchbox**
 */
export const Searchbox = (props) => {
  const size = props.size || 20

  return (
    <Block display="flex">
      <Input {...props} />
      <Button role="button" aria-label="Søk knapp" type="submit" startEnhancer={<SearchIcon fill="white" />}>
        Søk
      </Button>
    </Block>
  )
}

export default Searchbox
