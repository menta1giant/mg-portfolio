'use client'

import React, { ReactNode } from 'react'
import './button.scss'

type ButtonTypes = 'primary' | 'primary-green' | 'transparent-green' | 'secondary'

export type ButtonSizes = 'medium' | 'large'

export type AsElement = 'button' | 'a'

export interface ButtonProps {
  children: ReactNode;
  size?: ButtonSizes;
  as?: AsElement;
  onClick?: () => void;
}

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

  console.dir({parentOffset, relX, relY, btnSpan})

  if (btnSpan) {
    btnSpan.style.top = `${relY}px`;
    btnSpan.style.left = `${relX}px`;
  }

}
const Button: React.FC<CommonButtonProps> = ({ children, onClick, size='medium', as="button", type='primary' }) => {
  const that = {
    as
  }

  return (
    <that.as className={`mg-button mg-button--${ size } mg-button--${ type }`} onClick={onClick} onMouseEnter={handleChange} onMouseLeave={handleChange}>
      <span></span>
      <div>{children}</div>
    </that.as>
  )
};

export default Button;