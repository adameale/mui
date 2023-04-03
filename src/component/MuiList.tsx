import React from 'react'
import {Box,List,ListItem,ListItemIcon,
    ListItemText,
ListItemAvatar,Avatar,
ListItemButton,
Divider} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
const MuiList = () => {
  return (
    <Box sx={{width:'400px',bgcolor:'#efefef'}}>
    <List>
      <ListItem disablePadding>
        <ListItemButton>
        <ListItemIcon>
            <ListItemAvatar>
                <Avatar>
                < MailIcon/>
                </Avatar>
     
     </ListItemAvatar>
        </ListItemIcon>
        
       <ListItemText primary='list item1'>
       </ListItemText>
       </ListItemButton>
       </ListItem>
       <Divider />
       <ListItem>
      
       <ListItemIcon>
            <ListItemAvatar>
                <Avatar>
                < MailIcon/>
                </Avatar>
     
     </ListItemAvatar>
        </ListItemIcon>
        
        <ListItemText primary='list item2'>
      
        </ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
        <ListItemIcon>
            <ListItemAvatar>
                <Avatar>
                < MailIcon/>
                </Avatar>
     
     </ListItemAvatar>
        </ListItemIcon>
        <ListItemText primary='list item3'>
        </ListItemText> 
      </ListItem>
      <Divider />
    </List>
    </Box>
  )
}

export default MuiList
