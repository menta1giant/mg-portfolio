import 'the-new-css-reset/css/reset.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { Providers } from '@/lib/providers'

import { ReactNode } from 'react'
import { createTranslator } from 'next-intl'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props {
  children: ReactNode
  params: { locale: string }
}

export async function generateStaticParams() {
  return ['en', 'ru'].map((locale) => ({ locale }))
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const messages = await getMessages(locale)

  const t = createTranslator({ locale, messages })

  return {
    title: t('LocaleLayout.title'),
    description: t('LocaleLayout.description'),
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"></script>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800;8..144,900;8..144,1000&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/ff4a7e68a2.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <Providers locale={locale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
