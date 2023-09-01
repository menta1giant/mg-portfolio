import { ReactNode } from 'react'
import Link from 'next/link'

export type ButtonSizes = 'medium' | 'large' | 'extra-large' | 'h2'

export interface ButtonProps {
  children: ReactNode
  className?: string
  size?: ButtonSizes
  loading?: boolean
  disabled?: boolean
  useLink?: boolean
  linkProps?: React.ComponentProps<typeof Link>
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void
}
