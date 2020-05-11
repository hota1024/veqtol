import { PostMeta } from './PostMeta'
import { Component, FC } from 'react'

/*
 * PostModule type.
 */
export type PostModule = {
  /**
   * Post meta.
   */
  meta: PostMeta

  /**
   * Post layout.
   */
  default: Component | FC
}
