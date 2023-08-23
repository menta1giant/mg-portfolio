'use client'

import styles from './input.module.scss'

const Input: React.FC = () => {
  return (
    <input className={styles['mg-input']} type="text" placeholder="abc" />
  )
}

export default Input