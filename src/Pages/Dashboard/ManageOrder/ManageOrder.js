import { Star } from '@mui/icons-material';
import { Alert, Button, CardContent, Grid, Link, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookingModal from '../BookingModal/BookingModal';

const ManageOrder = () => {
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const [OpenBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);


  const { productId } = useParams()
  const [productDetails, setProductDetails] = useState([]);

  const [singleProduct, setSingleProduct] = useState({})

  // all data load
  useEffect(() => {
    fetch('/bicycle.json')
      .then(res => res.json())
      .then(data => setProductDetails(data))
  }, []);

  // single data load
  useEffect(() => {
    const foundProduct = productDetails.find(product => product.id === productId)
    setSingleProduct(foundProduct);
  }, [productDetails])




  return (
    <>
      <Grid >
        <Typography>Booking Product No:{productId}</Typography>
        {bookingSuccess && <Alert severity="success">Successfully Ordered!</Alert>}

        <Box className="mt-2 d-flex justify-content-center mb-5 pb-5">

          <Box >
            <Box >
              <img src={singleProduct?.img} alt="" />
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Product Name: {singleProduct?.name}
              </Typography>
              <Typography variant="body2" gutterBottom component="div">
                {singleProduct?.speciality}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Category: {singleProduct?.category}
              </Typography>
              <Typography variant="h5" >
                price: {singleProduct?.BDT}
              </Typography>

              <Rating
                initialRating={Star}
                emptySymbol="far fa-star  "
                fullSymbol="fas fa-star "></Rating>

              <Box>
                <Button onClick={handleBookingOpen} sx={{ mx: "auto", width: 200 }} variant="outlined" size="small" color="primary">
                  proceed Order
                </Button>
              </Box>

            </CardContent>
            <Box className="text-center">
              <Link href={`/products`}>
                <Button sx={{ mx: "auto", width: 200 }} variant="outlined" size="small" color="primary">
                  Back to Products
                </Button>
              </Link>

            </Box>
          </Box>
        </Box>
      </Grid >

      <BookingModal
        singleProduct={singleProduct}
        OpenBooking={OpenBooking}
        handleBookingClose={handleBookingClose}
        setBookingSuccess={setBookingSuccess}
      >
      </BookingModal>
    </>

  );
};

export default ManageOrder;