import * as React from 'react'
import { Block } from 'baseui/block'
import Markdown from 'react-markdown'
import {useContent} from '../hooks/useContent'

export const Readme = ({ url }) => {
  const [data, loading, error] = useContent(url)

  const md: string = data && typeof data === 'string' ? data : '' 

  return (
    <React.Fragment>
      <Block marginTop="scale800">
       {error && 'Error loading readme'} 
       {data && ( 
      <Markdown>
       {md}
       </Markdown>
       )}
      </Block>
    </React.Fragment>
  )
}
export default Readme
