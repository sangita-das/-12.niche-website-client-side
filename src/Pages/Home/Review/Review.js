import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { Box } from '@mui/system';
import Rating from 'react-rating';






const Review = (props) => {
  const { name, description, img, profession, star } = props.review;

  console.log(props.review);
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


            <Typography sx={{ color: "#ffc107" }} >
              <Rating
                initialRating={star}
                emptySymbol="far fa-star  "
                fullSymbol="fas fa-star "></Rating>


            </Typography>


          </CardContent>
        </CardActionArea>

      </Box>
    </Grid>

  );
};

export default Review;