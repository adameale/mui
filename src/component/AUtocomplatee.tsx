import React from 'react'
import {Stack,Autocomplete,TextField} from '@mui/material'
import {useState} from 'react'

type skill= {
    id:number
    label:string
}
const skill= ['html','java','javascript','react','typescript','c++' ]

const skillOption = skill.map((skill,index)=>({
    id:index+1,
    label:skill,
}))
const AUtocomplatee = () => {
    const [auto,setAuto] =useState<string | null>(null)
    console.log(auto)
    const [auto1,setAuto1] =useState<skill | null>(null)
    console.log(auto1)
  return (
    <Stack spacing={2} width='250px'>
        <Autocomplete options={skill}
        renderInput={(params) => <TextField  {...params} label='skill' 
        value={auto} />}
        onChange={(event: any, newValue:string | null) => setAuto(newValue)} 
     freeSolo
        />

<Autocomplete options={skillOption}
        renderInput={(params) => <TextField  {...params} label='skill' 
        value={auto1} />}
        onChange={(event: any, newValue:skill | null) => setAuto1(newValue)} 

        />
     
    </Stack>
  )
}

export default AUtocomplatee
