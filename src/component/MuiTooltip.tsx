import React from 'react'
import {Tooltip,IconButton} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
const MuiTooltip = () => {
  return (
<Tooltip title='delete' placement='top' arrow enterDelay={4000} leaveDelay={5000}>
<IconButton>
      <DeleteIcon/>
      </IconButton>
</Tooltip>
    
  )
}

export default MuiTooltip
