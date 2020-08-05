import React from 'react';
//@ts-ignore
import {Plotly} from '@deetly/plotly-view';

const PlotlyChartViewer = (prop: any) => {
    return (
        <React.Fragment>
            <Plotly spec={prop.plotlyChart} />
        </React.Fragment>
    );
};
export default PlotlyChartViewer;
