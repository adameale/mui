import React, { useState,forwardRef } from 'react'
import {Snackbar,Button,AlertProps, Alert} from '@mui/material'

const SnackbarAlert= forwardRef<HTMLDivElement,AlertProps>(
    function SnackbarAlert(props,ref){
        return <Alert elevation={6} ref={ref} {...props} />
    }
)

const MuiSnackBar = () => {
    const [open,setOpen] =useState(false)
    const handleChange=(event?:React.SyntheticEvent | Event,reason?:string)=>{
        if(reason==='clickaway'){
            return
        }
        setOpen(false)
    }
  return (
    <>
    <Button onClick={()=> setOpen(true)}>submit</Button>
    {/* <Snackbar onClose={handleChange} message='form submitted successfully!'
    autoHideDuration={4000}
    open={open}
    anchorOrigin= {{vertical:'bottom'
    ,horizontal:'center'}} /> */}
    <Snackbar open={open} autoHideDuration={6000} 
    onClose={handleChange}  >
<SnackbarAlert onClose={handleChange}  severity='success'>form submitted successfully</SnackbarAlert>
    </Snackbar>
    </>
  )
}

export default MuiSnackBar