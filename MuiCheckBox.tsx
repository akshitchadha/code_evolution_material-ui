import {FormGroup, Box, Checkbox, FormControlLabel ,FormControl,FormLabel} from '@mui/material'
import React, { useState } from 'react'
import  Bookmark  from '@mui/icons-material/Bookmark'
import  BookmarkBordericon  from '@mui/icons-material/BookmarkBorder'

export const MuiCheckBox = () => {
     const [accept,setAccept] =useState(false);

     const [skills,setSkills] =useState<string[]>([]);

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
     const handleChange=(event :React.ChangeEvent<HTMLInputElement>)=>{
            setAccept(event.target.checked);
 }
 
    
    //  console.log(accept);
  return (
        <Box>
      <Box>
         <FormControlLabel     label={" I accept terms and conditions "} 
         control={<Checkbox checked={accept}
         onChange={handleChange}
         ></Checkbox>   
        }></FormControlLabel>  
      </Box>
         <FormControlLabel control={ <Checkbox onChange={handleChange} icon={<BookmarkBordericon></BookmarkBordericon>}  checkedIcon=
      {<Bookmark></Bookmark>         }  value={accept}></Checkbox>}label={" do you love niharika vashisht"}></FormControlLabel>
        
        <Box>

        <FormControl>
            <FormLabel > Skills </FormLabel>
              <FormGroup row>
              <FormControlLabel  value={"html"}    label={"html"} 
         control={<Checkbox checked={skills.includes("html")}
         onChange={handleskill}  
         ></Checkbox>   
        }></FormControlLabel>  



<FormControlLabel     label={"java"} value={"java"} 
         control={<Checkbox checked={skills.includes("java")}
         onChange={handleskill}
         ></Checkbox>   
        }></FormControlLabel>  



<FormControlLabel   value={"css"}  label={"css"} 
         control={<Checkbox checked={skills.includes("css")}
         onChange={handleskill}
         ></Checkbox>   
        }></FormControlLabel>  
              </FormGroup>
        </FormControl>

        </Box>
        </Box>

  )

}