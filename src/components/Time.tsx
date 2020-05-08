import { FC } from 'react'
import dayjs from 'dayjs'

export type TimeProps = {
  time: string
  color?: string
}

export const Time: FC<TimeProps> = (props) => {
  const time = dayjs(props.time)
  const color = props.color ?? '#a0a0a0'

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
