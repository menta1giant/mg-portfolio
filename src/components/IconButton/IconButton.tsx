'use client'

import Button from '@/components/Button/Button'

import Tooltip from '@mui/material/Tooltip'

const IconButton: React.FC<
  React.PropsWithChildren &
    React.ComponentProps<typeof Button> &
    React.ComponentProps<typeof Tooltip>
> = ({ children, title, placement, ...props }) => {
  return (
    <Tooltip
      {...{ title, placement }}
      arrow
      classes={{ tooltip: 'text-primary' }}
    >
      <div>
        <Button type="transparent-green" {...props}>
          <div className="icon-wrapper">{children}</div>
        </Button>
      </div>
    </Tooltip>
  )
}

export default IconButton
