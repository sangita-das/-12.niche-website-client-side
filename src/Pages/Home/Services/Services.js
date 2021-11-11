import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service'

// import Repair from './../../../images/services/service1.jpg';
// import Fitting from './../../../images/services/service2.jpg';
// import Rental from './../../../images/services/service3.jpg';
import pic1 from './../../../images/services/pic1.png';
import pic2 from './../../../images/services/pic2.png';
import pic3 from './../../../images/services/pic3.png';



// const serviceImage = [
//   {
//     name: 'Bike Repair',
//     img: Repair
//   },
//   {
//     name: 'Bike Fitting',
//     img: Fitting
//   },
//   {
//     name: 'Bike Rental',
//     img: Rental
//   }
// ]
const services = [
  {
    name: 'Book Online',
    description: 'Select your service, how many bikes need attention, day and time to show up. Just wait for us to arrive and rest is for us to figure out.',
    img: pic1
  },
  {
    name: 'We’ll fix your bike',
    description: 'We’ll show up with all of the tools, parts and accessories to get your bike/s in tip top shape! You carry on with your day just like any other.',
    img: pic2
  },
  {
    name: 'Then you go ride',
    description: 'After final test ride, you’re ready to go. Life is always better after a bike ride. Love what you do.',
    img: pic3
  }
]


const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography sx={{ fontWeight: 600, m: 4, color: 'success.main' }} variant="h4" component="div">
          SERVICES WE PROVIDE
        </Typography>
        <Typography >We want you to perform better and enjoy your new or favourite bike, which is why we offer basic to complete overhaul service packages.</Typography>
        <Typography variant="h6" >Bike Repair || Bike Fitting || Bike Rental</Typography>


        <br />
        <br />

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            services.map(service => <Service
              key={service.name}
              service={service}
            ></Service>)
          }
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;