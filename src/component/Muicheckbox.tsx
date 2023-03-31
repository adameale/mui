import React from 'react'
import {Box,
    FormLabel,
    FormControlLabel,
     FormControl,FormGroup} from '@mui/material'
     import Checkbox from '@mui/material/Checkbox';
     import { useState } from 'react'
     import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookMarkIcon from '@mui/icons-material/BookMark'

     
const Muicheckbox = () => {
    const [acceptINC,setacceptINC] =useState(false)
    console.log({acceptINC})
    
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
       setacceptINC(event.target.checked)  
    }
    const [skill,setSkill] =useState<string[]>([])
    console.log({skill})
    const handleChange1=(event:React.ChangeEvent<HTMLInputElement>)=>{
       const index= skill.indexOf(event.target.value)
       if(index ===-1){
        setSkill([...skill,event.target.value])
       }
       else{
        setSkill(skill.filter((skill) =>skill !== event.target.value))
       }
     }
  return (
    <Box>
        
        
       <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />    
        <Box>
            <FormControlLabel 
            label='i accept terms and conditions'
 control={<Checkbox checked={acceptINC} onChange={handleChange}/>}

 />
        </Box>
      <Box>
        <Checkbox icon={<BookmarkBorderIcon/>} />
      </Box>
      <Box>
<FormControl>
    <FormLabel>Skills</FormLabel>
    <FormGroup  row   >
        <FormControlLabel
        label='HTML'
        control={<Checkbox value='html'
        checked={skill.includes('html')} onChange={handleChange1} />}></FormControlLabel>
<FormControlLabel
        label='CSS'
        control={<Checkbox value='css'
        checked={skill.includes('css')} onChange={handleChange1} />}></FormControlLabel>
        <FormControlLabel
        label='JAVASCRIPT'
        control={<Checkbox value='javascript'
        checked={skill.includes('javascript')} onChange={handleChange1} />}></FormControlLabel>

    </FormGroup>
</FormControl>

      </Box>
    </Box>
  )
}

export default Muicheckbox
