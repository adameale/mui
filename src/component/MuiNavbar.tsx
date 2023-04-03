import React from 'react'
import { AppBar,Toolbar,Typography,
    Stack,IconButton,
    Button,Menu,MenuItem} from '@mui/material'
import { useState } from 'react'
 import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
 import KeyBoardArrowDownIcon from '@mui/icons-material/KeyBoardArrowDown'
import MuiBag from './MuiBag'
const MuiNavbar = () => {
    const [anchorEl,setAnchorEl] =useState <null | HTMLElement>(null)
    const open =Boolean(anchorEl)
     const handleClose= ()=>{
        setAnchorEl(null)  
     }  
    
    const handleClick=(event:React.MouseEvent<HTMLButtonElement>)=>{
        setAnchorEl(event.currentTarget)
    }
  
  return (
    <AppBar  position='static'>
      <Toolbar >
        <IconButton size='large' edge='start' 
        color='inherit' aria-label='logo'>
            < CatchingPokemonIcon/>

        </IconButton>
        <Typography variant='h5' component='div'  
        sx={{ flexGrow:1}}>App bar</Typography>

        <Stack  spacing={2} direction='row' justifyContent='space-between'>
            <Button color='inherit' >feature</Button>
            <Button color='inherit' >about us</Button>
            <Button color='inherit' >pricing</Button>
            <Button color='inherit' id='resoures-button'
            onClick={handleClick} aria-control={open? 'resoures-menu': undefined}
           aria-haspopup='true'
           aria-expanded={open? true:undefined}
           endIcon={<CatchingPokemonIcon />}
            >resoures</Button>
            <Button color='inherit' >login</Button>
            <Button> <MuiBag  /></Button>
        </Stack>
        <Menu id='resoures-menu' anchorEl={anchorEl} open={open}
        MenuListProps={{'aria-labelledby':'resoures-button'}}
        onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>blog</MenuItem>
            <MenuItem onClick={handleClose}>podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar
