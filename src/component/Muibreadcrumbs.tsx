import React from 'react'
import {Breadcrumbs,Typography,Link,Box} from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
const Muibreadcrumbs = () => {
  return (
    <Box m={2} >
     <Breadcrumbs aria-label='breadcrumbs'
     separator={<NavigateNextIcon fontSize='small'
     />
     
      } maxItems={3} itemsBeforeCollapse={3}>
     <Link underline='hover' href='#'>navigate1
     </Link>
     <Link underline='hover' href='#'>navigate2
     </Link>
     <Link underline='hover' href='#'>navigate3
     </Link>
     <Link underline='hover' href='#'>navigate4
     </Link>
     </Breadcrumbs> 
    </Box>
  )
}

export default Muibreadcrumbs
