import React from 'react'
import {Box,Stack,Divider,Grid,Paper} from '@mui/material'
const Muilayout = () => {
  return (
    <Paper sx={{ padding:'32px'}} elevation={8} >
    <Stack direction='row' spacing={2} sx={{border:'2px solid'}} divider={<Divider orientation='horizontal' flexItem /> }>
        <Box sx={{
backgroundColor:'primary.main',
 color:'white',
 height:'100px',
 width:'100px'
    }}>

        </Box>
        <Box sx={{
backgroundColor:'success.light',
 color:'white',
 height:'100px',
 width:'100px',
 '&:hover':{
    backgroundColor:'red',
 }
    }}>

        </Box>
      
    </Stack>
    <Grid  container my={4}>
         
    <Grid item xs={12}><Box bgcolor='primary.light' p={2}>Item 1</Box>
    </Grid>
    <Grid item  xs={6}><Box bgcolor='primary.light' p={2}>Item 2</Box>
    </Grid>
    <Grid item xs={12}><Box bgcolor='primary.light' p={2}>Item 3</Box>
    <Grid item xs={12}><Box bgcolor='primary.light' p={2}>Item 4</Box>
    </Grid>
    </Grid>
    </Grid>
    </Paper>
  )
}

export default Muilayout
