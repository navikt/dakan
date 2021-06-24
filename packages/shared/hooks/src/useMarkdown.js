import * as React from 'react'
import ReactMarkdown from 'react-markdown'

import axios from 'axios'
import { Block } from 'baseui/block'

export const useMarkdown = (markdownUrl, theme) => {
  const [markdownText, setMarkdownText] = React.useState()
  const { typography } = theme

  React.useEffect(() => {
    axios
      .get(markdownUrl)
      .then((response) => {
        const responseData = response.data
        const markdownBlock = (
          <Block
            overrides={{
              Block: {
                style: ({ $theme }) => {
                  return {
                    ...typography.font300,
                  }
                },
              },
            }}
          >
            <ReactMarkdown children={responseData} />
          </Block>
        )
        setMarkdownText(markdownBlock)
      })
      .catch((error) => console.log(error))
  }, [])

  return [markdownText]
}
export default useMarkdown
