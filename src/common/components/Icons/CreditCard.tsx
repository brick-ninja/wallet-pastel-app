import React from 'react'

export type TCreditCardProps = {
  size?: number
  className?: string
  pathColor?: string
}

export const CreditCard = ({
  size = 44,
  className = 'text-gray-33',
  pathColor = '#FFFFFF',
}: TCreditCardProps): JSX.Element => {
  return (
    <svg
      width={size}
      className={className}
      viewBox='0 0 44 44'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='22' cy='22' r='22' fill='currentColor' />
      <path
        d='M14.25 14.5C12.464 14.5 11 15.964 11 17.75V26.25C11 28.036 12.464 29.5 14.25 29.5H29.75C31.536 29.5 33 28.036 33 26.25V17.75C33 15.964 31.536 14.5 29.75 14.5H14.25ZM14.25 16H29.75C30.725 16 31.5 16.775 31.5 17.75V18.5H12.5V17.75C12.5 16.775 13.275 16 14.25 16ZM12.5 20.5H31.5V26.25C31.5 27.225 30.725 28 29.75 28H14.25C13.275 28 12.5 27.225 12.5 26.25V20.5ZM25.75 24.5C25.6506 24.4986 25.5519 24.517 25.4597 24.554C25.3675 24.5911 25.2835 24.6461 25.2128 24.7159C25.142 24.7857 25.0858 24.8688 25.0474 24.9605C25.0091 25.0522 24.9893 25.1506 24.9893 25.25C24.9893 25.3494 25.0091 25.4478 25.0474 25.5395C25.0858 25.6312 25.142 25.7143 25.2128 25.7841C25.2835 25.8539 25.3675 25.9089 25.4597 25.946C25.5519 25.983 25.6506 26.0014 25.75 26H28.75C28.8494 26.0014 28.9481 25.983 29.0403 25.946C29.1325 25.9089 29.2164 25.8539 29.2872 25.7841C29.358 25.7143 29.4142 25.6312 29.4526 25.5395C29.4909 25.4478 29.5107 25.3494 29.5107 25.25C29.5107 25.1506 29.4909 25.0522 29.4526 24.9605C29.4142 24.8688 29.358 24.7857 29.2872 24.7159C29.2164 24.6461 29.1325 24.5911 29.0403 24.554C28.9481 24.517 28.8494 24.4986 28.75 24.5H25.75Z'
        fill={pathColor}
      />
    </svg>
  )
}
