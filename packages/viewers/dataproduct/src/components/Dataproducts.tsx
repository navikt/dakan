/* eslint-disable react/jsx-pascal-case */
import * as React from 'react'
import {Block} from 'baseui/block'
import {ParagraphMedium, LabelMedium} from 'baseui/typography'

import {LayoutSplit as Layout, ContentItems} from '@dakan/ui'
import DatasetTable from "./DatasetTable";

const contentItemList = [
    {item: 'author', label: 'Dataprodukteier', format: 'text'},
    {item: 'periodicity', label: 'Periodisitet ', format: 'text'},
    {item: 'theme', label: 'Tema', format: 'text'},
    {item: 'pii', label: 'pii', format: 'text'},
    {item: 'repo', label: 'Git repo', format: 'link'},
    {item: 'modified_at', label: 'Oppdatert', format: 'date'},
]

export const Dataproducts: React.FC<{ dataproduct }> = ({dataproduct}) => {
    const contentItemsList = {
        properties: {
            author: "",
            periodicity: "",
            theme: "",
            pii: false,
            repo: "",
            modified_at: "",
        }
    }
    contentItemsList.properties.author = dataproduct.author
    contentItemsList.properties.periodicity = dataproduct.periodicity
    contentItemsList.properties.theme = dataproduct.theme
    contentItemsList.properties.pii = dataproduct.pii
    contentItemsList.properties.repo = dataproduct.repo
    contentItemsList.properties.modified_at = dataproduct.modified
    const Head = () => (
        <div role="main">
            <ParagraphMedium>
                {dataproduct?.description}
            </ParagraphMedium>
            <ContentItems ITEMS={contentItemList} item={contentItemsList}/>
        </div>
    )

    const Datasets = () => {
        if (dataproduct?.datasets) {
            return (
                <Block width="100%" height="800px">
                    <div role="complementary">
                        <LabelMedium>Data produktets datasets</LabelMedium>
                        <DatasetTable datasets={dataproduct?.datasets}/>
                    </div>
                </Block>
            )
        }
        return null
    }

    return (
        <Block>
            <Layout
                headingLabel="Dataprodukt"
                headingText={dataproduct?.title}
                left={<Head/>}
                right={<Datasets/>}
            />
        </Block>
    )
}
export default Dataproducts
