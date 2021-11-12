import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Orders = () => {
  const [buyerOrders, setBuyerOrders] = useState([])
  console.log(buyerOrders);
  useEffect(() => {
    fetch('https://peaceful-beach-69061.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setBuyerOrders(data))

  }, []);

  // delete user
  const handleDelete = id => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if (proceed) {
      const url = `https://peaceful-beach-69061.herokuapp.com/products/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount) {
            const remaining = buyerOrders.filter(buyerOrder => buyerOrder._id !== id);
            alert('deleted successfully')
            setBuyerOrders(remaining);
          }

        });
    }
  }



  return (
    <div>
      <h2>This is order list page , all orders are showing.</h2>

      <Container>
        <h2>Total Order: {buyerOrders.length}</h2>
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
              {buyerOrders.map((buyerOrders) => (
                <TableRow
                  id={buyerOrders._id}>

                  <TableCell align="right">{buyerOrders?.buyerName}</TableCell>
                  <TableCell align="right">{buyerOrders?.email}</TableCell>
                  <TableCell align="right">{buyerOrders?.phone}</TableCell>


                  <Button sx={{ m: 2, bgcolor: "green" }} align="right" variant="contained">Approved</Button>

                  <Button sx={{ bgcolor: "red" }} onClick={() => handleDelete(buyerOrders._id)} align="right" variant="contained">CANCEL</Button>

                </TableRow>
              ))}
            </TableBody>


          </Table>
        </TableContainer>
      </Container>





    </div>
  );
};

export default Orders;