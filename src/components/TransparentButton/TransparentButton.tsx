'use client'

import React from 'react'
import './transparent-button.scss'
import { ButtonProps } from '@/interfaces/button';

const TransparentButton: React.FC<ButtonProps> = ({ children, onClick, className='', size='medium', as="button", }) => {
  const that = {
    as
  }

  return (
    <that.as className={`mg-transparent-button text-${ size } ${className}`} onClick={onClick}>
      <span className="mg-button__overlay"></span>
      <div>{children}</div>
    </that.as>
  )
};

export default TransparentButton;