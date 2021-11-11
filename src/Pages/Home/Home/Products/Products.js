import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import { Container } from '@mui/material';





const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('/bicycle.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography sx={{ fontWeight: 600, m: 4, color: 'success.main' }} variant="h4" component="div">
          OUR PRODUCTS
        </Typography>
        <Typography variant="h6" component="div">
          THESE BIKES WON'T RIDE THEMSELVES
        </Typography>
        <Typography>
          Go on an adventure with one of our favorite bikes.
        </Typography>


        <br />
        <br />

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            products.map(product => <SingleProduct
              id={product.id}
              product={product}
            ></SingleProduct>)
          }
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;