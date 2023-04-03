import React from 'react'
import {Stack,TextField} from '@mui/material'
import {DatePicker,TimePicker} from '@mui/lab'
import {useState} from 'react'
 const MuiDatePicker = () => {
    const [selectedDate,setSelectedDate] =useState<Date | null>(null)
  console.log(selectedDate)
  const [selectedTime,setSelectedTime] =useState<Date | null>(null)
  console.log(selectedTime)
    return (
    <Stack spacing={4} sx={{width:'250px'}}  > 
    <DatePicker label='Date picker' 
     renderInput={(param)=> <TextField  {...param}
   />}   value={selectedDate}
    onChange={(newValue)=>{
    setSelectedDate(newValue)
   }} /> <TimePicker label='Time picker' 
   renderInput={(params)=> <TextField  {...params}
 />}   value={selectedDate}
  onChange={(newValue)=>{
    setSelectedTime(newValue)
 }} /> 


       </Stack>
  )
}

export default MuiDatePicker