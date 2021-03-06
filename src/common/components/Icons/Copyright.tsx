import React from 'react'
import { TIconProps } from './iconProps'

export type TCopyrightProps = TIconProps

export const Copyright = ({
  size,
  className,
}: TCopyrightProps): JSX.Element => {
  return (
    <svg
      width={size}
      className={className}
      viewBox='0 0 13 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.5 0C2.91797 0 0 2.91797 0 6.5C0 10.082 2.91797 13 6.5 13C10.082 13 13 10.082 13 6.5C13 2.91797 10.082 0 6.5 0ZM6.5 1C9.54297 1 12 3.45703 12 6.5C12 9.54297 9.54297 12 6.5 12C3.45703 12 1 9.54297 1 6.5C1 3.45703 3.45703 1 6.5 1ZM6.5 3C4.57422 3 3 4.57422 3 6.5C3 8.42578 4.57422 10 6.5 10C7.78516 10 8.91797 9.30469 9.52344 8.26562C9.66406 8.02734 9.58203 7.72266 9.34375 7.58203C9.10547 7.44141 8.80078 7.51953 8.66016 7.75781C8.22656 8.5 7.42578 9 6.5 9C5.11328 9 4 7.88672 4 6.5C4 5.11328 5.11328 4 6.5 4C7.42578 4 8.23047 4.5 8.66406 5.24609C8.75 5.41016 8.91797 5.51562 9.10156 5.51953C9.28516 5.52344 9.45703 5.42188 9.54688 5.25781C9.63672 5.09766 9.62891 4.89844 9.52734 4.74219C8.92188 3.70312 7.78906 3 6.5 3Z'
        fill='currentColor'
      />
    </svg>
  )
}
