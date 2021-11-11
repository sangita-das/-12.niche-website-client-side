import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ OpenBooking, handleBookingClose, singleProduct, setBookingSuccess }) => {

  const { user } = useAuth();

  const initialInfo = { buyerName: user.displayName, email: user.email, phone: '' }

  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    console.log(newInfo);
    setBookingInfo(newInfo);
  }

  const handleBookingSubmit = e => {
    alert('Your Order recorded!');

    // collect data
    const product = {
      ...bookingInfo,

    }
    console.log(product);

    // send to the server
    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          setBookingSuccess(true);
          handleBookingClose();
        }
      });



    e.preventDefault();
  }



  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={OpenBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={OpenBooking}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {singleProduct?.name}
          </Typography>

          <form onSubmit={handleBookingSubmit}>
            <TextField
              disabled
              sx={{ width: '90%', m: 1 }}
              id="outlined-size-small"
              defaultValue={singleProduct?.BDT}
              size="small"
            />

            <TextField
              sx={{ width: '90%', m: 1 }}
              id="outlined-size-small"
              name="buyerName"
              onBlur={handleOnBlur}
              defaultValue={user.displayName}
              size="small"
            />
            <TextField
              disabled
              sx={{ width: '90%', m: 1 }}
              id="outlined-size-small"
              name="email"
              onBlur={handleOnBlur}
              defaultValue={user.email}
              size="small"
            />
            <TextField
              sx={{ width: '90%', m: 1 }}
              id="outlined-size-small"
              name="phone"
              onBlur={handleOnBlur}
              defaultValue="Phone Number"
              size="small"
            />
            <TextField
              sx={{ width: '90%', m: 1 }}
              id="outlined-size-small"
              name="product item"
              onBlur={handleOnBlur}
              defaultValue="product_item"
              size="small"
            />

            <Button type="submit" variant="contained">Submit</Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;