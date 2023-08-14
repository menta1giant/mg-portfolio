import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.scss'
import Button from '@/components/Button/Button'

const HeroSection: React.FC = () => {
  return (
    <section className={styles['hero-section']}>
      <span className={`text-monospace ${styles['benefit-proposition']}`}>ПОСТРОИМ КРУТОТУ ВМЕСТЕ</span>
      <div className={styles['hero-section-main']}>
        <div className={styles['hero-section__left']}>
          <Image
            src="/hero-image.svg"
            alt="Next.js Logo"
            width={472}
            height={416}
            priority
          />
        </div>
        <div className={styles['hero-section__right']}>
          <div>
            <h1 className="section-heading">Mikhail Gostev</h1>
            <span className="tag">Fullstack Web Developer</span>
          </div>
          <p>
            Я талантливый разработчик из Москвы. Умею создавать красивые и доступные сайты. За моими плечами более 4-х лет кодинга и несколько проектов.
          </p>
          <div className={styles['cta-container']}>
            <Button type="primary" size="large">View projects</Button>
            <Button as="a" type="secondary" size="large">Hire me</Button>
          </div>
        </div>
      </div>
      <div className={styles['hero-section-features']}>
        <article className={styles['hero-section-feature']}>
          <span className={styles['hero-section-feature__title']}>3+ years of coding </span>
          <span className={styles['hero-section-feature__description']}>Including full-time employment</span>
        </article>
        <article className={styles['hero-section-feature']}>
          <span className={styles['hero-section-feature__title']}>Working with</span>
          <span className={styles['hero-section-feature__description']}>Vue, React, NodeJS</span>
        </article>
        <article className={styles['hero-section-feature']}>
          <span className={styles['hero-section-feature__title']}>Versatile skillset</span>
          <span className={styles['hero-section-feature__description']}>With accordance to newest trends</span>
        </article>
      </div>
    </section>
  )
};

const Home: React.FC = () => {
  return (
    <>
      <HeroSection></HeroSection>
    </>
  )
}

export default Home