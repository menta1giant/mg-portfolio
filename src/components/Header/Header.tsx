import styles from './header.module.scss'
import Button from '@/components/Button/Button';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>
      <div className={styles.navigation}><span>import </span><nav className="text-large">{ `{ ` }<ul><li>jobExperience, </li><li>hardSkills, </li><li>softSkills</li></ul>{ ` } `}</nav><span>from </span><span className="text-heading text-large">&quot;MikhailGostev&quot;</span></div>
      <div className={styles.buttons}>
        <Button type="primary-green">Hello</Button>
        <Button type="transparent-green">T</Button>
        <Button type="transparent-green">ENG</Button>
      </div>
    </header>
  )
}
