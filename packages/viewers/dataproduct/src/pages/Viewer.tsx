import React from 'react'
import {useElasticSearch} from '@dakan/hooks'
import {ErrorPage, LoadingSpinner} from '@dakan/ui'
import Dataproducts from "../components/Dataproducts";

import exampleJson from '../resources/dataproductExample.json'
import {Block} from "baseui/block";
import {Dataproduct} from "../models/dataproducts";


const Viewer = (props: any) => {
    const [
        nodeElastic,
        loadingNodeElastic,
        errorLoadingNodeElastic,
    ] = useElasticSearch(props.match.params.id)

    const dataproduct = nodeElastic as Dataproduct

    if (props.match.params.id === 'test') {
        return (
            <Block>
                <Dataproducts {...props} dataproduct={exampleJson}/>
            </Block>
        )
    }

    if (errorLoadingNodeElastic && !nodeElastic) {
        return <ErrorPage layout errorMessage={'Status 204 - No content found'}/>
    }

    console.log(dataproduct)
    return (
        <React.Fragment>
            {loadingNodeElastic && <LoadingSpinner/>}
            {errorLoadingNodeElastic && (
                <div>{'Feil ved lasting av node fra graph database'}</div>
            )}
            {nodeElastic && (
                <React.Fragment>
                    <Dataproducts
                        {...props}
                        dataproduct={dataproduct}
                    />
                </React.Fragment>
            )}
        </React.Fragment>
    )
}

export default Viewer
