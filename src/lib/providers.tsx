'use client'

/* Core */
import { Provider } from 'react-redux'
import { ThemeProvider } from 'next-themes'
import { NextIntlClientProvider } from 'next-intl'
import { setLocale } from '@/lib/redux/slices/languageSlice'

/* Instruments */
import { store } from '@/lib/redux/store'
import { useEffect } from 'react'

export const Providers: React.FC<
  React.PropsWithChildren & React.ComponentProps<typeof NextIntlClientProvider>
> = ({ children, locale, messages }) => {
  useEffect(() => {
    setLocale(locale)
  }, [])

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      onError={() => ''}
    >
      <ThemeProvider>
        <Provider store={store}>{children}</Provider>
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
