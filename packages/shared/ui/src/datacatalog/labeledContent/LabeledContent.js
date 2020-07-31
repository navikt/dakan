import React from 'react';
import PropTypes from 'prop-types';
import {Block} from 'baseui/block';
import {LabelMedium} from 'baseui/typography';
import {useStyletron} from 'baseui';

const FlexFormatVersion = (props) => {
    const [useCss, theme] = useStyletron();
    return (
        <Block marginBottom="scale800" display={['block', 'flex']} flexDirection="row" justifyContent="center">
            <Block flex="1" marginRight="scale800" marginBottom={['scale200', 'none']}>
                {props.description && (
                    <LabelMedium
                        $style={{
                            marginTop: 0,
                            marginBottom: 0,
                            color: 'black',
                        }}
                    >
                        <b>{props.description}</b>
                    </LabelMedium>
                )}
            </Block>
            <Block marginLeft={['none', 'scale800']}></Block>
            <Block flex="3">
                <Block
                    flex="3"
                    overrides={{
                        Block: {
                            style: {
                                marginTop: 0,
                                marginBottom: 0,
                                overflowWrap: 'break-word',
                                wordWrap: 'break-word',
                                wordBreak: 'break-word',
                                ...theme.typography.font300,
                            },
                        },
                    }}
                >
                    {props.children}
                </Block>
            </Block>
        </Block>
    );
};

const ListItemVersion = (props) => {
    const [useCss, theme] = useStyletron();
    return (
        <React.Fragment>
            <Block marginBottom="scale800">
                <Block marginBottom="scale200">
                    <LabelMedium $style={{color: 'black'}}>
                        <b>{props.description}</b>
                    </LabelMedium>
                </Block>
                {props.description && (
                    <Block
                        overrides={{
                            Block: {
                                style: {
                                    marginTop: 0,
                                    marginBottom: 0,
                                    overflowWrap: 'break-word',
                                    wordWrap: 'break-word',
                                    wordBreak: 'break-word',
                                    ...theme.typography.font300,
                                },
                            },
                        }}
                    >
                        {props.children}
                    </Block>
                )}
            </Block>
        </React.Fragment>
    );
};

/**
 * **Labeled content** Labeled content
 */
export const LabeledContent = (props) => {
    if (props && props.list) {
        return <ListItemVersion {...props} />;
    } else {
        return <FlexFormatVersion {...props} />;
    }
};

LabeledContent.propTypes = {
    description: PropTypes.string,
    ariaLabel: PropTypes.string,
    layout1: PropTypes.bool,
};

LabeledContent.defaultProps = {
    description: null,
    ariaLabel: 'labeled item',
    layout1: false,
};

export default LabeledContent;
