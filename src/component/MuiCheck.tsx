import React from 'react'
import { Stack,Chip,Avatar } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'
import { useState } from 'react'
const MuiCheck = () => {
    const [chip,setChips] =useState(['chip1','chip2','chip3'])
    const handleChange=(itemToDelete:string) =>{
        setChips((chip)=>chip.filter((item)=> item !==itemToDelete))
    }
  return (
    <Stack direction='row' spacing={1}>
      <Chip label='Chip' color='primary' size='small' icon={<FaceIcon />}/>
      <Chip label='Chip outlined' color='secondary' size='small' variant='outlined' 
      avatar={<Avatar></Avatar>} />
      <Chip label='click' color='success' onClick={()=> alert('clicked')} />
      <Chip label='delete' 
     color='success' onDelete={()=> alert('clicked')} />
     {
        chip.map(item=>(
         <Chip key={item} label={item} 
         onDelete={()=> handleChange(item)}/>   
        ))
     }
    </Stack>

  )
}

export default MuiCheck
