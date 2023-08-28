import React from 'react'
import { Grid,Paper,CardMedia,Box ,Button,Card ,CardActions,CardContent,Typography } from '@mui/material'
export const MuiCard = () => {
 // card component will take parents width

    return (
       

<Grid container bgcolor={'purple'} height={"700px"}width={'1200px'} my={4}   p={3}  spacing={3}>
        <Grid   item  xs  ={6}  >   
          <Box  height={"250px"} bgcolor={"pink"} p={2}>  <Card >
            <CardMedia  component="img" height="70" image='https://source.unsplash.com/random'>
             
          </CardMedia>
            
            <CardContent>
            <Typography variant='h5'> React</Typography>
            <Typography variant='body1'>React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.</Typography>
            </CardContent>
           <CardActions>
               <Button size='small'> share</Button>
                <Button size='small'> learn more</Button>
           </CardActions>

            </Card> </Box>
        </Grid>
        <Grid    item  xs ={6}   >
        <Box  height={"250px"} bgcolor={"green"} p={2}>  <Card  > 
            <CardMedia  component="img" height="52" image='https://source.unsplash.com/random'>

        </CardMedia>
            
            <CardContent>
            <Typography variant='h5'> Typescript</Typography>
            <Typography variant='body1'>TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.</Typography>
            </CardContent>
           <CardActions>
                 <Button size='small'> share</Button>
                 <Button size='small'> learn more</Button>
         </CardActions>
            </Card> </Box>
        </Grid>
        <Grid   item  xs  ={6}  >
        <Box  height={"250px"} bgcolor={"blue"} p={2}> <Card  >
            <CardMedia  component="img" height="70" image='https://source.unsplash.com/random'>

        </CardMedia>
            <CardContent>
            <Typography variant='h5'> Java</Typography>
            <Typography variant='body1'>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible</Typography>
            </CardContent>
           <CardActions>
          <Button size='small'> share</Button>
          <Button size='small'> learn more</Button>
           </CardActions>
            </Card>  </Box>  
        </Grid>
        <Grid    item  xs ={6}  >
        <Box   height={"250px"} bgcolor={"red"} p={2}> <Card  >
            <CardMedia   component="img" height="30" image='https://source.unsplash.com/random' >

        </CardMedia>
            <CardContent>
            <Typography variant='h5'> Material UI</Typography>
            <Typography variant='body1'>
            Material Design is a design language developed 
            by Google in 2014. Expanding on the "cards" that debuted in Google Now, 
            Material Design uses more grid-based layouts, responsive animations and
             transitions, padding, and depth effects such as lighting and shadows</Typography>
            </CardContent>
           <CardActions>
                 <Button size='small'> share</Button>
                <Button size='small'> learn more</Button>
          </CardActions>
            </Card> </Box>
        </Grid>
    </Grid>
 
    )
}
