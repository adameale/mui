import React from 'react'
import { AppBar,Toolbar,Typography,
    Stack,IconButton,
    Button} from '@mui/material'

 import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
const MuiNavbar = () => {
  return (
    <AppBar  position='static'>
      <Toolbar >
        <IconButton size='large' edge='start' 
        color='inherit' aria-label='logo'>
            < CatchingPokemonIcon/>

        </IconButton>
        <Typography variant='h5' component='div'  
        sx={{ flexGrow:1}}>App bar</Typography>

        <Stack  spacing={2} direction='row'>
            <Button color='inherit' >feature</Button>
            <Button color='inherit' >about us</Button>
            <Button color='inherit' >pricing</Button>
            <Button color='inherit' >login</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar
