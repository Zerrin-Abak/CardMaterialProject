import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

function Cards({image, title, description}) {
  return (
    <Card sx={{maxWidth:"250px"}}>
      <CardMedia
      component={"img"}
      alt={title}
      height={"200px"}
      image={image}
      />
      <CardContent>
        <Typography variant='h5'>{title}</Typography>
        <Typography variant='body2' color='text.secondary'>{description}</Typography>
      </CardContent>
    </Card>
  )
}

export default Cards