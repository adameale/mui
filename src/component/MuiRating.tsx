import React from 'react'
import { Box,Stack, Rating } from '@mui/material'
import {useState} from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const MuiRating = () => {
    const [val, setval]= useState<number | null>(3)
    console.log({val})
    const changing= (_event:React.ChangeEvent<{}>,
        newValue:number|null)=>{
            setval(newValue)
    }
  return (
    <Stack spacing={3} direction='column-reverse'>
        
      <Rating onChange={changing}
      value={val}
      precision={0.2}
      icon={<FavoriteIcon fontSize='inherit' color='error'/>}
      emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>}
      //readOnly
      highlightSelectedOnly />
      <Rating />
    </Stack>
  )
}

export default MuiRating
