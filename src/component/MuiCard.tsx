import React from 'react'
import {Box,Card,CardContent,CardMedia,
    Typography,CardActions,Button
} from '@mui/material'
const MuiCard = () => {
  return (
    <Box width='300px' >
      <Card>
    <CardMedia  component='img'
    height='140'
    image='https://images.unsplash.com/photo-1591164115502-09f4edf9f005?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    alt='unsplash image'
    ></CardMedia>
        <CardContent>
         <Typography variant='h5'>
        Card definition
         </Typography>
         <Typography  variant='body2'>
         A react card component is a content container.
          It incorporates options for images, headers, 
          and footers, a wide variety of content,
           contextual background colors,
          and excellent display options.
         </Typography>
    
        </CardContent>
        <CardActions>
            <Button size='small' color='success'>share</Button>
            <Button size='medium'>learn more</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default MuiCard
