import veqtolJson from '../../veqtol.json'
import { VeqtolConfig } from '../types/VeqtolConfig'

export const config = veqtolJson as VeqtolConfig

/**
 * Get configuration value or default value.
 *
 * @param key Keyof config.
 * @param defaultValue Default value.
 */
export function get<K extends keyof VeqtolConfig>(
  key: K,
  defaultValue?: VeqtolConfig[K]
) {
  return config[key] ?? defaultValue
}
