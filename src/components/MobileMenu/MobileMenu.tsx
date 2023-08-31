import './mobile-menu.scss'

import React from 'react'
import Popover from '@mui/material/Popover'
import MenuItem from '@mui/material/MenuItem'
import TransparentButton from '../TransparentButton/TransparentButton'

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <TransparentButton onClick={handleClick}>
        <div className="mobile text-h2">{`{ ... }`}</div>
      </TransparentButton>
      <Popover
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ vertical: -32, horizontal: 'center' }}
        classes={{ paper: 'mobile-menu__popover flex-column text-primary' }}
        disableScrollLock
      >
        <TransparentButton
          size="h2"
          linkProps={{ href: '#job-experience' }}
          useLink
          onClick={handleClose}
        >
          jobExperience
        </TransparentButton>
        <TransparentButton
          size="h2"
          linkProps={{ href: '#hard-skills' }}
          useLink
          onClick={handleClose}
        >
          hardSkills
        </TransparentButton>
        <TransparentButton
          size="h2"
          linkProps={{ href: '#soft-skills' }}
          useLink
          onClick={handleClose}
        >
          softSkills
        </TransparentButton>
      </Popover>
    </div>
  )
}
