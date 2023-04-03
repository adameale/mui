import React from 'react'
import { Stack,Skeleton,Box,Avatar,
    Typography } from '@mui/material'
    import {useState,useEffect} from 'react'
const MuiSkeleton = () => {
    const [loading,setLoading] =useState(false)
     useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },6000)
     },[])
  return (
    // <Stack spacing={1} width='250px'>
    //    <Skeleton variant='text' width={250} height={20}  animation={false}  />
    //    <Skeleton variant='circular' width={100} height={100} animation='wave'/> 
    // </Stack>
    <Box sx={{widows:'250px'}}>
        {
         loading?(
            <Skeleton variant='rectangular' width={256} height={144}
            animation='wave'/>
            )  :(<img src='https://www.kindpng.com/picc/m/464-4644512_circle-avatar-picture-png-transparent-png.png' 
            alt='skeleton' width={256} height={144}  />
         )  
        }
        <Stack direction='row' spacing={2} sx={{
            width:'100%', margintop:'12px'
        }}  >

{
         loading?(
            <Skeleton variant='circular' width={40} height={40}
            animation='wave'/>
            )  :(<Avatar>
                v
            </Avatar>)
        }  
        </Stack>
    </Box>
  )
}

export default MuiSkeleton