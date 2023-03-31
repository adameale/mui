import React, { ChangeEvent } from 'react'
import { Box,FormControl,
    FormControlLabel,
    RadioGroup,
Radio,FormLabel,
FormHelperText
 } from '@mui/material'
 import { useState } from 'react'
const MuiRadioB = () => {
    const [value,setvalue] =useState('')
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setvalue(event.target.value)
    }
  return (
    <Box>
    <FormControl error>
        <FormLabel id='job-experience-group-label'>
            Years of experience
       </FormLabel>
       <RadioGroup name='job-experience-group'
       aria-labelledby='job-experience-group-label'
       value={value}
       row
       onChange={handleChange}>
        
       <FormControlLabel control={<Radio size='medium' color='secondary' />} label='0-2' value='0-2' />
       <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
       <FormControlLabel control={<Radio />} label='6-7' value='6-7' />
       </RadioGroup>
       <FormHelperText>invalid selection</FormHelperText>
    </FormControl>      
    </Box>
  )
}

export default MuiRadioB
