import React from 'react'
import {useState} from 'react'
import { Box,TextField,MenuItem } from '@mui/material'
 const  Muiselect= () => {
    const [country,setcountry] = useState<string[]>([])
    const handleChange =(event:React.ChangeEvent<HTMLInputElement>) =>{
        const mnu=event.target.value
        setcountry(typeof mnu ==='string'?mnu.split(','):mnu)
    }
  return <Box width='250px'>
      <TextField label='select country' select
      value={country} onChange={handleChange} fullWidth
      SelectProps={{multiple:true,}}>
        <MenuItem  value='IN'>India</MenuItem>
        <MenuItem  value='US'>america</MenuItem>
        <MenuItem  value='UK'>english</MenuItem>
      </TextField>

    </Box>
  
}
export default Muiselect