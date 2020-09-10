import * as React from 'react';
import {Block} from 'baseui/block';
import {LabelLarge} from 'baseui/typography';

import ColumnViewer from './ColumnViewer';

const TableColumns = (props: any): JSX.Element => {
    const {columnsToView, tagOptions, isEditMode} = props;

    if (!columnsToView.length) {
        return (
            <Block display="flex" justifyContent="center" marginTop="scale1000">
                <LabelLarge>Ingen kolonner funnet.</LabelLarge>
            </Block>
        );
    }

    return columnsToView.map((column: any, index: number) => {
        return (
            <React.Fragment key={`Column_list_item_${index}`}>
                {columnsToView && <ColumnViewer columnData={column} tagOptions={tagOptions} isEditMode={isEditMode} />}
            </React.Fragment>
        );
    });
};

export default TableColumns;
