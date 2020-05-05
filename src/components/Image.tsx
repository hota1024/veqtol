import { FC } from 'react'

export type ImageProps = {
  src?: string
  alt?: string
  width?: number | string
  height?: number | string
  srcset?: string
  fitType?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
}

export const Image: FC<ImageProps> = (props) => {
  const { src, alt, srcset } = props
  let { width, height, fitType } = props

  width = typeof width === 'number' ? width + 'px' : width ?? '100%'
  height = typeof height === 'number' ? height + 'px' : height ?? '100%'
  fitType = fitType ?? 'fill'

  return (
    <>
      <img className="image-img" {...{ src, alt, width, height, srcset }} />

      <style jsx>{`
        .image-img {
          width: ${width};
          height: ${height};
          object-fit: ${fitType};
        }
      `}</style>
    </>
  )
}
