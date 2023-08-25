import styles from './header.module.scss'
import Button from '@/components/Button/Button'
import Navigation from './Navigation'
import Image from 'next/image'
import AnimatedElements from '@/components/AnimatedElements/AnimatedElements'

export default function Header() {
  return (
    <header className={styles.header}>
      <AnimatedElements />
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
        <Button type="transparent-green"><i className="fa-solid fa-sun"></i></Button>
        <Button type="transparent-green" className="desktop"><i className="fa-solid fa-globe"></i></Button>
      </div>
    </header>
  )
}
