import { ReactNode } from 'react'
import 'the-new-css-reset/css/reset.css'
import '@/styles/globals.scss'

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return children
}
