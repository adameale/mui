import React from 'react'
import {Stack,Alert, Button} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
const MuiAlet = () => {
  return (
    <Stack>
        <Alert severity='error'> error alert</Alert>
        <Alert severity='warning'> warning alert</Alert>
        <Alert severity='info'> info alert</Alert>
        <Alert  variant='filled' severity='success' icon={<CheckIcon fontSize='inherit'  />}
        action={<Button color='error'>Undo</Button>} > success alert</Alert>
   
        <Alert variant='outlined' severity='error'> error alert</Alert>
        <Alert severity='warning'> warning alert</Alert>
        <Alert severity='info'> info alert</Alert>
        <Alert severity='success'> success alert</Alert>
    </Stack>
  )
}

export default MuiAlet