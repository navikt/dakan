import * as React from 'react'
import { Block } from 'baseui/block'
import { LabelLarge } from 'baseui/typography'
import { Panel as BaseuiPanel } from 'baseui/accordion'
import { useStyletron } from 'baseui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { merge } from '../../utils/merge'

export const Panel = (props) => {
  const [, theme] = useStyletron()

  let themeOverrides = theme && theme.panelOverrides

  const mergedOverrides = merge(themeOverrides || {}, props.overrides || {})

  return (
    <BaseuiPanel
      {...props}
      title={
        <Block>
          <LabelLarge color={theme.colors.primary}>
            {props.isExpanded ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
            <span> </span>
            <span>{props.title}</span>
          </LabelLarge>
        </Block>
      }
      overrides={mergedOverrides}
    >
      {props.children}
    </BaseuiPanel>
  )
}
export default Panel
