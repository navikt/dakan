import * as React from 'react';
import {Block} from 'baseui/block';
import {LabelLarge} from 'baseui/typography';
import {Panel as BaseuiPanel} from 'baseui/accordion';
import {useStyletron} from 'baseui';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';

export const Panel = (props) => {
    const [css, theme] = useStyletron();

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
            overrides={{
                ToggleIcon: {
                    component: () => null,
                },
                Header: {
                    style: {
                        border: 'none',
                        borderBottom: 'none',
                    },
                },
                Content: {
                    style: {
                        paddingLeft: 'none',
                        paddingRight: 'none',
                        paddingBottom: 'none',
                        backgroundColor: 'none',
                        borderBottom: 'none',
                    },
                },
            }}
        >
            {props.children}
        </BaseuiPanel>
    );
};
export default Panel;
