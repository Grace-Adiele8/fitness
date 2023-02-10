import React from 'react';
import { Box, Stack, Typography} from '@mui/material';

function HeroBanner() {
  return (
    <Box
    sx={{mt:{lg: '212px', xs:'70px'}}}>
      <Typography color='#ff2625' fontWeight='600' fontSize='26px'>
        Fitness Club
      </Typography>
    </Box>
  )
}

export default HeroBanner
