import veqtolJson from '../../veqtol.json'
import { VeqtolConfig } from '../types/VeqtolConfig'

export const defaultConfig: Partial<VeqtolConfig> = {
  titleColor: 'inherit',
  descriptionColor: 'inherit',
  background: '#f6f6f6',
  color: '#202020',
  postColor: 'white',
  postText: 'inherit',
  postHeader1BorderColor: '#202020',
  inlineCodeColor: 'rgba(200, 200, 200, 0.4)',
  inlineCodeText: 'inherit',
  tagColor: '#f0f0f0',
  tagText: '#202020',
  timeColor: '#a0a0a0',
  buttonColor: 'white',
  buttonText: '#202020',
  postPaginationPrevText: 'Prev',
  postPaginationNextText: 'Next',
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
