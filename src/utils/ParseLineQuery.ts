export const StartToExp = /^- *(\d+)$/
export const ToEndExp = /^(\d+) *-$/
export const RangeExp = /^(\d+) *-- *(\d+)$/
export const AddRangeExp = /^(\d+) *\+ *(\d+)$/
export const SubRangeExp = /^(\d+) *- *(\d+)$/
export const EvenExp = /^even$/
export const OddExp = /^odd$/
export const AllExp = /^all$/

export const OperatorExps = [
  StartToExp,
  ToEndExp,
  RangeExp,
  AddRangeExp,
  SubRangeExp,
]

export const RemoveExp = /^@(.+)$/

export const EvaluateToken = (token: string, lineCount: number) => {
  const allLines = Array.from({ length: lineCount }, (_, i) => i)
  const asLine = (line: number) =>
    line < 0 ? 0 : line > lineCount ? lineCount : line

  for (const operator of OperatorExps) {
    const matches = token.match(operator)
    if (matches) {
      const left = parseInt(matches[1])
      const right = parseInt(matches[2])

      if (operator === StartToExp) {
        return allLines.slice(0, asLine(left))
      }

      if (operator === ToEndExp) {
        return allLines.slice(left, lineCount)
      }

      if (operator === RangeExp) {
        return allLines.slice(asLine(left), asLine(right + 1))
      }

      if (operator === AddRangeExp) {
        return allLines.slice(asLine(left), asLine(left + right + 1))
      }

      if (operator === SubRangeExp) {
        return allLines.slice(asLine(left - right + 1), asLine(left + right))
      }
    }
  }

  if (token.match(EvenExp)) {
    return allLines.filter((line) => line % 2 === 0)
  }

  if (token.match(OddExp)) {
    return allLines.filter((line) => line % 2 !== 0)
  }

  if (token.match(AllExp)) {
    return allLines
  }

  const wouldNumber = parseInt(token)
  if (!isNaN(wouldNumber)) {
    return [wouldNumber]
  }

  return []
}

/**
 * Parse line query.
 *
 * @param query Line query.
 * @param lineCount Number of the lines.
 */
export const ParseLineQuery = (query: string, lineCount: number) => {
  const tokens = query
    .split(',')
    .map((q) => q.trim())
    .filter((token) => token !== '')
  let lines: number[] = []
  const selectors = tokens.filter((token) => !token.match(RemoveExp))
  const removers = tokens
    .filter((token) => token.match(RemoveExp))
    .map((token) => token.match(RemoveExp)[1])

  selectors.forEach((token) => {
    const evaluated = EvaluateToken(token, lineCount)
    evaluated.forEach((line) => {
      if (!lines.find((l) => l === line)) {
        lines.push(line)
      }
    })
  })

  removers.forEach((token) => {
    const evaluated = EvaluateToken(token, lineCount)
    evaluated.forEach((line) => {
      lines = lines.filter((l) => l !== line)
    })
  })

  return lines
}
