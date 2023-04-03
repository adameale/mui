import React from 'react'
import {Stack,CircularProgress,LinearProgress} from '@mui/material'

const MuiProgress = () => {
  return (
    <Stack spacing={2}>
        <CircularProgress />
        <CircularProgress color='success'/>  
        <CircularProgress variant='determinate' value={65}/>

        <LinearProgress />
        <LinearProgress color='success'/>  
        <LinearProgress variant='determinate' value={20}/>
    </Stack>
  )
}

export default MuiProgress