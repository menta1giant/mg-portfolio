import Input from '@/components/Input/Input'
import styles from './input-field.module.scss'

interface IInputFieldProps {
  label: string,

}

const InputField: React.FC<IInputFieldProps> = ({label}) => {
  return (
    <div className={styles['mg-input-field']}>
      <label>{label}</label>
      <Input/>
    </div>
  )
}

export default InputField