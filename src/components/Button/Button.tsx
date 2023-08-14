import React, { ReactNode } from 'react'
import './button.scss'

type ButtonTypes = 'primary' | 'primary-green' | 'transparent-green' | 'secondary'

export type ButtonSizes = 'medium' | 'large'

export interface ButtonProps {
  children: ReactNode;
  size?: ButtonSizes;
  onClick?: () => void;
}

interface CommonButtonProps extends ButtonProps {
  type?: ButtonTypes;
}

const Button: React.FC<CommonButtonProps> = ({ children, onClick, size='medium', type='primary' }) => {
  return (
    <button className={`mg-button mg-button--${ size } mg-button--${ type }`} onClick={onClick}>
      {children}
    </button>
  )
};

export default Button;