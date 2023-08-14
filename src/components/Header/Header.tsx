import styles from './header.module.scss'
import Button from '@/components/Button/Button'
import Image from 'next/image'

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="/logo.svg"
        alt="Logo"
        width={48}
        height={48}
        priority
      />
      <div className={styles.navigation}><span>import </span><nav className="text-large"><span>{ `{ ` }</span><ul><li>jobExperience, </li><li>hardSkills, </li><li>softSkills</li></ul><span>{ ` } `}</span></nav><span>from </span><span className="text-heading text-large">&quot;MikhailGostev&quot;</span></div>
      <div className={styles.buttons}>
        <Button type="primary-green">Hello</Button>
        <Button type="transparent-green">T</Button>
        <Button type="transparent-green">ENG</Button>
      </div>
    </header>
  )
}
