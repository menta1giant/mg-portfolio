'use client'

import styles from './footer.module.scss'
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
          <i className="fa-brands fa-telegram"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
        </div>
      </div>
    </footer>
  )
}
