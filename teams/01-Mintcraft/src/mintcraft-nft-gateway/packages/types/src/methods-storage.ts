import { URL } from 'url'
import { ParsedArgs } from './methods-shared'
import { OpenSeaNFTMetadataBasics, NFTMetadata } from './nft'

// ------- consts -------
// 
export const UPLOADING_FIELDS = {
  CONTENT: 'content',
  PREVIEW: 'preview'
}

// ------- interface -------
//
interface ArgsWithReference {
  /** reference args for entity */
  reference: string
}

export interface ArgsEntityUpload extends ParsedArgs, OpenSeaNFTMetadataBasics {
  /** nft properties json string */
  properties?: string
}

export interface ResultEntityUploaded {
  /** the main hash id for the NFT that encloses all of the files including metadata.json for the NFT */
  hashId: string
  /** metadata url */
  url: URL
  /** metadata json */
  metadata?: NFTMetadata
  /** metadata json with gateway url  */
  embed?: NFTMetadata
}

export type ArgeEntityGetMetadata = ParsedArgs & ArgsWithReference