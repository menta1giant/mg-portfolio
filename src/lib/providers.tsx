'use client'

import { ThemeProvider } from 'next-themes'
import { NextIntlClientProvider } from 'next-intl'

function getMessageFallback({ key }: { key: string }) {
  return key
}

export const Providers: React.FC<
  React.PropsWithChildren & React.ComponentProps<typeof NextIntlClientProvider>
> = ({ children, locale, messages }) => {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      onError={() => ''}
      getMessageFallback={getMessageFallback}
    >
      <ThemeProvider>{children}</ThemeProvider>
    </NextIntlClientProvider>
  )
}
