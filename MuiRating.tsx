import { Rating, Stack } from '@mui/material'
import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const MuiRating = () => {

const [rating,setRating] = useState<number|null>(null);

console.log(rating);
const handlechange=(_e:React.ChangeEvent<{}>, 
    newValue:number|null)=>
    {
        setRating(newValue)
    };

  return (
    <Stack spacing={2} >
        <Rating name='rating'  value={rating} 


        size={'large'} icon={<FavoriteIcon fontSize='inherit'></FavoriteIcon>}
        emptyIcon={<FavoriteBorderIcon fontSize='inherit'></FavoriteBorderIcon>}
        onChange={handlechange} precision={0.5}></Rating>
    </Stack>
  )
}
