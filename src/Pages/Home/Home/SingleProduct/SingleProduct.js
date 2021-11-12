import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Link, Rating, Typography } from '@mui/material';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';

const bgColor = {
  backgroundColor: '#f3e5f5',
  backgroundBlendMode: 'hard-light',

}



const SingleProduct = (props) => {
  const { _id, name, BDT, img, star, category } = props.product;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ maxWidth: 345 }} xs={4} sm={4} md={4}>
        <CardActionArea>
          <CardMedia
            component="img"
            style={{ width: 'auto', height: '80px', margin: '0 auto' }}
            image={img}
            alt="green iguana"
          />

          <CardContent style={bgColor}>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {BDT}
            </Typography>

            <Rating
              initialRating={star}
              emptySymbol="far fa-star  "
              fullSymbol="fas fa-star "></Rating>

          </CardContent>
        </CardActionArea>

        <CardActions style={bgColor}>
          <Link href={`/manageOrder/${_id}`} >
            <Button sx={{ mx: "auto", width: 200 }} variant="outlined" endIcon={<SendIcon />} size="small" color="primary">
              Add to Cart
            </Button>
          </Link>

        </CardActions>


      </Card>
    </Grid>


  );
};

export default SingleProduct;