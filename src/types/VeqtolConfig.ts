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
  postColor?: string

  /**
   * Posts per page.
   *
   * @default `6`
   */
  postsPerPage?: number

  /**
   * Post text css color.
   *
   * @default `inherit`
   */
  postText?: string

  /**
   * Border css color of post header1.
   *
   * @default `#202020`
   */
  postHeader1BorderColor?: string

  /**
   * Inline code background css style.
   *
   * @default `rgba(200, 200, 200, 0.4)`
   */
  inlineCodeColor?: string

  /**
   * Inline code text css color.
   *
   * @default `inherit`
   */
  inlineCodeText?: string

  /**
   * Tag background css style.
   *
   * @default `#f0f0f0`
   */
  tagColor?: string

  /**
   * Tag text css color.
   *
   * @default `#202020`
   */
  tagText?: string

  /**
   * Time text css color.
   *
   * @default `#a0a0a0`
   */
  timeColor?: string

  /**
   * Button css color.
   *
   * @default `white`
   */
  buttonColor?: string

  /**
   * Button text css color.
   *
   * @default `#202020`
   */
  buttonText?: string

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

  /**
   * Copyright background css style.
   *
   * @default `#202020`
   */
  copyrightColor?: string

  /**
   * Copyright text css color.
   *
   * @default `white`
   */
  copyrightText?: string

  /**
   * Copyright text.
   */
  copyright?: string

  /**
   * Whether hide veqtol credit.
   *
   * @default `false`
   */
  hideVeqtolCredit?: boolean
}
