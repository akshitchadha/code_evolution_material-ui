import { Autocomplete, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

export const MuiAutocomplete = () => {


type Skill={
  id: number,
  label: string
}

    const [val,setVal] = useState<string|null>(null);
    const [skill,setSkill] = useState<Skill |null>(null);
    console.log(skill);
  
    const skills :string []=["html","css","javascript","typescript","react"];
    const skilloptions=skills.map((element,index)=>({
  id :index + 1,
  label :element,
})
)
  return (
    <Stack spacing={2} width={'250px'}>
      
        <Autocomplete freeSolo  value={val}  onChange={(e:any,newValue:string|null)=>{
            setVal(newValue)
        }} options={skills} renderInput={(p)=><TextField
        {...p}  
         label="Skills"></TextField>} ></Autocomplete>


<Autocomplete    isOptionEqualToValue={(option,value)=> option.label === value.label

} options = {skilloptions} value={skill}  

onChange={(e:any,newValue:Skill|null)=>{
            setSkill(newValue)
        }}  renderInput={(p)=><TextField
        {...p}  
         label="Skills"></TextField>} ></Autocomplete>

         
    </Stack>
  )
}
