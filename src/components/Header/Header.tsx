import styles from './header.module.scss'
import Button from '@/components/Button/Button'
import Navigation from './Navigation'
import Image from 'next/image'

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        id="logo"
        src="/logo.svg"
        alt="Logo"
        width={48}
        height={48}
        priority
      />
      <div><Navigation/></div>
      <div className={styles.buttons}>
        <Button type="primary-green" className="mobile">{`>`}</Button>
        <Button type="primary-green" className="desktop">GET IN TOUCH</Button>
        <Button type="transparent-green">TH</Button>
        <Button type="transparent-green" className="desktop">ENG</Button>
      </div>
    </header>
  )
}
