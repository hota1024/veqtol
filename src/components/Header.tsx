import { FC } from 'react'
import Link from 'next/link'

export type HeaderProps = {
  title: string
  description: string
}

export const Header: FC<HeaderProps> = (props) => {
  return (
    <>
      <header className="header-root">
        <Link href="/">
          <a className="header-link" href="/">
            <h1 className="header-title">{props.title}</h1>
            <h2 className="header-description">{props.description}</h2>
          </a>
        </Link>
      </header>

      <style jsx>{`
        .header-root {
          margin-top: 32px;
          margin-bottom: 63px;
          text-align: center;
        }

        .header-link {
          text-decoration: none;
          color: inherit;
        }

        .header-title {
          font-size: 3rem;
          margin-bottom: 16px;
        }

        .header-description {
          font-size: 1.2rem;
          margin: 0;
        }
      `}</style>
    </>
  )
}
