import React from 'react'
import {Drawer,Box,Typography,IconButton} from '@mui/material'
import {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu'
const Muidrawer = () => {
    const [isDrawer,setIsDrawer] =useState(false)
  return (
    <>
    <IconButton size='large' edge='start' color='inherit' aria-label='logo'
    onClick={()=>setIsDrawer(true)}>
        <MenuIcon></MenuIcon>
    </IconButton>
    <Drawer  anchor='left' open={isDrawer}
    onClose={()=>setIsDrawer(false)}>
      <Box  p={2} width='250px' textAlign='center'
       role='presentation'>
        <Typography variant='h6'
         component='div'>side panel</Typography>
       </Box>
    </Drawer>
    </>
  )
}

export default Muidrawer
