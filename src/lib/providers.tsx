'use client'

/* Core */
import { Provider } from 'react-redux'
import { ThemeProvider } from 'next-themes'

/* Instruments */
import { store } from '@/lib/redux/store'

export const Providers = (props: React.PropsWithChildren) => {
  return (
    <ThemeProvider>
      <Provider store={store}>{props.children}</Provider>
    </ThemeProvider>
  )
}
