/* eslint-disable react/jsx-pascal-case */
import * as React from 'react';
import {Block} from 'baseui/block';
import {HeadingMedium, LabelLarge, LabelMedium} from 'baseui/typography';
import {TableBuilder, TableBuilderColumn} from 'baseui/table-semantic';
import {StyledLink as Link} from 'baseui/link';
import {LayoutSplit as Layout} from "@dakan/ui";

const getLink = (row) => {
    return '../person/' + row.id;
};

const Content = ({item}) => {
    const columns: any[] = [
        <TableBuilderColumn id="name" header="Navn">
            {(row) => <Link href={getLink(row)}>{row.data.name}</Link>}
        </TableBuilderColumn>,
        <TableBuilderColumn id="id" header="Ident">
            {(row) => row.data.id}
        </TableBuilderColumn>,
        <TableBuilderColumn id="roles" header="Rolle">
            {(row) => row.data.roles}
        </TableBuilderColumn>,
        <TableBuilderColumn id="type" header="Ansatt">
            {(row) => row.data.type}
        </TableBuilderColumn>,
    ];

    const getTable = () => {
        let rows: any = [];
        item['members_team'].map((member) => {
            const row: any = {};
            row['id'] = member['navIdent'];
            const data: any = {
                id: member['navIdent'],
                name: member['resource']['fullName'],
                roles: member['roles'],
                type: member['resource']['resourceType'],
            };
            row['data'] = data;
            rows.push(row);
        });

        return <TableBuilder data={rows}>{columns}</TableBuilder>;
    };

    const Head = () => (
        <Block>
            <Block>
                <Block>{item['description_team']}</Block>
            </Block>
            <Block marginTop="scale1600">
                <HeadingMedium>
                    <LabelLarge>Tilhører område</LabelLarge>
                    {item['name_area']}
                </HeadingMedium>
                <Block>{item['description_area']}</Block>
            </Block>
        </Block>
    );

    const Members = () => {
        if (item) {
            return (
                <Block width="100%" height="800px">
                    <LabelMedium>Medlemmer</LabelMedium>
                    {getTable()}
                </Block>
            );
        }
        return null;
    };

    return (
        <React.Fragment>
            <Block>
                <Layout
                    headingLabel='Team'
                    headingText={item['name_team']}
                    left={<Head />} 
                    right={<Members />}></Layout>
            </Block>
        </React.Fragment>
    );
};
export default Content;
