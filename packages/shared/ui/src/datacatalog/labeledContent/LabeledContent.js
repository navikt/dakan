import React from 'react';
import {Block} from 'baseui/block';
import {Label} from '../../components/label';
import {LabelMedium} from 'baseui/typography';
import {useStyletron} from 'baseui';

const FlexFormatVersion = (props) => {
    const [, theme] = useStyletron();
    return (
        <Block marginBottom="scale800" display={['block', 'flex']} flexDirection="row" justifyContent="center">
            <Block flex="1" marginRight="scale800" marginBottom={['scale200', 'none']}>
                {props.description && (
                    <Label>
                        {props.description}
                    </Label>
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
                                ...theme.typography.font300
                            }
                        }
                    }}
                >
                    {props.children}
                </Block>
            </Block>
        </Block>
    );
};

const ListItemVersion = (props) => {
    const [, theme] = useStyletron();
    return (
        <React.Fragment>
            <Block marginBottom="scale800">
                <Block marginBottom="scale200">
                    <Label>
                        {props.description}
                    </Label>
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
                                    ...theme.typography.font300
                                }
                            }
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

export default LabeledContent;
