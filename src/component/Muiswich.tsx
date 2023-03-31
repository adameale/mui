import React from 'react'
import {Box,FormControlLabel,Switch} from '@mui/material'
import {useState} from 'react'
const Muiswich = () => {
    const [switch1,setSwitch1]=useState(false)
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setSwitch1(event.target.checked) 
    }
  return (
    <Box>
      <FormControlLabel label='dark mode' control={<Switch checked={switch1} color='success'  onChange={handleChange} />}/>
    </Box>
  )
}

export default Muiswich
