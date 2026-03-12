import type { ComponentPropsWithoutRef } from 'react'

export interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  variant?: 'primary' | 'secondary'
}

export const Link = ({ variant = 'primary', className, ...props }: LinkProps) => {
  const variantClass = variant === 'primary' ? 'text-blue-500' : 'text-gray-500'
  return <a className={`underline hover:opacity-75 ${variantClass} ${className}`} {...props} />
}
