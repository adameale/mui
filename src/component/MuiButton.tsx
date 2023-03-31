import React from 'react'
import { Stack, Button,IconButton,ButtonGroup,ToggleButtonGroup,ToggleButton} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import { useState } from 'react';
const MuiButton = () => {
    const [Formats,setFormats] = useState<string | null>(null)
    const handleFormatChange=(_event: React.MouseEvent<HTMLElement>,updateFormats:string | null) =>{
      setFormats(updateFormats)  
      console.log(Formats,)
    }
  return (
    <Stack spacing={4} direction='column'>
   <Stack spacing={2} direction='row'>
   <Button variant="text" href='https://google.com'>Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
</Stack>
<Stack spacing={2} direction='row'>
    <Button variant='contained' color='primary'>primary</Button>
    <Button variant='outlined' color='secondary'>secondary</Button>
    <Button variant='text' color='error'>error</Button>
    <Button variant='contained' color='warning'>warning</Button>
    <Button variant='contained' color='info'>info</Button>
    <Button variant='contained' color='success'>success</Button>
</Stack>
<Stack display='block' spacing={2} direction='row'>
    <Button variant='contained' size='small'>small</Button>
    <Button variant='contained' size='large'>large</Button>
    <Button variant='contained' size='medium'>medium</Button>

</Stack>
<Stack spacing={2} direction='row'>
    <Button variant='contained' startIcon={<SendIcon/>}>send</Button>
    <Button variant='contained' endIcon={<SendIcon/>}>end</Button>
    
        <IconButton color='success'><SendIcon/></IconButton>
    
</Stack>
<Stack>
    <ButtonGroup aria-label='alignment button group' variant='contained' orientation='vertical' size='small'>
        <Button onClick={()=> alert('left click')}> left </Button>
       <Button> center </Button>
       <Button  >right </Button>
    </ButtonGroup>
        </Stack>
        <Stack direction='row' >
     <ToggleButtonGroup
 aria-label='text formatting'
            size='small'
            color='success'
            orientation='horizontal'
            exclusive
             value={Formats}
                onChange={handleFormatChange}>

            <ToggleButton value='Bold' aria-label='bold'>
                <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value='Italic' aria-label='italic'><FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value='Underlined' aria-label='underlined'><FormatUnderlinedIcon />
            </ToggleButton>
            <ToggleButton value='ArrowDropDown'>
               <ArrowDropDownIcon />
            </ToggleButton>
            <ToggleButton value='FormatColorFill'>
               <FormatColorFillIcon />
            </ToggleButton>
            </ToggleButtonGroup>
        </Stack>
   </Stack>
  )
}

export default MuiButton
