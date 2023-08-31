'use client'

import '@/styles/text-input.scss'

type TInputTypes = 'text' | 'email'
interface IInputProps {
  name: string
  required?: boolean
  type?: TInputTypes
}

const Input: React.FC<IInputProps> = ({
  name,
  required = false,
  type = 'text',
}) => {
  return (
    <input
      className="mg-text-input"
      type={type}
      name={name}
      required={required}
    />
  )
}

export default Input
