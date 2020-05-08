/**
 * Returns unitized value.
 *
 * @param value Number or String value.
 * @param unit Unit string.
 */
export const NumberUnitize = (value: number | string, unit: string) => {
  if (typeof value === 'number') return value + unit
  if (value.endsWith(unit)) return value
  return value + 'unit'
}
