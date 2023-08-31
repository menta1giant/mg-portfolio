'use client'

import { Tooltip } from '@mui/material'
import styles from './copy-email.module.scss'
import { useTranslations } from 'next-intl'
import { useCallback, useState } from 'react'
import TransparentButton from '../TransparentButton/TransparentButton'

interface ICopyEmailProps {
  email: string
}

const CopyEmail: React.FC<ICopyEmailProps> = ({ email }) => {
  const t = useTranslations('Contact')
  const copyEmailTooltip = t('copy-email-tooltip')
  const [tooltipText, setTooltipText] = useState(copyEmailTooltip)

  const handleCopyEmail = useCallback(() => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email)
      setTooltipText(t('email-copied-tooltip'))

      setTimeout(() => setTooltipText(copyEmailTooltip), 2000)
    }
  }, [])

  return (
    <div className={styles['copy-email']}>
      <span>{email}</span>
      <Tooltip title={tooltipText}>
        <div>
          <TransparentButton onClick={handleCopyEmail}>
            <div className="icon-wrapper">
              <i className="fa-regular fa-copy text-large"></i>
            </div>
          </TransparentButton>
        </div>
      </Tooltip>
    </div>
  )
}

export default CopyEmail
