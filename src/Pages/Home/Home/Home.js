import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import SingleProduct from './SingleProduct/SingleProduct';
import SendIcon from '@mui/icons-material/Send';
import Review from '../Review/Review';
import Reviews from './Reviews/Reviews';




const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/items')
      .then(res => res.json())
      .then(data => setProducts(data.slice(0, 6)));
  }, []);

  return (
    <div>


      <Banner></Banner>
      <Services></Services>

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
          <br />
          <Button variant="contained" endIcon={<SendIcon />}>
            <Link to="/products" style={{ color: 'white', textDecoration: 'none', fontWeight: 700 }}> View More</Link>
          </Button>
        </Container>
      </Box>


      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;