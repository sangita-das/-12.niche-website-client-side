import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([])


  useEffect(() => {
    const url = `https://peaceful-beach-69061.herokuapp.com/products?email=${user.email}`
    fetch(url)
      .then(res => res.json())
      .then(data => setOrders(data));
  }, [])


  return (
    <Container>
      <h2>Total Order: {orders.length}</h2>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="Order List">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.buyerName}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.product_item}</TableCell>

                {/* <Button sx={{ m: 2, bgcolor: "green" }} align="right" variant="contained">Contained</Button>

                <Button sx={{ bgcolor: "red" }} align="right" variant="contained">DELETE</Button> */}

              </TableRow>
            ))}
          </TableBody>


        </Table>
      </TableContainer>
    </Container>
  );
};

export default MyOrders;