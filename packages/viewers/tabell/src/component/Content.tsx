import * as React from 'react';
import {Block} from 'baseui/block';
import {KIND} from 'baseui/button';
import {format} from 'date-fns';
import Cookies from 'js-cookie';
import {
    LargeWidth,
    LabeledContent,
    ToggleUserText,
    SingleUserText,
    Searchbox,
    Rating,
    GetValue,
    ElasticTagging,
    Button,
    EditIcon,
    CheckIfAuthorized,
} from '@dakan/ui';
import {LabelLarge} from 'baseui/typography';
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';
import {useStyletron} from 'baseui';

import ColumnListFilter from '../utils/ColumnListFilter';
import TableColumns from './TableColumns';

const items = (props: any): JSX.Element[] => {
    const content = props.properties;

    const ITEMS = [
        {item: 'schema_name', label: 'Skjema'},
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
    const {data, numberOfColumns, isEditMode, description, setDescription} = props;
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
                        <Block marginTop="scale800">
                            <SingleUserText
                                dataId={data.id}
                                userText={description}
                                setUserText={setDescription}
                                title="Utvidet beskrivelse"
                                edgeLabel="hasTableDescription"
                                nodeLabel="table_description"
                                isEditMode={isEditMode}
                            />
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
    const [isEditMode, setIsEditMode] = React.useState(false);

    const expiresIn5mins = 0.0035;

    React.useEffect(() => {
        const editModeActivated = Cookies.get('TableEditModeActivated');
        const clientUser = Cookies.get('ClientUser');
        const tokenId = Cookies.get('ClientToken');
        if (editModeActivated && clientUser && tokenId) {
            setIsEditMode(true);
        }
        Cookies.remove('TableEditModeActivated');
    }, []);

    return (
        <Block>
            {props.data.properties && props.data.properties.table_name && (
                <LargeWidth
                    headingLabel={<b>Databasetabell</b>}
                    headingText={props.data.properties.table_name}
                    toolbar={
                        <Block display="flex" flex="1" justifyContent="flex-end">
                            <div role="form">
                                <Button
                                    role="switch"
                                    aria-checked={isEditMode}
                                    kind={KIND.secondary}
                                    startEnhancer={<EditIcon />}
                                    startEnhancerHover={<EditIcon fill="white" />}
                                    onClick={() => {
                                        Cookies.set('TableEditModeActivated', 'true', {expires: expiresIn5mins});
                                        if (isEditMode === true) {
                                            Cookies.remove('TableEditModeActivated');
                                        }
                                        CheckIfAuthorized(() => setIsEditMode(!isEditMode));
                                    }}
                                >
                                    Rediger innhold
                                </Button>
                            </div>
                        </Block>
                    }
                >
                    <Block>
                        <div role="main">
                            <Block display="flex" marginBottom="scale800" marginTop="-20px">
                                <Block display="flex" flex="1" justifyContent="flex-start">
                                    <Rating
                                        ratings={props.ratings}
                                        setRatings={props.setRatings}
                                        dataId={props.data.id}
                                        edgeLabel="hasTableRating"
                                        nodeLabel="table_rating"
                                    />
                                </Block>
                            </Block>
                            <Main
                                isEditMode={isEditMode}
                                data={props.data}
                                numberOfColumns={props.numberOfColumns}
                                {...props}
                            />
                            <Block marginTop="scale800" display={['block', 'block', 'flex', 'flex']}>
                                <Block flex="1" marginBottom={['scale800', 'scale800', 'none', 'none']}>
                                    <ElasticTagging
                                        header="Team navn"
                                        defaultTags={[GetValue(() => props.data.properties.team_name)]}
                                        tagType={['naisteam', 'team']}
                                        dataId={props.data.id}
                                        dataTags={props.teamTags}
                                        setDataTags={props.setTeamTags}
                                        edgeLabel={'hasTableTeamTag'}
                                        tagLabel={'name'}
                                        placeholder="Søk og legg til team"
                                        isEditMode={isEditMode}
                                    />
                                </Block>
                                <Block width={['none', 'none', 'scale800', 'scale800']} />
                                <Block flex="1" marginBottom={['scale800', 'scale800', 'none', 'none']}>
                                    <ElasticTagging
                                        header="Kontaktperson"
                                        tagType={['person']}
                                        dataId={props.data.id}
                                        dataTags={props.personTags}
                                        setDataTags={props.setPersonTags}
                                        edgeLabel={'hasTablePersonTag'}
                                        tagLabel={['fornavn', 'etternavn']}
                                        placeholder="Søk og legg til kontaktperson"
                                        isEditMode={isEditMode}
                                    />
                                </Block>
                            </Block>
                            <ToggleUserText
                                dataId={props.data.id}
                                userTexts={props.comments}
                                setUserTexts={props.setComments}
                                title="Kommentar"
                                edgeLabel="hasTableComment"
                                nodeLabel="table_comment"
                                isEditMode={isEditMode}
                            />
                        </div>
                        {props.columns && (
                            <div role="complementary">
                                <Block paddingTop="scale1000" display={['block', 'flex']} paddingBottom="scale100">
                                    <Block flex="1" alignContent="center" display="grid">
                                        <div role="search">
                                            <Searchbox
                                                aria-label="Søk i kolonne liste"
                                                placeholder="Søk i kolonne liste"
                                                onChange={(event: any) => {
                                                    setFilterText(event.target.value);
                                                    setFilteredColumns(
                                                        ColumnListFilter(props.columns, event.target.value)
                                                    );
                                                }}
                                            />
                                        </div>
                                    </Block>
                                </Block>
                                <div role="list">
                                    <TableColumns
                                        columnsToView={filterText ? filteredColumns : props.columns}
                                        tagOptions={props.tagOptions}
                                        isEditMode={isEditMode}
                                    />
                                </div>
                            </div>
                        )}
                    </Block>
                </LargeWidth>
            )}
        </Block>
    );
};
export default Content;
