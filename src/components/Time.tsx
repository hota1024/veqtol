import { FC } from 'react'
import dayjs from 'dayjs'
import { Get } from '@/utils'

export type TimeProps = {
  time: string
  color?: string
}

export const Time: FC<TimeProps> = (props) => {
  const time = dayjs(props.time)
  const color = props.color ?? Get('timeColor')

  return (
    <>
      <time className="time" dateTime={time.toString()}>
        {time.format('YYYY/MM/DD')}
      </time>

      <style jsx>{`
        .time {
          color: ${color};
        }
      `}</style>
    </>
  )
}
