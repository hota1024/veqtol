/*
 * Veqtol configuration type.
 */
export type VeqtolConfig = {
  /**
   * Site title.
   */
  title: string

  /**
   * Site title text css color.
   *
   * @default `inherit`
   */
  titleColor?: string

  /**
   * Site description.
   */
  description?: string

  /**
   * Site description text css color.
   *
   * @default `inherit`
   */
  descriptionColor?: string

  /**
   * Site background css style.
   *
   * @default `#f6f6f6`
   */
  background?: string

  /**
   * Site primary text css color.
   *
   * @default `#202020`
   */
  color?: string

  /**
   * Post background css style.
   *
   * @default `white`
   */
  postBackground?: string

  /**
   * Tag background css style.
   *
   * @default `#f0f0f0`
   */
  tagBackground?: string

  /**
   * Tag text css color.
   *
   * @default `#202020`
   */
  tagColor?: string

  /**
   * Time text css color.
   *
   * @default `#a0a0a0`
   */
  timeColor?: string

  /**
   * Post pagination previous text.
   *
   * @default `Prev`
   */
  postPaginationPrevText?: string

  /**
   * Post pagination next text.
   *
   * @default `Next`
   */
  postPaginationNextText?: string
}
