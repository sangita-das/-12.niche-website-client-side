import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';





const Review = (props) => {
  const { name, description, img, profession } = props.review;


  return (
    <Grid item xs={4} sm={4} md={4}>

      <Box sx={{ maxWidth: 375 }} >
        <CardActionArea>
          <CardMedia
            component="img"
            style={{ width: 'auto', height: '80px', margin: '0 auto' }}
            image={img}
            alt="green iguana"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.dark">
              {profession}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>

          </CardContent>
        </CardActionArea>

      </Box>
    </Grid>

  );
};

export default Review;