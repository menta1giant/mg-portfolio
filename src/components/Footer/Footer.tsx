import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <span>
          Copyright © 2023 Mikhail Gostev. All rights reserved
        </span>
        <div className='flex-gap-medium text-medium text-white-500'>
          <i className="fa-brands fa-telegram"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
        </div>
      </div>
    </footer>
  )
}
