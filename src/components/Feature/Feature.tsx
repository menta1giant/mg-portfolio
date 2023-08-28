import { ReactNode } from 'react'

interface FeatureProps {
  children: ReactNode
  title: string
}

const FeatureBlock: React.FC<FeatureProps> = ({ title, children }) => {
  return (
    <article className="hero-section-feature">
      <span className="hero-section-feature__title">{title}</span>
      <span className="hero-section-feature__description">{children}</span>
    </article>
  )
}

export default FeatureBlock
