import React from 'react'
import {Box,Tab} from '@mui/material'
import {TabContext,TabList,TabPanel} from '@mui/lab'
import {useState} from 'react'
const MuiTabs = () => {
    const [value,setValue] =useState('1')
    const handleChange=(event:React.SyntheticEvent,newValue:string)=>{
      setValue(newValue)  
    }
  return (
    <Box>
        <TabContext value={value}>
            <Box sx={{borderBottom:1,borderColor:'divider'}}>
                <TabList textColor='secondary' aria-label='tabs example' indicatorColor='secondary'
                variant='scrollable'
                scrollButtons='auto'
                onChange={handleChange}>
                  < Tab label='Tab one' value='1' />
                  < Tab label='Tab two' value='2' />
                  < Tab label='Tab three' value='3'/>
                </TabList>
            </Box>
            <TabPanel value='1'>panel one</TabPanel>
            <TabPanel value='1'>panel two</TabPanel>
            <TabPanel value='1'>panel three</TabPanel>
        </TabContext>
    </Box>
  )
}

export default MuiTabs