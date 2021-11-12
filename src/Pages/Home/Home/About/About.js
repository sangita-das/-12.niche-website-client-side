import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import about from '../../../../images/about.jpg'

const About = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={2}>

          <Grid item sx={{ mt: 8 }} xs={12} md={6}>

            <Typography variant="h2" gutterBottom>
              About Us
            </Typography>
            <Typography variant="h6" gutterBottom>
              “ To ensure riders have fun on bikes. ”
            </Typography>


            <Typography variant="body1" gutterBottom>
              The History:
              The Road-Pedal was opened in August 2009.There we have shops selling bikes, but with every visit to the local bike store, we realised how discouraging an interaction could be. In time, our frustration became the motivation to open a bike shop which will be honest to customer and their needs, give professional support and service and which will encourage people to try and take up bicycling as a way of life.




            </Typography>

            <Typography variant="h6" gutterBottom>

              Support and Service : The purchase of every bicycle, you will receive 6 months of servicing free. We also have our weekly rides to help you enjoy the whole experience .Our monthly tech sessions are designed to make you more hands on.
            </Typography>



          </Grid>

          <Grid item xs={12} md={6} sx={{ mt: 12 }} >
            <img style={{ width: '100%', }} src={about} alt="" />
          </Grid>

        </Grid>
      </Container>
    </div>
  );
};

export default About;