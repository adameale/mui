import React from 'react'
import {Stack,TextField} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {useState} from 'react'
 const MuiDatePicker = () => {
  //   const [selectedDate,setSelectedDate] =useState<Date | null>(null)
  // console.log(selectedDate)
  const [value,setValue] =useState<Date | null>(null)
  console.log(value)
    return (
      <LocalizationProvider >
    <Stack spacing={4} sx={{width:'250px'}}  > 
    <DatePicker
          label="Controlled picker"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        
  /> 


       </Stack>
       </LocalizationProvider>
  )
}

export default MuiDatePicker