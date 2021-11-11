import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';






// const reviews = [
//   {
//     name: 'Hayden Read',
//     profession: 'Sales Manager',
//     description: 'Select your service, how many bikes need attention, day and time to show up. Just wait for us to arrive and rest is for us to figure out.',
//     img: person1
//   },
//   {
//     name: 'Quinn Nolan',
//     profession: 'Teacher',
//     description: 'We’ll show up with all of the tools, parts and accessories to get your bike/s in tip top shape! You carry on with your day just like any other.',
//     img: person2
//   },
//   {
//     name: 'Sammy Peters',
//     profession: 'Student',
//     description: 'After final test ride, you’re ready to go. Life is always better after a bike ride. Love what you do.',
//     img: person3
//   },
//   {
//     name: 'Jhon Rock',
//     profession: 'Student',
//     description: 'After final test ride, you’re ready to go. Life is always better after a bike ride. Love what you do.',
//     img: person4
//   },
//   {
//     name: 'Olivar Thomas',
//     profession: 'Student',
//     description: 'After final test ride, you’re ready to go. Life is always better after a bike ride. Love what you do.',
//     img: person5
//   },
//   {
//     name: 'David Smith',
//     profession: 'Student',
//     description: 'After final test ride, you’re ready to go. Life is always better after a bike ride. Love what you do.',
//     img: person6
//   },
// ]





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