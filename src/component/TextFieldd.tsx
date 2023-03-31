import React from 'react'
import { Stack, TextField,InputAdornment} from '@mui/material'
import {useState} from 'react'
const TextFieldd = () => {
  const [value,setValue] =useState('')
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2} >
          <TextField label="Name" variant='outlined'
          /> 
          <TextField label="Name" variant='filled' /> 
          <TextField label="password" type='Password' variant='filled'  value={value} required 
          onChange={(e)=> setValue(e.target.value)}  error={!value} helperText={!value ? 'Required':'do not share this password publicly'}/> 
          <TextField label="Name" variant='filled' /> 
          <TextField label="read only" InputProps=
          {{readOnly:true}} variant='filled' /> 
        </Stack>
        
      <Stack direction='row' spacing={2}>
      <TextField label="Amount" InputProps={{startAdornment:<InputAdornment position='start'>$</InputAdornment>,}}  />
          <TextField label="weight" InputProps={{endAdornment:<InputAdornment position='end'>kg</InputAdornment>,}} />
      </Stack>
    </Stack>
  )
}

export default TextFieldd
