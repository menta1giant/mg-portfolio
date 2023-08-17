import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.scss'
import Button from '@/components/Button/Button'
import BenefitProposition from '@/components/BenefitProposition/BenefitProposition'
import AnimatedElements from '@/components/AnimatedElements/AnimatedElements'

const LOGO_SIZE = 32;

const HeroSection: React.FC = () => {
  return (
    <>
      <section className={styles['hero-section']}>
        <BenefitProposition/>
        <div className={`fade-up ${styles['hero-section-main']}`}>
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
        <div className={`fade-up ${styles['hero-section-features']}`}>
          <article className={styles['hero-section-feature']}>
            <span className={styles['hero-section-feature__title']}>3+ years of coding </span>
            <span className={styles['hero-section-feature__description']}>Including full-time employment</span>
          </article>
          <article className={styles['hero-section-feature']}>
            <span className={styles['hero-section-feature__title']}>Working with</span>
            <span className={styles['hero-section-feature__description']}>
              <ul>
                <li>
                  <Image
                    src="/vuejs-logo.svg"
                    alt="Vue.js Logo"
                    title="Vue.js"
                    width={LOGO_SIZE}
                    height={LOGO_SIZE}
                    priority
                  />
                </li>
                <li>
                  <Image
                    src="/react-logo.svg"
                    alt="React Logo"
                    title="React"
                    width={LOGO_SIZE}
                    height={LOGO_SIZE}
                    priority
                  />
                </li>
                <li>
                  <Image
                    src="/ts-logo.svg"
                    alt="Typescript Logo"
                    title="Typescript"
                    width={LOGO_SIZE}
                    height={LOGO_SIZE}
                    priority
                  />
                </li>
              </ul>
            </span>
          </article>
          <article className={styles['hero-section-feature']}>
            <span className={styles['hero-section-feature__title']}>Versatile skillset</span>
            <span className={styles['hero-section-feature__description']}>In accordance with the latest trends</span>
          </article>
        </div>
      </section>
    </>
  )
};

const Home: React.FC = () => {
  return (
    <>
      <AnimatedElements/>
      <HeroSection></HeroSection>
    </>
  )
}

export default Home