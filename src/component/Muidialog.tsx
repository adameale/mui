import React from 'react'
import {Button,Dialog,
    DialogActions,
    DialogTitle,DialogContent,
    DialogContentText} from '@mui/material'
    import {useState} from 'react'
const Muidialog = () => {
    const [open,setOpen] =useState(false)
  return (
    <>
    <Button onClick={()=>setOpen(true)}>open Dialog</Button>
    <Dialog   open={open} onClose={()=>setOpen(true)} aria-labelledby='dialog-title'
    aria-describedby='dialog-description'>
        <DialogTitle id='dialog-title'  >submit the test</DialogTitle>
        <DialogContent>
            <DialogContentText id='dialog-description'  >
                are you sure you want to submit the text
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={()=> setOpen(false)}>cancel</Button>
           <Button autoFocus onClick={()=> setOpen(false)} >submit</Button>
        </DialogActions>

    </Dialog>
    </>
  )
}

export default Muidialog