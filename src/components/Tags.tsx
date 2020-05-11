import { FC } from 'react'
import clsx from 'clsx'
import { Chip } from '@/components'
import { Get } from '@/utils'

export type TagsProps = {
  tags: string[]
  className?: string
}

export const Tags: FC<TagsProps> = (props) => {
  return (
    <>
      <div className={clsx(props.className)}>
        {props.tags.map((tag, key) => (
          <Chip
            key={key}
            href={`/tags/${tag}`}
            color={Get('tagColor')}
            textColor={Get('tagText')}
          >
            {tag}
          </Chip>
        ))}
      </div>
    </>
  )
}
