import { useContext } from 'react'
import { CommonContext } from '@/pages/_app'
import { Tags } from './Tags'
import { Get, FormatGet } from '@/utils'
import Link from 'next/link'

export const Footer = () => {
  const { tagNames } = useContext(CommonContext)
  const navItems = Get('footerLinks')

  return (
    <>
      <footer className="footer">
        <div className="footer-tags">
          <h4 className="footer-tags-title">Tags</h4>
          <Tags tags={tagNames} />
        </div>
        {navItems.length > 0 && (
          <nav className="footer-nav">
            {navItems.map((item, key) => (
              <Link key={key} href={item.href}>
                <a
                  href={item.href}
                  {...(item.newTab ? { target: '__blank' } : {})}
                >
                  {item.text}
                </a>
              </Link>
            ))}
          </nav>
        )}
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
          padding: 32px 0;
          text-align: center;
        }

        .footer-tags-title {
          font-size: 2rem;
          margin: 0;
          margin-bottom: 32px;
        }

        .footer-nav {
          padding: 32px 0;
          background: ${Get('footerNavColor')};
          text-align: center;
        }

        .footer-nav-link {
          color: ${Get('footerNavLinkText')};
          margin: 0 14px;
          text-decoration: none;
        }

        .footer-nav-link:hover {
          color: ${Get('footerNavLinkHoverText')};
        }

        .footer-copyright {
          background: ${Get('copyrightColor')};
          color: ${Get('copyrightText')};
          text-align: center;
          padding: 24px 0;
        }

        .footer-veqtol {
          padding: 24px 0;
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
