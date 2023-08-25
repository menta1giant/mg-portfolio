import Input from '@/components/Input/Input'
import Textarea from '@/components/Textarea/Textarea'
import styles from './form-field.module.scss'

type FieldType = 'textarea' | 'text' | 'email'

interface IFormFieldProps {
  label: string,
  type?: FieldType
}

const FormField: React.FC<IFormFieldProps> = ({label, type='text'}) => {
  return (
    <div className={styles['mg-form-field']}>
      <label>
        <span>{label}</span>
        {type === 'textarea' ? (
          <Textarea/>
        ) : (
          <Input type={type}/>
        )}
      </label>
    </div>
  )
}

export default FormField