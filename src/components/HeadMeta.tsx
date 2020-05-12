import { FC } from 'react'
import { Get } from '@/utils'

export type HeadMetaProps = {
  title: string
  description: string
  image?: string
}

export const HeadMeta: FC<HeadMetaProps> = (props) => {
  const { title, description, image } = props

  return (
    <>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={Get('siteUrl')} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:site_name" content={Get('title')} />
      {Get('twitterName') && (
        <>
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content={Get('twitterName')} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          {image && <meta name="twitter:image" content={image} />}
        </>
      )}
      <link rel="canonical" href={Get('siteUrl')} />
    </>
  )
}
