import * as React from 'react';
import {Block} from 'baseui/block';
import {format} from 'date-fns';
import {LargeWidth, LabeledContent, ToggleComments, Searchbox} from '@dakan/ui';
import env from '@beam-australia/react-env';
import {H5, LabelLarge} from 'baseui/typography';
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';
import {useStyletron} from 'baseui';

import GetValue from '../utils/GetValue';
import ColumnListFilter from '../utils/ColumnListFilter';
import TableColumns from './TableColumns';

const server = env('GRAPH_SERVER');

const items = (props: any): JSX.Element[] => {
    const content = props.properties;

    const ITEMS = [
        {item: 'schema_name', label: 'Skjema'},
        {item: 'team_name', label: 'Team navn'},
        {item: 'db_name', label: 'Database navn'},
        {item: 'host', label: 'Host adresse'},
    ];

    return ITEMS.map((entry: any, i: number) => {
        let value = GetValue(() => content[entry.item]);
        if (entry.format && entry.format === 'date') {
            const date = new Date(value);
            if (typeof date.getMonth === 'function') {
                value = format(date, 'yyyy-MM-dd');
            }
        }
        return (
            <FlexGridItem key={`item_${i}`}>
                <LabeledContent description={entry.label} list>
                    {value}
                </LabeledContent>
                <Block width="scale1000" />
            </FlexGridItem>
        );
    });
};

const Main = (props: any): JSX.Element => {
    const {data, numberOfColumns} = props;
    const [, theme] = useStyletron();
    return (
        <React.Fragment>
            {props && props.data && (
                <Block>
                    <Block marginBottom="scale1200" flex="1">
                        <LabelLarge>
                            <b>Beskrivelse</b>
                        </LabelLarge>
                        <Block marginTop="scale200" $style={{...theme.typography.font300}}>
                            {data.properties.table_description}
                        </Block>
                    </Block>
                    <FlexGrid flexGridColumnCount={[1, 2, 3, 5]}>
                        {items(data)}
                        <FlexGridItem>
                            <LabeledContent description="Antall kolonner" list>
                                {numberOfColumns}
                            </LabeledContent>
                        </FlexGridItem>
                    </FlexGrid>
                </Block>
            )}
        </React.Fragment>
    );
};

const Content = (props: any): JSX.Element => {
    const [filteredColumns, setFilteredColumns] = React.useState();
    const [filterText, setFilterText] = React.useState();

    return (
        <Block>
            {props.data.properties && props.data.properties.table_name && (
                <LargeWidth headingLabel={<b>Databasetabell</b>} headingText={props.data.properties.table_name}>
                    <Block>
                        <Main data={props.data} numberOfColumns={props.numberOfColumns} />
                        <H5>
                            <b>Kommentar</b>
                        </H5>
                        <ToggleComments
                            dataId={props.data.id}
                            comments={props.comments}
                            setComments={props.setComments}
                            clientUser={props.clientUser}
                            server={server}
                        />
                        {props.columns && (
                            <React.Fragment>
                                <Block paddingTop="scale1000" display={['block', 'flex']} paddingBottom="scale100">
                                    <Block flex="1" alignContent="center" display="grid">
                                        <Searchbox
                                            placeholder="Søk i kolonne liste..."
                                            onChange={(event: any) => {
                                                setFilterText(event.target.value);
                                                setFilteredColumns(ColumnListFilter(props.columns, event.target.value));
                                            }}
                                        />
                                    </Block>
                                </Block>
                                <TableColumns
                                    columnsToView={filterText ? filteredColumns : props.columns}
                                    tagOptions={props.tagOptions}
                                    clientUser={props.clientUser}
                                />
                            </React.Fragment>
                        )}
                    </Block>
                </LargeWidth>
            )}
        </Block>
    );
};
export default Content;
