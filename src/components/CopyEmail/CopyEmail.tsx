import styles from './copy-email.module.scss'

interface ICopyEmailProps {
  email: string
}

const CopyEmail: React.FC<ICopyEmailProps> = ({ email }) => {
  return (
    <div className={styles['copy-email']}>
      {email}
      <i className="fa-regular fa-copy text-large"></i>
    </div>
  )
}

export default CopyEmail
