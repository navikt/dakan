/* eslint-disable react/jsx-pascal-case */
import * as React from 'react'
import { Block } from 'baseui/block'
import { ParagraphMedium, LabelMedium } from 'baseui/typography'

import {LayoutSplit as Layout} from '@dakan/ui'
import DatasetTable from "./DatasetTable";
import {Dataproduct} from "../models/dataproducts";


export const Dataproducts: React.FC<{ dataproduct: Dataproduct }> =({dataproduct}) =>
{
  const Head = () => (
    <div role="main">
      <ParagraphMedium>
        { dataproduct?.title}
      </ParagraphMedium>
    </div>
  )

  const Datasets = () => {
    if (dataproduct.datasets) {
      return (
        <Block width="100%" height="800px">
          <div role="complementary">
            <LabelMedium>Data produktets datasets</LabelMedium>
            <DatasetTable datasets={dataproduct.datasets} />
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
          headingText={dataproduct?.description }
          left={<Head />}
          right={<Datasets />}
        />
      </Block>
  )
}
export default Dataproducts
