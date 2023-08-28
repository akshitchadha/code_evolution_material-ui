import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


export const MuiAccordian = () => {
    const [expanded,setExpanded] = useState<string|false>(false);
     function handlechange(isExpanded :boolean,panel:string){
        setExpanded(isExpanded? panel : false);
     }
  return (

    
    <Grid container>
    
        <Grid item xs={12}>
          <Accordion expanded={expanded === 'p1'} onChange={(event,isExpanded)=>handlechange(isExpanded,'p1')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
               <Typography variant='h6'> Niharika vashisht chadha </Typography> 
            </AccordionSummary>
            <AccordionDetails ><Typography>Lorem ipsum dolor sit amet
                 consectetur, adipisicing elit. Nihil sunt eos, est sint aliquid,
                  repudiandae laudantium explicabo fugiat culpa, obcaecati totam. Nemo
                 praesentium voluptatibus eveniet explicabo fuga facere molestiae sint.</Typography></AccordionDetails>
          </Accordion>
        </Grid>
        
        
        <Grid item xs={12}>
          <Accordion expanded={expanded === 'p2'} onChange={(event,isExpanded)=>handlechange(isExpanded,'p2')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
               <Typography variant='h6'> Niharika vashisht chadha </Typography> 
            </AccordionSummary>
            <AccordionDetails ><Typography>Lorem ipsum dolor sit amet
                 consectetur, adipisicing elit. Nihil sunt eos, est sint aliquid,
                  repudiandae laudantium explicabo fugiat culpa, obcaecati totam. Nemo
                 praesentium voluptatibus eveniet explicabo fuga facere molestiae sint.</Typography></AccordionDetails>
          </Accordion>
        </Grid>
        
        <Grid item xs={12}>
          <Accordion  expanded={expanded === 'p3'} onChange={(event,isExpanded)=>handlechange(isExpanded,'p3')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
               <Typography variant='h6'> Niharika vashisht chadha </Typography> 
            </AccordionSummary>
            <AccordionDetails ><Typography>Lorem ipsum dolor sit amet
                 consectetur, adipisicing elit. Nihil sunt eos, est sint aliquid,
                  repudiandae laudantium explicabo fugiat culpa, obcaecati totam. Nemo
                 praesentium voluptatibus eveniet explicabo fuga facere molestiae sint.</Typography></AccordionDetails>
          </Accordion>
        </Grid>
    </Grid>
  )
}
