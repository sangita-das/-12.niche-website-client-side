import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Review from '../../Review/Review';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('https://peaceful-beach-69061.herokuapp.com/reviews')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography sx={{ fontWeight: 600, m: 4, color: 'success.main' }} variant="h4" component="div">
          Buyer Review
        </Typography>



        <br />
        <br />

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            reviews.map(review => <Review
              id={review.id}
              review={review}
            ></Review>)
          }
        </Grid>
      </Container>
    </Box>
  );
};

export default Reviews;



// {
//   reviews.map(review => <Review
//     id={review.id}
//     review={review}
//   ></Review>)
// }