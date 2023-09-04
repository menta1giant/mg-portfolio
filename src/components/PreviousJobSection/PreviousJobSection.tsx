import Image from 'next/image'

interface IPreviousJobProps {
  role: string
  company: string
  period: string
}

const PreviousJobSection: React.FC<IPreviousJobProps> = ({
  role,
  company,
  period,
}) => {
  return (
    <div className="previous-job">
      <div>
        <span className="text-h2 fw-semi-bold">{company}</span>
        <Image
          src="/logos/rs-logo.png"
          alt="Roistat Logo"
          title="Roistat"
          width={66}
          height={16}
        />
      </div>
      <div>
        <span className="previous-job__position">{role}</span>
        <span className="previous-job__period">{period}</span>
      </div>
    </div>
  )
}

export default PreviousJobSection
