import Input from '@/components/Input/Input'
import Textarea from '@/components/Textarea/Textarea'
import styles from './form-field.module.scss'

type FieldType = 'textarea' | 'text' | 'email'

interface IFormFieldProps {
  label: string
  name: string
  type?: FieldType
}

const FormField: React.FC<
  IFormFieldProps & React.HTMLProps<HTMLInputElement | HTMLTextAreaElement>
> = ({ type = 'text', label, ...props }) => {
  return (
    <div className={styles['mg-form-field']}>
      <label>
        <span>{label}</span>
        {type === 'textarea' ? (
          <Textarea {...props} />
        ) : (
          <Input type={type} {...props} />
        )}
      </label>
    </div>
  )
}

export default FormField
