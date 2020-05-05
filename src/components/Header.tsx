import { FC } from 'react'

export type HeaderProps = {
  title: string
  description: string
}

export const Header: FC<HeaderProps> = (props) => {
  return (
    <>
      <header className="header-root">
        <h1 className="header-title">{props.title}</h1>
        <h2 className="header-description">{props.description}</h2>
      </header>

      <style jsx>{`
        .header-root {
          margin: 64px 0;
          text-align: center;
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
