import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';

const AllProducts = () => {


  const [adminOrders, setAdminOrders] = useState([])
  console.log(adminOrders);
  useEffect(() => {
    fetch('https://peaceful-beach-69061.herokuapp.com/items')
      .then(res => res.json())
      .then(data => setAdminOrders(data))

  }, []);



  // delete user
  const handleDelete = id => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if (proceed) {
      const url = `https:/peaceful-beach-69061.herokuapp.com/items/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount) {
            const remaining = adminOrders.filter(adminOrder => adminOrder._id !== id);
            alert('deleted successfully')
            setAdminOrders(remaining);
          }

        });
    }
  }



  return (
    <div>
      <h2>All Products</h2>

      <Container>
        <h2>Total Order: {adminOrders.length}</h2>
        <TableContainer component={Paper}>
          <Table sx={{}} aria-label="Order List">
            <TableHead>
              <TableRow>
                <TableCell>image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell >Category</TableCell>
                <TableCell >Price</TableCell>



              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrders.map((adminOrders) => (
                <TableRow
                  id={adminOrders._id}>


                  <TableCell ><img width="100" src={adminOrders?.img} alt="" /></TableCell>
                  <TableCell >{adminOrders?.name}</TableCell>
                  <TableCell >{adminOrders?.category}</TableCell>
                  <TableCell >{adminOrders?.BDT}</TableCell>


                  <Button sx={{ bgcolor: "red" }} onClick={() => handleDelete(adminOrders._id)} align="right" variant="contained">DELETE</Button>

                </TableRow>
              ))}
            </TableBody>


          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default AllProducts;