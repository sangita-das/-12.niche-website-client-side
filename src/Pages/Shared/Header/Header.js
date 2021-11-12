import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const { user, logout } = useAuth()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ROAD PEDAL
          </Typography>
          <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Home</Button></Link>
          <Link to="/reviews" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Reviews</Button></Link>



          <Box>
            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/products">
              <Button color="inherit">Products</Button>
            </NavLink>

          </Box>

          {
            user?.email ?
              <Box>
                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                  <Button color="inherit">Dashboard</Button>
                </NavLink>
                <Button onClick={logout} color="inherit">Logout</Button>
              </Box>
              :
              <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                <Button color="inherit">Login </Button>
              </NavLink>
          }




        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;