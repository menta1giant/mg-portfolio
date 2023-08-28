'use client'

/* Core */
import { Provider } from 'react-redux'
import { ThemeProvider } from 'next-themes'
import { NextIntlClientProvider } from 'next-intl'

/* Instruments */
import { store } from '@/lib/redux/store'

export const Providers: React.FC<
  React.PropsWithChildren & React.ComponentProps<typeof NextIntlClientProvider>
> = ({ children, locale, messages }) => {
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
