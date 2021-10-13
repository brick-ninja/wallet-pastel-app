import React from 'react'
import { TIconProps } from './iconProps'

export type TUploadFileProps = TIconProps & {
  variant?: 'type1' | 'type2'
}

export const UploadFile = ({
  size,
  className,
  variant = 'type1',
}: TUploadFileProps): JSX.Element => {
  return (
    <div>
      {variant === 'type1' ? (
        <svg
          height={size}
          className={className}
          viewBox='0 0 18 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M0 4C0 1.79086 1.79086 0 4 0H12.3431C13.404 0 14.4214 0.421428 15.1716 1.17157L16.8284 2.82843C17.5786 3.57857 18 4.59599 18 5.65685V18C18 20.2091 16.2091 22 14 22H4C1.79086 22 0 20.2091 0 18V4ZM16 7V18C16 19.1046 15.1046 20 14 20H4C2.89543 20 2 19.1046 2 18V4C2 2.89543 2.89543 2 4 2H11V4C11 5.65685 12.3431 7 14 7H16ZM15.8891 5C15.7909 4.7176 15.6296 4.45808 15.4142 4.24264L13.7574 2.58579C13.5419 2.37035 13.2824 2.20914 13 2.11094V4C13 4.55228 13.4477 5 14 5H15.8891Z'
            fill='currentColor'
          />
          <path
            d='M8.61722 8.07588C8.49927 8.12468 8.38877 8.19702 8.29289 8.29289L5.29289 11.2929C4.90237 11.6834 4.90237 12.3166 5.29289 12.7071C5.68342 13.0976 6.31658 13.0976 6.70711 12.7071L8 11.4142V16C8 16.5523 8.44772 17 9 17C9.55228 17 10 16.5523 10 16V11.4142L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L9.70711 8.29289C9.41246 7.99825 8.97969 7.92591 8.61722 8.07588Z'
            fill='currentColor'
          />
        </svg>
      ) : (
        <svg
          width={size}
          className={className}
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10.418 3.33398C8.36172 3.33398 6.66797 5.02773 6.66797 7.08399V32.9173C6.66797 34.9736 8.36172 36.6673 10.418 36.6673H29.5846C31.6409 36.6673 33.3346 34.9736 33.3346 32.9173V15.4173C33.3346 15.0858 33.2028 14.7679 32.9684 14.5335L32.9554 14.5205L22.1351 3.7002C21.9007 3.46577 21.5828 3.33405 21.2513 3.33398H10.418ZM10.418 5.83398H20.0013V12.9173C20.0013 14.9736 21.695 16.6673 23.7513 16.6673H30.8346V32.9173C30.8346 33.6227 30.29 34.1673 29.5846 34.1673H10.418C9.71255 34.1673 9.16797 33.6227 9.16797 32.9173V7.08399C9.16797 6.37857 9.71255 5.83398 10.418 5.83398ZM22.5013 7.60156L29.0671 14.1673H23.7513C23.0459 14.1673 22.5013 13.6227 22.5013 12.9173V7.60156ZM19.9834 17.5007C19.6581 17.5054 19.3475 17.6368 19.1175 17.8669L15.7842 21.2002C15.6642 21.3154 15.5684 21.4533 15.5025 21.606C15.4365 21.7587 15.4016 21.923 15.3999 22.0893C15.3982 22.2555 15.4298 22.4205 15.4926 22.5745C15.5555 22.7285 15.6484 22.8683 15.766 22.9859C15.8836 23.1035 16.0235 23.1965 16.1775 23.2593C16.3314 23.3222 16.4964 23.3537 16.6627 23.352C16.829 23.3503 16.9933 23.3155 17.146 23.2495C17.2986 23.1835 17.4366 23.0877 17.5518 22.9678L18.7513 21.7682V26.2507C18.749 26.4163 18.7796 26.5808 18.8413 26.7345C18.9031 26.8882 18.9948 27.0281 19.1111 27.146C19.2274 27.264 19.366 27.3577 19.5188 27.4216C19.6716 27.4855 19.8356 27.5185 20.0013 27.5185C20.167 27.5185 20.331 27.4855 20.4838 27.4216C20.6366 27.3577 20.7752 27.264 20.8915 27.146C21.0078 27.0281 21.0995 26.8882 21.1613 26.7345C21.223 26.5808 21.2536 26.4163 21.2513 26.2507V21.7682L22.4508 22.9678C22.566 23.0877 22.704 23.1835 22.8566 23.2495C23.0093 23.3155 23.1736 23.3503 23.3399 23.352C23.5062 23.3537 23.6712 23.3222 23.8251 23.2593C23.9791 23.1965 24.119 23.1035 24.2366 22.9859C24.3542 22.8683 24.4471 22.7285 24.51 22.5745C24.5728 22.4205 24.6044 22.2555 24.6027 22.0893C24.601 21.923 24.5661 21.7587 24.5001 21.606C24.4342 21.4533 24.3384 21.3154 24.2184 21.2002L20.8851 17.8669C20.7669 17.7486 20.6262 17.6553 20.4713 17.5924C20.3165 17.5295 20.1505 17.4983 19.9834 17.5007V17.5007ZM14.5846 29.1673C14.419 29.165 14.2545 29.1956 14.1008 29.2573C13.9471 29.3191 13.8072 29.4108 13.6893 29.5271C13.5713 29.6434 13.4776 29.782 13.4137 29.9348C13.3498 30.0877 13.3168 30.2517 13.3168 30.4173C13.3168 30.583 13.3498 30.747 13.4137 30.8998C13.4776 31.0526 13.5713 31.1912 13.6893 31.3075C13.8072 31.4238 13.9471 31.5155 14.1008 31.5773C14.2545 31.6391 14.419 31.6697 14.5846 31.6673H25.418C25.5836 31.6697 25.7481 31.6391 25.9018 31.5773C26.0555 31.5155 26.1954 31.4238 26.3133 31.3075C26.4313 31.1912 26.525 31.0526 26.5889 30.8998C26.6528 30.747 26.6858 30.583 26.6858 30.4173C26.6858 30.2517 26.6528 30.0877 26.5889 29.9348C26.525 29.782 26.4313 29.6434 26.3133 29.5271C26.1954 29.4108 26.0555 29.3191 25.9018 29.2573C25.7481 29.1956 25.5836 29.165 25.418 29.1673H14.5846Z'
            fill='currentColor'
          />
        </svg>
      )}
    </div>
  )
}
