import { FC } from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import highlightTheme from 'prism-react-renderer/themes/oceanicNext'
import clsx from 'clsx'

type HighlightChildren = Parameters<Highlight['props']['children']>[0]

export type CodeProps = {
  children?: string
  language: Language
  className?: string
  title?: string
}

export const Code: FC<CodeProps> = (props) => {
  const code = props.children.trim() ?? ''
  const language =
    props.language ??
    (props?.className.replace(/language-/, '') as Language) ??
    ('' as Language)
  const title = props.title

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
                <div key={lineKey} {...getLineProps({ line, key: lineKey })}>
                  {line.map((token, tokenKey) => (
                    <span
                      key={tokenKey}
                      {...getTokenProps({ token, tokenKey })}
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
          padding: 20px 32px;
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
        }

        .code-content * {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  )
}