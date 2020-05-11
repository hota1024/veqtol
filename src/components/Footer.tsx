import { useContext } from 'react'
import { CommonContext } from '@/pages/_app'
import { Tags } from './Tags'
import { Get, FormatGet } from '@/utils'

export const Footer = () => {
  const { tagNames } = useContext(CommonContext)

  return (
    <>
      <footer className="footer">
        <div className="footer-tags">
          <h4 className="footer-item-title">Tags</h4>
          <Tags tags={tagNames} />
        </div>
        <nav className="footer-nav">
          <a className="footer-nav-link" href="/">
            Home
          </a>
          <a className="footer-nav-link" href="/">
            Home
          </a>
          <a className="footer-nav-link" href="/">
            Home
          </a>
        </nav>
        {Get('copyright') && (
          <div className="footer-copyright">{FormatGet('copyright')}</div>
        )}
        {!Get('hideVeqtolCredit') && (
          <div className="footer-veqtol">
            Powered by{' '}
            <a
              className="footer-veqtol-link"
              href="https://github.com/hota1024/veqtol"
              target="__blank"
            >
              🔺Veqtol
            </a>
          </div>
        )}
      </footer>

      <style jsx>{`
        .footer-tags {
          text-align: center;
          margin-bottom: 64px;
        }

        .footer-item-title {
          font-size: 2rem;
          margin: 0;
          margin-bottom: 32px;
        }

        .footer-nav {
          background: ${Get('footerNavColor')};
          text-align: center;
          padding: 32px 0;
          transition: all 100ms;
        }

        .footer-nav-link {
          color: ${Get('footerNavLinkText')};
          font-weight: 500;
          text-decoration: none;
          margin: 0 32px;
        }

        .footer-nav-link:hover {
          color: ${Get('footerNavLinkHoverText')};
        }

        .footer-copyright {
          background: ${Get('copyrightColor')};
          color: ${Get('copyrightText')};
          text-align: center;
          padding: 32px 0;
        }

        .footer-veqtol {
          padding: 10px 0;
          text-align: center;
          background: black;
          color: white;
        }

        .footer-veqtol-link {
          color: #f44336;
          text-decoration: none;
        }
      `}</style>
    </>
  )
}
