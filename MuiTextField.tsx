import { Stack,  TextField,InputAdornment } from '@mui/material'
import React, { useState } from 'react'

export const MuiTextField = () => {

    const [value,setValue]=useState('');
  return (
    <Stack spacing={4}>
        <br></br>
            <Stack  direction={'row'} spacing={2}>
                 <TextField label={"Name"} variant='outlined'></TextField>
                 <TextField label={"Name"} variant='filled'></TextField>
                 <TextField label={"Name"} variant='standard'></TextField>
            </Stack>
            <Stack spacing={2} direction={'row'} >
                <TextField label={"Small secondary"} size='small' color='secondary'></TextField>
            </Stack>
            <Stack spacing={2} direction={'row'} >
                <TextField label={"Form Input"}  onChange={(e)=>{setValue(e.target.value)}}  
                error={!value}  
                required  value={value} type='password'  helperText={ !value? "Required" :"donot share your password with anyone"}></TextField>
                  <TextField  value={"abc"} label={"read only"} InputProps={{readOnly :true}} ></TextField>        
            </Stack>
            <Stack direction={'row'} spacing={2}>
            <TextField
                label={"Amount"}
                InputProps={{
                    startAdornment: 
                    <InputAdornment position='start'>
                        $</InputAdornment>,
                }}></TextField>


       <TextField
                label={"Weight"}
                InputProps={{
                    endAdornment: 
                    <InputAdornment position='end'>
                        kg</InputAdornment>,
                }}></TextField>
            </Stack>
    </Stack>
  )
}
