import * as React from 'react';

export interface MetricProps {
    gt: string;
    amplitude_project_id: string;
    amplitude_endpoint: string;
    viewer: string;
    page: string;
    section: string;
}

export declare const Metrics: React.FC<MetricProps>;
export default Metrics;
