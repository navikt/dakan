import * as React from 'react';
import PlotlyChartViewer from '../component/PlotlyChartViewer';
import {Tabs, Tab} from '@dakan/ui';
import {LabelLarge} from 'baseui/typography';
import {useStyletron} from 'baseui';

const TabViewer = (props: any) => {
    const {dataTypeMetrics, plotlyChart, metaData, countTable} = props;
    const [activeKey, setActiveKey] = React.useState('');
    const [, theme] = useStyletron();

    const getActiveKey = () => {
        if(dataTypeMetrics && dataTypeMetrics.props.children){
            return 'statestikk'
        }
        else if (plotlyChart) {
            return "histogram"
        }
        else if (countTable && countTable.props.children) {
            return "mest"
        }
        else if (metaData && metaData.props.children) {
            return "metaData"
        } else {
            return ''
        }
    }

    React.useEffect(()=> {
        setActiveKey(getActiveKey())
    },[])

    const getTitle = (title: string, key: string) => {
        return (
            <LabelLarge color={key === activeKey ? 'black' : theme.colors.primary}>
                {key === activeKey ? <b>{title}</b> : <u>{title}</u>}
            </LabelLarge>
        );
    };

    return (
        <Tabs
            onChange={({activeKey}: any) => {
                setActiveKey(activeKey.toString());
            }}
            activeKey={activeKey}
        >
            {dataTypeMetrics && dataTypeMetrics.props.children && (
                <Tab key="statestikk" title={getTitle('Statistikk', 'statestikk')}>
                    {dataTypeMetrics}
                </Tab>
            )}
            {plotlyChart && (
                <Tab key="histogram" title={getTitle('Histogram', 'histogram')}>
                    <PlotlyChartViewer plotlyChart={plotlyChart} />
                </Tab>
            )}
            {countTable && countTable.props.children && (
                <Tab key="mest" title={getTitle('Mest brukte verdier', 'mest')}>
                    {countTable}
                </Tab>
            )}
            {metaData && metaData.props.children && (
                <Tab key="metaData" title={getTitle('Metadata', 'metaData')}>
                    {metaData}
                </Tab>
            )}
        </Tabs>
    );
};
export default TabViewer;
