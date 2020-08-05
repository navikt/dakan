import * as React from 'react';
import {Accordion} from 'baseui/accordion';
import {Panel} from '@dakan/ui';
import TabViewer from './TabViewer';
import {Block} from 'baseui/block';

import GetValue from '../utils/GetValue';

const ToggleDetails = (prop: any) => {
    const {dataTypeMetrics, plotlyChart, metaData, countTable} = prop;
    const [isExpanded, setIsExpanded] = React.useState('');
    const dataContent =
        dataTypeMetrics.props.children ||
        plotlyChart ||
        metaData.props.children ||
        countTable.props.children;
    return (
        <Block>
            {dataContent && (
                <Block>
                    <Accordion onChange={(e) => setIsExpanded(GetValue(() => e.expanded[0].toString(), ''))}>
                        <Panel title="Mer informasjon" isExpanded={isExpanded === '0'}>
                            <TabViewer
                                dataTypeMetrics={dataTypeMetrics}
                                plotlyChart={plotlyChart}
                                metaData={metaData}
                                countTable={countTable}
                            />
                        </Panel>
                    </Accordion>
                </Block>
            )}
        </Block>
    );
};
export default ToggleDetails;
