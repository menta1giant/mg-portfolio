import { ReactNode } from 'react'

export type ButtonSizes = 'medium' | 'large'

export type AsElement = 'button' | 'a'

export interface ButtonProps {
  children: ReactNode;
  className?: string,
  size?: ButtonSizes;
  as?: AsElement;
  onClick?: () => void;
}