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

export default SectionHeader
