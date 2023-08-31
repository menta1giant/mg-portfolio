'use client'

import '@/styles/text-input.scss'

type TInputTypes = 'text' | 'email'
interface IInputProps {
  type?: TInputTypes
}

const Input: React.FC<IInputProps> = ({ type = 'text' }) => {
  return <input className="mg-text-input" type={type} />
}

export default Input
