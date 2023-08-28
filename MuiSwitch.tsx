import React ,{useState} from 'react'
import {FormGroup, Switch,Box, Checkbox, FormControlLabel ,FormControl,FormLabel} from '@mui/material'

export const MuiSwitch = () => {
    const [val,setVal]=useState(false);
   
    const handlechange =(e:React.ChangeEvent<HTMLInputElement>)=>{

        setVal(e.target.checked);
    }

    
    const [skills,setSkills]=useState<string[]>([]);
   





    const handleskill=(event :React.ChangeEvent<HTMLInputElement>)=>{
        const index = skills.indexOf(event.target.value);
        if(index === -1)
        {
            setSkills([...skills,event.target.value]);
        }
        else
        {
               setSkills(skills.filter((x)=>x!==event?.target.value));
        
     }}


     console.log(skills);












    console.log(val);
    return (
    
        <Box>
            <FormControlLabel  label={"enable dark mode"} control={ 
                < Switch onChange={handlechange}></Switch>} ></FormControlLabel>
        
        
        
        <Box>

        <FormControl>
            <FormLabel > Skills </FormLabel>
              <FormGroup row>
              <FormControlLabel  value={"html"}    label={"html"} 
         control={<Switch checked={skills.includes("html")}
         onChange={handleskill}  
         ></Switch>   
        }></FormControlLabel>  



<FormControlLabel     label={"java"} value={"java"} 
         control={<Switch checked={skills.includes("java")}
         onChange={handleskill}
         ></Switch>   
        }></FormControlLabel>  



<FormControlLabel   value={"css"}  label={"css"} 
         control={<Switch checked={skills.includes("css")}
         onChange={handleskill}
         ></Switch>   
        }></FormControlLabel>  
              </FormGroup>
        </FormControl>

        </Box>
        
        
        </Box>

        
        
  )
}
