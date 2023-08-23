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
      <Navigation/>
      <div className={styles.buttons}>
        <Button type="primary-green"><span className="desktop">GET IN TOUCH</span><span className="mobile">{'==>'}</span></Button>
        <Button type="transparent-green">TH</Button>
        <Button type="transparent-green" className="desktop">ENG</Button>
      </div>
    </header>
  )
}
