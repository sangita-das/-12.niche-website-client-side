import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';









const footer = {
  backgroundColor: 'rgba(45, 58, 74, 0.9)',
  backgroundBlendMode: 'darken, luminosity',
  marginTop: 175,

}

const Footer = () => {
  return (

    <Box style={footer} px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} color="white">

      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} >
            <Box borderBottom={1} >
              Help
            </Box>
            <Box >

              <Link href="/" variant="h6" style={{ color: 'white', textDecoration: 'none' }}>
                Contact
              </Link>
            </Box>
            <Box>
              <Link href="/" variant="h6" style={{ color: 'white', textDecoration: 'none' }}>
                Support
              </Link>
            </Box>
            <Box>
              <Link href="/" variant="h6" style={{ color: 'white', textDecoration: 'none' }} >
                Privacy
              </Link>
            </Box>

          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>
              Account
            </Box>
            <Box>
              <Link href="/" variant="h6" style={{ color: 'white', textDecoration: 'none' }} >
                Login
              </Link>
            </Box>
            <Box>
              <Link href="/" variant="h6" style={{ color: 'white', textDecoration: 'none' }}>
                Register
              </Link>
            </Box>


          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>
              Messages
            </Box>
            <Box>
              <Link href="/" variant="h6" style={{ color: 'white', textDecoration: 'none' }}>
                Backup
              </Link>
            </Box>
            <Box>
              <Link href="/" variant="h6" style={{ color: 'white', textDecoration: 'none' }}>
                History
              </Link>
            </Box>
            <Box>
              <Link href="/" variant="h6" style={{ color: 'white', textDecoration: 'none' }}>
                Roll
              </Link>
            </Box>

          </Grid>
        </Grid>
        <br />
        <Grid item xs >
          <Typography variant="h4" color="text.white" component="div">
            Join Our Newsletter
          </Typography>

          <input
            class="footer-input "
            type="text"
            placeholder="Enter Email Address"
          />
          <br />
          <input style={{}}
            class="footer-input "
            type="text"
            placeholder="Subscribe"
          />
        </Grid>



        <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
          <small> © Copyright 2021 RoadPedal | Cycle Garrage | All Rights Reserved | Terms and Conditions | Privacy Policy</small>
        </Box>
      </Container >
    </Box >
  );
};

export default Footer;