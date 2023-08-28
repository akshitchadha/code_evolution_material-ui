import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'

export const MuiRadioButton = () => {
    const [val,setVal]=useState("");
    const handlechange=(e:any)=>{
  
        setVal(e.target.value);

    }

    console.log(val);
  return (
       <Box>
           
           <FormControl>
            <FormLabel>year of experience </FormLabel>
            <RadioGroup  value ={val} row onChange={handlechange}>
             
             <FormControlLabel  label="2-3 years" value={"2-3 years"}  control={<Radio></Radio>}></FormControlLabel>
             <FormControlLabel  label="4-5 years" value={"4-5 years"}  control={<Radio></Radio>}></FormControlLabel>
             <FormControlLabel  label="6-7 years" value={"6-7 years"}  control={<Radio></Radio>}></FormControlLabel>
            </RadioGroup>
           </FormControl>
       </Box>
  )
}
