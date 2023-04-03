import React from 'react'
import {Stack,Badge} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
const MuiBag = () => {
  return (
    <Stack direction='row' spacing={3} >
      <Badge badgeContent={80} color='error' showZero max={9}>
        < MailIcon color='success' />
      </Badge>

      <Badge variant='dot' color='error' showZero max={9999} invisible={false}>
        < MailIcon color='success' />
      </Badge>
    </Stack>
  )
}

export default MuiBag
