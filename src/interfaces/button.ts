import { ReactNode } from 'react'
import Link from 'next/link'

export type ButtonSizes = 'medium' | 'large'

export interface ButtonProps {
  children: ReactNode
  className?: string
  size?: ButtonSizes
  useLink?: boolean
  linkProps?: React.ComponentProps<typeof Link>
  onClick?: () => void
}
