import React, { useState } from 'react'
import {Box, MenuItem, TextField} from '@mui/material'

export const MuiSelect = () => {
  const [country,setCountry]=useState<string[]>([]);
  function handleOnChange(e:React.ChangeEvent<HTMLInputElement>)
  {
    const value=e.target.value;
      setCountry(typeof value==='string'?value.split(','):value)
  }
  console.log(country);
  return (
    
    <Box width={'250px'}>
      <br></br>
    <TextField size='medium'  helperText={"please choose your country"} color='error'fullWidth label={"Select Country"} SelectProps={{multiple:true}}  onChange={handleOnChange} value={country}select>
      <MenuItem value={"IN"}>India</MenuItem>
      <MenuItem value={"Au"}>Australia</MenuItem>
      <MenuItem value={"US"}>USA</MenuItem>
    </TextField>
    </Box>
  )
}
