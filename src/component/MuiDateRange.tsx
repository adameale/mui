import React from 'react'
import {Box,TextField}  from '@mui/material'
import {DateRangePicker,DateRange} from '@mui/lab'
import {useState} from 'react'
const MuiDateRange = () => {
    const [value,setValue] =useState<DateRange<Date>>([null,null])
  return (
    <Box width='500px'>
        < DateRangePicker startText='check-in'
       endeText='check-out' value={value}
      onChange={(newValue)=>{
        setValue(newValue)
      }} />
    </Box>
  )
}

export default MuiDateRange