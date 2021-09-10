import * as React from 'react'
import {TableBuilder, TableBuilderColumn} from 'baseui/table-semantic'
import {Block} from 'baseui/block'
import {StyledLink as Link} from 'baseui/link'
import {Dataset} from "../models/dataproducts";


export interface DatasetListProps {
    datasets: Dataset[]
}

const getLink = (dataset) => {
    return '../bigquery/' + dataset.id
}

const getDataset = ({dataset}) => {
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
            {(dataset) => <Link href={getLink(dataset)}>{getDataset(dataset)}</Link>}
        </TableBuilderColumn>,
        <TableBuilderColumn id="description" header="Beskrivelse">
            {(dataset) => dataset.description}
        </TableBuilderColumn>,
        <TableBuilderColumn id="format" header="Format">
            {(dataset) => dataset.format}
        </TableBuilderColumn>,
    ]

    return <TableBuilder data={datasets}>{columns}</TableBuilder>
}
export default DatasetTable
