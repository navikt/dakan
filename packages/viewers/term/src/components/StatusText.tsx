import * as React from 'react';
import {LabeledContent} from '@dakan/ui';
import {Check, Alert, DeleteAlt} from 'baseui/icon';

const StatusText = (props: any) => {
    const {status} = props;
    if (!status) return null;
    else {
        return (
            <React.Fragment>
                <LabeledContent aria-label="label" description="Status" list>
                    {status === 'Godkjent begrep' ? <Check /> : status === 'Utkast' ? <Alert /> : <DeleteAlt />}
                    {status}
                </LabeledContent>
            </React.Fragment>
        );
    }
};
export default StatusText;
