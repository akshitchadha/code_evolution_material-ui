import { Stack,Button,ButtonGroup,ToggleButton,ToggleButtonGroup } from '@mui/material';
import React, { useState  } from 'react';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderLinedIcon from '@mui/icons-material/FormatUnderlined'
export const MuiButton = () => {

const [formats,setFormats]=useState<string[]>([]);
console.log(formats);
const handleFomatChange=(event:any,updatedFormats:string[])=>{
 setFormats(updatedFormats);
}
  return (
    <Stack>
    <Stack spacing={2} direction={'row'}>
     <Button variant='text' href='https://www.google.com'>text</Button>
     <Button variant='contained'>contained</Button>
     <Button variant='outlined'>outlined</Button>
     </Stack>
      
      <Stack  margin={2} spacing={2} direction={'row'}> 

      <Button variant='contained' color='primary'>primary</Button>
      <Button variant='contained' color='secondary'>secondary</Button>
      <Button variant='contained' color='error'>error</Button>
      <Button variant='contained' color='warning'>warning</Button>
      <Button variant='contained' color='info'>info</Button>
      <Button variant='contained' color='success'>success</Button>

      </Stack>

      <Stack display="block"  spacing={2} direction={'row'}> 
      <Button variant='contained' size='small'>Small</Button>
      <Button variant='contained' size="large">Large</Button>
      <Button variant='contained' size='medium'>medium</Button>
      </Stack>

      <Stack spacing={2} direction={'row'}>

      <Button variant='contained'  startIcon={<SendIcon></SendIcon>} size='medium'>Send</Button>
      <Button variant='contained'  disableElevation={true} endIcon={<SendIcon></SendIcon>} size='medium'>send</Button>


      <IconButton aria-label='send' disableRipple={true} color='success'  onClick={function(){alert("send button clicked")}}>
        <SendIcon></SendIcon>
      </IconButton>
      </Stack>
      <br></br>
      <Stack direction={'row'}>
      <ButtonGroup variant="text" aria-label="outlined primary button group" size='large' color='secondary' orientation='vertical'>
       <Button onClick={function(){alert("moving towards left")}}>left</Button>
        <Button  onClick={function(){alert("moving towards center")}}>center</Button>
        <Button  onClick={function(){alert("moving towards right")}}>right</Button>
       </ButtonGroup>
      </Stack>


     <Stack direction={'row'}>
         <ToggleButtonGroup orientation='vertical' color="secondary" aria-label="text formatting" value={formats}  onChange={handleFomatChange}>
          <ToggleButton aria-label='bold' value={"Bold"}><FormatBoldIcon></FormatBoldIcon></ToggleButton>
          <ToggleButton aria-label='Italic' value={"Italic"}><FormatItalicIcon></FormatItalicIcon></ToggleButton>
          <ToggleButton  aria-label='UnderLined' value={"UnderLined"}><FormatUnderLinedIcon></FormatUnderLinedIcon></ToggleButton>
         </ToggleButtonGroup> 
     </Stack>


     </Stack>
 

       
  
  )
}
