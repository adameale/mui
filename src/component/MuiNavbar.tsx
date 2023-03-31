import React from 'react'
import { AppBar,Toolbar,Typography,
    Stack,IconButton,
    Button} from '@mui/material'

 import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
const MuiNavbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' edge='start' 
        color='inherit' aria-label='logo'>
            < CatchingPokemonIcon/>

        </IconButton>
        <Typography variant='h5' component='div'  
        sx={{ flexGrow:1}}>App bar</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar
