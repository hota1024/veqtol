import dayjs from 'dayjs'
import veqtolJson from '../../veqtol.json'
import { VeqtolConfig } from '@/types'
import { Format } from '@/utils/Format'

export const defaultConfig: Partial<VeqtolConfig> = {
  titleColor: 'inherit',
  descriptionColor: 'inherit',
  background: '#f6f6f6',
  color: '#202020',
  siteImageUrl: `${veqtolJson.siteUrl}/veqtol.png`,
  postsPerPage: 6,
  postColor: 'white',
  postText: 'inherit',
  postHeader1BorderColor: '#202020',
  codeTheme: 'oceanicNext',
  inlineCodeColor: 'rgba(200, 200, 200, 0.4)',
  inlineCodeText: 'inherit',
  tagColor: '#f0f0f0',
  tagText: '#202020',
  timeColor: '#a0a0a0',
  buttonColor: 'white',
  buttonText: '#202020',
  postPaginationPrevText: 'Prev',
  postPaginationNextText: 'Next',
  footerNavColor: '#f0f0f0',
  footerNavLinkText: '#505050',
  footerNavLinkHoverText: '#202020',
  footerLinks: [],
  copyrightColor: '#202020',
  copyrightText: 'white',
  hideVeqtolCredit: false,
}

export const config = veqtolJson as VeqtolConfig

/**
 * Get configuration value or default value.
 *
 * @param key Keyof config.
 * @param defaultValue Default value.
 */
export function Get<K extends keyof VeqtolConfig>(
  key: K,
  defaultValue?: VeqtolConfig[K]
) {
  return config[key] ?? defaultValue ?? defaultConfig[key]
}

/**
 * Returns formatted configuration value.
 *
 * @param key Keyof config.
 */
export function FormatGet<K extends keyof VeqtolConfig>(key: K) {
  const now = dayjs(new Date())
  return Format(Get(key).toString(), {
    year: now.year(),
  })
}
