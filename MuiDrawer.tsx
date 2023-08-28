import { Button, Drawer, Stack } from '@mui/material'
import React, { forwardRef, useImperativeHandle, useState } from 'react'

export const Muidrawer = forwardRef((props, ref) => {

    const [isDrawerOpened,setIsDrawerOpened]=useState(false);

  const showDrawer = () => {
    setIsDrawerOpened(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpened(false);
  };

  useImperativeHandle(ref, () => {
    return {
        showDrawer: showDrawer
    };
  });

  return (
    <Drawer  anchor='left' open={isDrawerOpened} onClose={()=>closeDrawer()}>
        <Stack spacing={2} direction={'column'}>
            <Button>Car repair</Button>
            <Button>gallery</Button>
            <Button>etc</Button>
        </Stack>
    </Drawer>
  )
});
