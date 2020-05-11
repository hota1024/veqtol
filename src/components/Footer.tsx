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
          <h4 className="footer-tags-title">Tags</h4>
          <Tags tags={tagNames} />
        </div>
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
          border-top: 1px solid rgba(0, 0, 0, 0.2);
          padding: 64px 0;
          text-align: center;
        }

        .footer-tags-title {
          font-size: 2rem;
          margin: 0;
          margin-bottom: 32px;
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
