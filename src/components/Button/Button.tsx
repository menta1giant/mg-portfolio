'use client'

import React, { ReactNode, useMemo } from 'react'
import Link from 'next/link'
import './button.scss'
import { ButtonProps } from '@/interfaces/button'

type ButtonTypes =
  | 'primary'
  | 'primary-green'
  | 'transparent-green'
  | 'transparent'
  | 'secondary'

interface CommonButtonProps extends ButtonProps {
  type?: ButtonTypes
}

const handleChange = (
  e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
) => {
  const btn: HTMLButtonElement | HTMLAnchorElement = e.currentTarget

  var parentOffset = btn.getBoundingClientRect(),
    relX = e.clientX - parentOffset.left,
    relY = e.clientY - parentOffset.top

  const btnSpan = btn.querySelector('span')

  if (btnSpan) {
    btnSpan.style.top = `${relY}px`
    btnSpan.style.left = `${relX}px`
  }
}

const ButtonContent: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <span className="mg-button__overlay"></span>
      <div className="flex-gap-medium flex-center">{children}</div>
    </>
  )
}

const Button: React.FC<CommonButtonProps> = ({
  children,
  onClick,
  className = '',
  size = 'medium',
  type = 'primary',
  loading = false,
  disabled = false,
  linkProps = { href: '/', target: '_blank' },
  useLink = false,
}) => {
  const commonProps = useMemo(() => {
    return {
      className: `mg-button mg-button--${size} mg-button--${type} ${className} ${
        loading ? 'mg-button--loading' : ''
      } ${disabled ? 'mg-button--disabled' : ''}`,
      onClick,
      onMouseEnter: handleChange,
      onMouseLeave: handleChange,
    }
  }, [size, type, className, onClick, loading, disabled])

  if (useLink) {
    return (
      <Link {...commonProps} target="_blank" {...linkProps}>
        <ButtonContent>{children}</ButtonContent>
      </Link>
    )
  } else {
    return (
      <button {...commonProps}>
        <ButtonContent>{children}</ButtonContent>
      </button>
    )
  }
}

export default Button
