import React from 'react'
import {Stack,Avatar,AvatarGroup} from '@mui/material'


const MUiAvatar = () => {
  return (
    <Stack spacing={2}>
    <Stack direction='row' spacing={1}>
      <Avatar sx={{bgcolor:'primary.light',width:'80',height:80}}>av1</Avatar>
      <Avatar sx={{bgcolor:'success.light',width:'10',height:100}}>av2</Avatar>
    </Stack>

    <Stack direction='row' spacing={5}>
        <AvatarGroup max={4}>
      <Avatar variant='square' sx={{bgcolor:'primary.light',width:'80',height:80}}>av1</Avatar>
      <Avatar variant='rounded' sx={{bgcolor:'success.light'}}>av2</Avatar>

      <Avatar src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' >av1</Avatar>
      <Avatar src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' >av2</Avatar>
      </AvatarGroup>
    </Stack>
    </Stack>
  )
}

export default MUiAvatar
