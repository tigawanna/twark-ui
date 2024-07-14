import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'


export interface ButtonProps extends HTMLArkProps<'button'> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, ...buttonProps } = props
  return <ark.button className={twMerge("btn",className)} ref={ref} {...buttonProps} />
})



