import React from 'react'
import {BottomNavigation,BottomNavigationAction, Stack} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import { useState } from 'react'
const MuiBotNav = () => {
  return (
    
    <BottomNavigation sx={{width:'100%',position:'absolute' ,bottom:'0' }} showLabels>
      <BottomNavigationAction label='Home' icon={<HomeIcon />}/>
      <BottomNavigationAction label='Favorite' icon={<FavoriteIcon />}></BottomNavigationAction>
      <BottomNavigationAction label='profile' icon={<PersonIcon />}></BottomNavigationAction>
    </BottomNavigation>
   
  )
}

export default MuiBotNav
