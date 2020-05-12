/**
 * Navigation item type.
 */
export type NavigationItem = {
  /**
   * Navigation text.
   */
  text: string

  /**
   * Navigation URL.
   */
  href: string

  /**
   * Whether open link in new tab.
   *
   * @default `false`
   */
  newTab?: boolean
}

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
   * Site url without last slash(ex: `https://example.com`).
   */
  siteUrl: string

  /**
   * Site ogp image url.
   */
  siteImageUrl?: string

  /**
   * Your twitter username.
   *
   * @default `undefined`
   */
  twitterName?: string

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
   * Code default theme.
   *
   * @default `oceanicNext`
   */
  codeTheme?:
    | 'dracula'
    | 'duotoneDark'
    | 'duotoneLight'
    | 'github'
    | 'nightOwl'
    | 'nightOwlLight'
    | 'oceanicNext'
    | 'palenight'
    | 'shadesOfPurple'
    | 'synthwave84'
    | 'ultramin'
    | 'vsDark'

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
   * Footer navigation background style.
   *
   * @default `#f0f0f0`
   */
  footerNavColor?: string

  /**
   * Footer nav link text css color.
   *
   * @default `#505050`
   */
  footerNavLinkText?: string

  /**
   * Footer nav link hoverd text.
   *
   * @default `#202020`
   */
  footerNavLinkHoverText?: string

  /**
   * Footer navigation items.
   *
   * @defalut `[]`
   */
  footerLinks?: {
    /**
     * Navigation text.
     */
    text: string

    /**
     * Navigation URL.
     */
    href: string

    /**
     * Whether open link in new tab.
     *
     * @default `false`
     */
    newTab?: boolean
  }[]

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
