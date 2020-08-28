import * as React from 'react'

export interface TaggingProps {
  tagOptions?: any
  dataId?: any
  placeholder?: string
  dataTags?: any
  setdataTags?: any
  edgeLabel: string
  tagLabel?: any
}

export interface ElasticTaggingProps {
  tagType: string
  dataId?: any
  placeholder?: string
  dataTags?: any
  setdataTags?: any
  edgeLabel: string
  tagLabel?: string
  esLabel?: string
}

export declare const ElasticTagging: React.FC<ElasticTaggingProps>
export declare const Tagging: React.FC<TaggingProps>
export default Tagging
