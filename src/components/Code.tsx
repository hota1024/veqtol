import { FC } from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import clsx from 'clsx'
import { ParseLineQuery, PrismThemes, Get } from '@/utils'

type HighlightChildren = Parameters<Highlight['props']['children']>[0]

export type CodeProps = {
  children?: string
  language: Language
  className?: string
  title?: string
  highlight?: string
  theme?: keyof typeof PrismThemes
}

export const Code: FC<CodeProps> = (props) => {
  const code = props.children.trim() ?? ''
  const language =
    props.language ??
    (props?.className.replace(/language-/, '') as Language) ??
    ('' as Language)
  const title = props.title
  const highlightLines = ParseLineQuery(
    props.highlight || '',
    code.split(/\n/g).length
  )
  const isHighlightLine = (line: number) =>
    typeof highlightLines.find((item) => item === line) !== 'undefined'
  const highlightTheme = props.theme
    ? PrismThemes[props.theme]
    : PrismThemes[Get('codeTheme')]

  return (
    <>
      <Highlight
        {...defaultProps}
        code={code}
        language={language}
        theme={highlightTheme}
      >
        {({
          className,
          style,
          tokens,
          getLineProps,
          getTokenProps,
        }: HighlightChildren) => (
          <div
            className={clsx(className, props.className, 'code')}
            style={{ ...style }}
          >
            {title && <span className="code-title">{title}</span>}
            <pre className="code-content">
              {tokens.map((line, lineKey) => (
                <div
                  className={clsx(
                    'code-line',
                    isHighlightLine(lineKey) && 'code-line-highlight',
                    `code-line-${lineKey}`
                  )}
                  key={lineKey}
                  {...getLineProps({ line, key: lineKey })}
                >
                  {line.map((token, tokenKey) => (
                    <span
                      key={tokenKey}
                      {...getTokenProps({ token, key: tokenKey })}
                    />
                  ))}
                </div>
              ))}
            </pre>
          </div>
        )}
      </Highlight>

      <style jsx>{`
        .code {
          padding: 20px 0;
          font-family: 'Roboto Mono', monospace;
          position: relative;
          margin: 8px 0;
        }

        .code-title {
          background: rgba(0, 0, 0, 0.4);
          color: white;
          position: absolute;
          left: 32px;
          top: 0;
          padding: 8px 16px;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
        }

        .code-title + .code-content {
          margin: 0;
          padding-top: 32px;
        }

        .code-content {
          font-weight: 400;
          padding: 0;
          margin: 0;
          line-height: 1.4;
        }

        .code-content * {
          margin: 0;
        }

        .code-line {
          padding: 0 32px;
        }

        .code-line-highlight {
          background: rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  )
}
