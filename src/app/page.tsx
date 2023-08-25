import React, { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.scss'
import Button from '@/components/Button/Button'
import SkillsCategory from '@/components/SkillsCategory/SkillsCategory'
import { SKILLS_CATEGORIES } from '@/utils/skillsCategory'
import BenefitProposition from '@/components/BenefitProposition/BenefitProposition'
import AnimatedElements from '@/components/AnimatedElements/AnimatedElements'
import { LOGO_SIZE, LOGO_SIZE_SMALL } from '@/utils/image'
import TransparentButton from '@/components/TransparentButton/TransparentButton'
import FormField from '@/components/FormField/FormField'
import CopyEmail from '@/components/CopyEmail/CopyEmail'

interface FeatureProps {
  children: ReactNode
  title: string
}

const Feature: React.FC<FeatureProps> = ({ title, children }) => {
  return (
    <article className={styles['hero-section-feature']}>
      <span className={styles['hero-section-feature__title']}>{title}</span>
      <span className={styles['hero-section-feature__description']}>
        {children}
      </span>
    </article>
  )
}

interface SectionHeaderProps {
  title: string
  description: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div>
      <h2 className="section-heading">{title}</h2>
      <span className="tag">{description}</span>
    </div>
  )
}

const HeroSection: React.FC = () => {
  return (
    <>
      <section className={styles['hero-section']}>
        <BenefitProposition />
        <div className="fade-up grid-50-50">
          <div className={styles['hero-section__left']}>
            <Image
              src="/hero-image.svg"
              alt="Next.js Logo"
              width={472}
              height={416}
              priority
            />
          </div>
          <div
            className={`flex-column flex-gap-large ${styles['hero-section__right']}`}
          >
            <SectionHeader
              title="Mikhail Gostev"
              description="Fullstack Web Developer"
            />
            <p>
              Я талантливый разработчик из Москвы. Умею создавать красивые и
              доступные сайты. За моими плечами более 4-х лет кодинга и
              несколько проектов.
            </p>
            <div className={styles['cta-container']}>
              <Button type="primary" size="large">
                View projects
              </Button>
              <Button as="a" type="secondary" size="large">
                Hire me
              </Button>
            </div>
          </div>
        </div>
        <div className={`fade-up ${styles['hero-section-features']}`}>
          <Feature title="3+ years of coding">
            Including full-time employment
          </Feature>
          <Feature title="Working with">
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
          </Feature>
          <Feature title="Versatile skillset">
            Following the latest trends
          </Feature>
        </div>
      </section>
    </>
  )
}

const PreviousJob: React.FC = () => {
  return (
    <div className={styles['previous-job']}>
      <div>
        <span className="text-h2 fw-semi-bold">Roistat</span>
        <Image
          src="/rs-logo.png"
          alt="Roistat Logo"
          title="Roistat"
          width={66}
          height={16}
        />
      </div>
      <div>
        <span className={styles['previous-job__position']}>
          Frontend Developer
        </span>
        <span className={styles['previous-job__period']}>
          February 2022 - May 2023
        </span>
      </div>
    </div>
  )
}

const JobExperienceSection: React.FC = () => {
  return (
    <section className={`grid-50-50 ${styles['job-experience-section']}`}>
      <div className="flex-column flex-gap-large">
        <SectionHeader
          title="Job experience"
          description="I worked on real projects"
        />
        <div className="flex-column flex-gap-large">
          <PreviousJob />
          <div>
            <p>Компания Roistat специализируется на бизнес-аналитике.</p>
            <p>
              В течение 16 месяцев работы в компании, я выполнял следующие
              задачи:
            </p>
          </div>
          <ul>
            <li className="li">Разработка новых фичей</li>
            <li className="li">Поддержка существующих фичей</li>
            <li className="li">Рефакторинг кода</li>
          </ul>
        </div>
      </div>
      <div>
        <Image
          src="/je-section.svg"
          alt="A man sitting on a stack of books"
          width={669}
          height={574}
          priority
        />
      </div>
    </section>
  )
}

const FeaturedProjectSection: React.FC = () => {
  return (
    <section className={styles['featured-project-section']}>
      <div className="flex-column flex-gap-large">
        <SectionHeader
          title="Featured project"
          description="Check out my latest work"
        />
        <div className="flex-column flex-gap-large">
          <div className={`grid-50-50 ${styles['featured-project-card']}`}>
            <div className="flex-column flex-gap-large">
              <div className={styles['featured-project-card__row']}>
                <span className="text-h2 fw-semi-bold">Nerif</span>
                <span>May 2023 - July 2023</span>
              </div>
              <div className={styles['featured-project-card__row']}>
                <span className="text-large fw-medium">Role:</span>
                <span className={styles['project-role']}>Design</span>
                <span className={styles['project-role']}>Frontend</span>
                <span className={styles['project-role']}>Backend</span>
              </div>
              <div className={styles['featured-project-card__row']}>
                <span className="text-large fw-medium">Stack:</span>
                <Image
                  src="/vuejs-logo.svg"
                  alt="Vue.js Logo"
                  title="Vue.js"
                  width={LOGO_SIZE_SMALL}
                  height={LOGO_SIZE_SMALL}
                />
                <Image
                  src="/react-logo.svg"
                  alt="React Logo"
                  title="React"
                  width={LOGO_SIZE_SMALL}
                  height={LOGO_SIZE_SMALL}
                />
                <Image
                  src="/ts-logo.svg"
                  alt="Typescript Logo"
                  title="Typescript"
                  width={LOGO_SIZE_SMALL}
                  height={LOGO_SIZE_SMALL}
                />
                <TransparentButton>and 9 more...</TransparentButton>
              </div>
              <div>
                <p>
                  Nerif is an extension of my passion project that was born in
                  late 2020. When I imagined data science as an important part
                  of my future, I started working on an algorithm that would be
                  able to predict the results of CS:GO matches.
                </p>
                <p>
                  It has proven to be unsuccessful, so I set a thought
                  experiment: What would happen if it worked and the premise was
                  actually marketable? That’s how Nerif was born.
                </p>
              </div>
              <div className={styles['cta-container']}>
                <Button type="primary" size="medium">
                  Посетить сайт
                </Button>
                <Button as="a" type="secondary" size="medium">
                  Читать далее
                </Button>
              </div>
            </div>
            <div>
              <Image
                src="/nerif-showcase.png"
                alt="Mobile and desktop presentation of Nerif"
                width={645}
                height={553}
              />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  )
}

const SkillsSection: React.FC = () => {
  return (
    <section className={styles['skills-section']}>
      <div className="flex-column flex-gap-large">
        <SectionHeader title="Hard skills" description=" know a lot of stuff" />
        <div className="grid-50-50">
          {SKILLS_CATEGORIES.map((category) => (
            <SkillsCategory {...category} />
          ))}
        </div>
      </div>
      <div></div>
    </section>
  )
}

const SoftSkillsSection: React.FC = () => {
  return (
    <section className="grid-50-50">
      <div className="flex-column flex-gap-large">
        <SectionHeader title="Soft skills" description="Chill out" />
        <div>
          <p>
            I used to tutor English and Computer science, and still haven’t lost
            passion for <strong className="highlight">teaching.</strong> I love
            sharing my knowledge with people and I’m quite proficient at it too
          </p>
          <p>
            I enjoy playing board games, whether it be with close friends or
            random people in an anticafe. Actually, I regularly host board game
            events there, which requires me to be{' '}
            <strong className="highlight">responsible,</strong> good at{' '}
            <strong className="highlight">leadership,</strong> and get along
            well with different people.
          </p>
        </div>
      </div>
      <div>
        <Image
          src="/ss-section.png"
          alt="People gathered for board games"
          width={696}
          height={390}
          priority
        />
      </div>
    </section>
  )
}

const ContactSection: React.FC = () => {
  return (
    <section className="flex-column flex-gap-large">
      <SectionHeader title="Contact" description="Get in touch" />
      <div className="grid-50-50">
        <div className="flex-column flex-gap-large">
          <p>
            I'm always happy to hear about exciting opportunities, and build
            valuable connections. Let's connect! You can send an e-mail or fill
            out the form. I’ll add the fourth line for the sake of layout.
          </p>
          <div className="flex-column flex-gap-medium">
            <h3 className="text-large fw-medium text-white-600">
              Contact me via e-mail
            </h3>
            <CopyEmail email="mikhail-gostev.dev.gmail.com" />
          </div>
          <div className="flex-column flex-gap-medium">
            <h3 className="text-large fw-medium text-white-600">
              Check out my socials
            </h3>
            <div className="flex-gap-medium text-large text-white-600">
              <i className="fa-brands fa-telegram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-github"></i>
            </div>
          </div>
        </div>
        <div className="flex-column flex-gap-extra-large">
          <FormField label="Имя" />
          <FormField label="Email" />
          <FormField type="textarea" label="Сообщение" />
          <Button type="primary" size="medium" className="fluid">
            Отправить
          </Button>
        </div>
      </div>
    </section>
  )
}

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <JobExperienceSection />
      <FeaturedProjectSection />
      <SkillsSection />
      <SoftSkillsSection />
      <ContactSection />
    </>
  )
}

export default Home
