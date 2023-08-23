'use client'

import React from 'react'
import './button.scss'
import { ButtonProps } from '@/interfaces/button';

type ButtonTypes = 'primary' | 'primary-green' | 'transparent-green' | 'transparent' | 'secondary'

interface CommonButtonProps extends ButtonProps {
  type?: ButtonTypes;
}

const handleChange = (
  e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
) => {
  const btn: HTMLButtonElement | HTMLAnchorElement = e.currentTarget;

  var parentOffset = btn.getBoundingClientRect(),
      relX = e.clientX - parentOffset.left,
      relY = e.clientY - parentOffset.top;
  
  const btnSpan = btn.querySelector('span');

  if (btnSpan) {
    btnSpan.style.top = `${relY}px`;
    btnSpan.style.left = `${relX}px`;
  }

}
const Button: React.FC<CommonButtonProps> = ({ children, onClick, className='', size='medium', as="button", type='primary' }) => {
  const that = {
    as
  }

  return (
    <that.as className={`mg-button mg-button--${ size } mg-button--${ type } ${className}`} onClick={onClick} onMouseEnter={handleChange} onMouseLeave={handleChange}>
      <span className="mg-button__overlay"></span>
      <div>{children}</div>
    </that.as>
  )
};

export default Button;