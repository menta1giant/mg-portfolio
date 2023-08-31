'use client'

import styles from './footer.module.scss'
import Link from 'next/link'
import {
  TELEGRAM_LINK,
  GITHUB_LINK,
  LINKEDIN_LINK,
} from '@/utils/externalLinks'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Footer')

  return (
    <footer className={styles.footer}>
      <div>
        <span
          dangerouslySetInnerHTML={{ __html: t.raw('copyright-text') }}
        ></span>
        <div className="flex-gap-medium text-medium text-white-500">
          <Link href={TELEGRAM_LINK} target="_blank">
            <i className="fa-brands fa-telegram"></i>
          </Link>
          <Link href={LINKEDIN_LINK} target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </Link>
          <Link href={GITHUB_LINK} target="_blank">
            <i className="fa-brands fa-github"></i>
          </Link>
        </div>
      </div>
    </footer>
  )
}
