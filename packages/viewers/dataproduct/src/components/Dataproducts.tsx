/* eslint-disable react/jsx-pascal-case */
import * as React from 'react'
import { Block } from 'baseui/block'
import { ParagraphMedium, LabelMedium } from 'baseui/typography'

import {LayoutSplit as Layout, ContentItems} from '@dakan/ui'
import DatasetTable from "./DatasetTable";
import {Dataproduct} from "../models/dataproducts";

const contentItemList = [
    { item: 'author', label: 'Dataprodukteier', format: 'text' },
    { item: 'periodicity', label: 'Periodisitet ', format: 'text' },
    { item: 'theme', label: 'Tema', format: 'text' },
    { item: 'pii', label: 'pii', format: 'text' },
    { item: 'repo', label: 'Git repo', format: 'link' },
    { item: 'modified_at', label: 'Oppdatert', format: 'date' },
]

export const Dataproducts: React.FC<{ dataproduct}> =({dataproduct}) =>
{
  const Head = () => (
    <div role="main">
      <ParagraphMedium>
        { dataproduct?.description}
      </ParagraphMedium>
        <ContentItems ITEMS={contentItemList} item={dataproduct} />
    </div>
  )

  const Datasets = () => {
    if (dataproduct?.datasets) {
      return (
        <Block width="100%" height="800px">
          <div role="complementary">
            <LabelMedium>Data produktets datasets</LabelMedium>
            <DatasetTable datasets={dataproduct?.datasets} />
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
          headingText={dataproduct?.title }
          left={<Head />}
          right={<Datasets />}
        />
      </Block>
  )
}
export default Dataproducts
