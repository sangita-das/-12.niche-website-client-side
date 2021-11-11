import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box>
      <h1>404</h1>
      <h1>!!</h1>
      <h3>Opps!! sorry, Page Not Found.</h3>

      <p>Well, This is awkward. The site you're looking for is not here.</p>
      <Link to="/" >
        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Go Back</Button>
      </Link>
    </Box>
  );
};

export default NotFound;