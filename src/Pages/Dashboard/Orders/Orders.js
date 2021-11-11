import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material';
import { bgcolor, Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Orders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([])


  useEffect(() => {
    const url = `http://localhost:5000/products?email=${user.email}`
    fetch(url)
      .then(res => res.json())
      .then(data => setOrders(data));
  }, [])


  return (
    <div>
      <h2>Total Order: {orders.length}</h2>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="Order List">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Item No</TableCell>
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

                <Button sx={{ m: 2, bgcolor: "green" }} align="right" variant="contained">Contained</Button>

                <Button sx={{ bgcolor: "red" }} align="right" variant="contained">DELETE</Button>

              </TableRow>
            ))}
          </TableBody>


        </Table>
      </TableContainer>
    </div>
  );
};

export default Orders;