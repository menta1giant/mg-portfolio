'use client'

import '@/styles/text-input.scss'

interface ITextareaProps {
  name: string
  required?: boolean
}

const Textarea: React.FC<ITextareaProps> = ({ name, required = false }) => {
  return <textarea className="mg-text-input" name={name} required={required} />
}

export default Textarea
