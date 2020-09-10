import * as React from 'react'

export interface TaggingProps {
  header?: string
  defaultTags?: string[]
  tagOptions?: any
  dataId?: any
  placeholder?: string
  dataTags?: any
  setdataTags?: any
  edgeLabel: string
  tagLabel?: any
  isEditMode?: boolean
}

export interface ElasticTaggingProps {
  header?: string
  defaultTags?: string[]
  tagType: string[]
  dataId?: any
  placeholder?: string
  dataTags?: any
  setdataTags?: any
  edgeLabel: string
  tagLabel?: string
  isEditMode?: boolean
}

export declare const ElasticTagging: React.FC<ElasticTaggingProps>
export declare const Tagging: React.FC<TaggingProps>
export default Tagging
