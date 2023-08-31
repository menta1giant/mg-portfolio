'use client'

import React, { useMemo } from 'react'
import Link from 'next/link'
import './transparent-button.scss'
import { ButtonProps } from '@/interfaces/button'

const TransparentButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  size = 'medium',
  linkProps = { href: '/' },
  useLink = false,
}) => {
  const commonProps = useMemo(() => {
    return {
      className: `mg-transparent-button text-${size} ${className}`,
      onClick,
    }
  }, [size, className, onClick])

  if (useLink) {
    return (
      <Link {...commonProps} {...linkProps}>
        <div>{children}</div>
      </Link>
    )
  } else {
    return (
      <button {...commonProps}>
        <div>{children}</div>
      </button>
    )
  }
}

export default TransparentButton
