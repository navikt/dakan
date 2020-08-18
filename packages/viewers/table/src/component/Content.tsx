import * as React from 'react';
import { Block } from 'baseui/block';
import { format } from 'date-fns';
import { LargeWidth, LabeledContent, ToggleUserText, SingleUserText, Searchbox, Rating, Panel } from '@dakan/ui';
import { LabelLarge } from 'baseui/typography';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { useStyletron } from 'baseui';
import { Accordion } from 'baseui/accordion';

import GetValue from '../utils/GetValue';
import ColumnListFilter from '../utils/ColumnListFilter';
import TableColumns from './TableColumns';

const items = (props: any): JSX.Element[] => {
    const content = props.properties;

    const ITEMS = [
        { item: 'schema_name', label: 'Skjema' },
        { item: 'team_name', label: 'Team navn' },
        { item: 'db_name', label: 'Database navn' },
        { item: 'host', label: 'Host adresse' },
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
    const { data, numberOfColumns } = props;
    const [isExpanded, setIsExpanded] = React.useState('');
    const [, theme] = useStyletron();
    return (
        <React.Fragment>
            {props && props.data && (
                <Block>
                    <Block marginBottom="scale1200" flex="1">
                        <LabelLarge>
                            <b>Beskrivelse</b>
                        </LabelLarge>
                        <Block marginTop="scale200" $style={{ ...theme.typography.font300 }}>
                            {data.properties.table_description}
                        </Block>
                        <Accordion onChange={(e) => setIsExpanded(GetValue(() => e.expanded[0].toString(), ''))}>
                            <Panel title={isExpanded === '0' ? "Vis mindre" : "Vis mer"} isExpanded={isExpanded === '0'}>
                                <SingleUserText
                                    dataId={props.data.id}
                                    userText={props.description}
                                    setUserText={props.setDescription}
                                    title="Utvidet beskrivelse"
                                    edgeLabel="hasTableDescription"
                                    nodeLabel="table_description" />
                            </Panel>
                        </Accordion>
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
                        <Block marginBottom="scale800" marginTop="-20px">
                            <Rating
                                ratings={props.ratings}
                                setRatings={props.setRatings}
                                dataId={props.data.id}
                                edgeLabel="hasRating"
                                nodeLabel="table_rating"
                            />
                        </Block>
                        <Main data={props.data} numberOfColumns={props.numberOfColumns} {...props} />
                        <ToggleUserText
                            dataId={props.data.id}
                            userTexts={props.comments}
                            setUserTexts={props.setComments}
                            title="Kommentar"
                            edgeLabel="hasTableComment"
                            nodeLabel="table_comment"
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
