import { Box, Grid, Paper, Stack } from '@mui/material'
import React from 'react'

export const MuiLayoutBox = () => {
  return (
    <Paper sx={{padding:'32px' ,backgroundColor:"yellow"}} elevation={4}>
      <Paper  sx={{padding:'32px' ,backgroundColor:"pink"}} elevation={4}>
    <Stack spacing={7}  direction={'row'} width={'500px'}  border={'1px solid'  }>
        
    <Box   sx={{
        backgroundColor :'primary.main',
        color:'white',
        height :'100px',
        width: '100px',
        padding:'16px',
        '&:hover':{
            backgroundColor:'primary.light'
        }

    }}> i love niharika vashisht</Box>
    
    <Box  display={'flex'} bgcolor={"green"} height={'100px'} width={'100px'} p={2}></Box>
    
    <Box  display={'flex'} bgcolor={"yellow"} height={'100px'} width={'100px'} p={2}></Box>

    
    </Stack >
    <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid   item  xs ={6} >   
          <Box bgcolor={"pink"} p={2}>   item 1</Box>
        </Grid>
        <Grid    item  xs ={6}  >
        <Box bgcolor={"green"} p={2}>   item 2</Box>
        </Grid>
        <Grid   item  xs ={6}   >
        <Box bgcolor={"yellow"} p={2}>  item 3 </Box>  
        </Grid>
        <Grid    item  xs ={6}  >
        <Box bgcolor={"red"} p={2}>  item 4</Box>
        </Grid>
    </Grid>
    </Paper>
    </Paper>
  )
}
