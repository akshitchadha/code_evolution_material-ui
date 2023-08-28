import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React ,{ useRef }from 'react'
import CatchingPokemon from'@mui/icons-material/CatchingPokemon'
import MenuButton from '@mui/icons-material/Menu'
import { green, yellow } from '@mui/material/colors'
import { Muidrawer } from './MuiDrawer'
export const MuiNavbar = () => {

    const ref :any = React.createRef();


    

    const handleClick = () => {

        ref?.current?.showDrawer();

    };
  
  return (
    <AppBar position='static'>
    <Toolbar>
        <IconButton onClick={handleClick}>
           <MenuButton></MenuButton>
        </IconButton>
        <IconButton size='large' >
            <CatchingPokemon></CatchingPokemon>
        </IconButton>

        {/* {flex grow is very important here it separate log0 from buttons} */}
        <Typography variant='h6' component='div' sx={{flexGrow:1}}>Pokemon App</Typography>

        <Stack direction={'row'} spacing={2}>
            <Button color='error'>Features</Button>
            <Button color='error'>Pricing</Button>
            <Button color='error'>About us</Button>
            <Button color='error'>Login</Button>
        </Stack>
    </Toolbar>
    <Muidrawer ref={ref} ></Muidrawer>
    </AppBar>
    
  )
}
