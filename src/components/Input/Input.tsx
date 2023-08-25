'use client'

import styles from '@/styles/text-input.module.scss'

type TInputTypes = 'text' | 'email'
interface IInputProps {
  type?: TInputTypes
}


const Input: React.FC<IInputProps> = ({type='text'}) => {
  return (
    <input className={styles['mg-text-input']} type={type} />
  )
}

export default Input