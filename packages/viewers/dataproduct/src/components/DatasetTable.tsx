import * as React from 'react'
import {TableBuilder, TableBuilderColumn} from 'baseui/table-semantic'
import {Block} from 'baseui/block'
import {StyledLink as Link} from 'baseui/link'
import {Dataset} from "../models/dataproducts";


export interface DatasetListProps {
    datasets: Dataset[]
}

const getLink = (dataset) => {
    return '../bigquery/' + dataset.title
    //return 'https://data.intern.nav.no/bigquery/arbeidsforhold-prod-39ca.enhetsregisteret.ereg'
}

const getDataset = (dataset: Dataset) => {
    if (dataset ) {
        return (
            <Block
                key={dataset.id}
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
            >
                <Block marginLeft="scale400">{dataset.title}</Block>
            </Block>
        )
    }
    return null
}

export const DatasetTable: React.FC<DatasetListProps> = ({ datasets }) => {
    const columns = [
        <TableBuilderColumn id="tittle" header="Tittel">
            {(dataset: Dataset) => <Link href={getLink(dataset)}>{getDataset(dataset)}</Link>}
        </TableBuilderColumn>,
        <TableBuilderColumn id="description" header="Beskrivelse">
            {(dataset: Dataset) => dataset.description}
        </TableBuilderColumn>,
    ]

    return <TableBuilder data={datasets}>{columns}</TableBuilder>
}
export default DatasetTable
