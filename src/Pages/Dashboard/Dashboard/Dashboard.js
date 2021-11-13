import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import MyOrders from '../MyOrders/MyOrders';
import useAuth from '../../../hooks/useAuth';
import ManageOrder from '../ManageOrder/ManageOrder';


const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { user, logout } = useAuth()
  let { path, url } = useRouteMatch();

  const { admin } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />




      <Button onClick={logout} color="inherit" variant="contained">Logout</Button>
      <br />
      <br />
      <Link to="/products" style={{ textDecoration: 'none' }}><Button color="inherit">Products</Button></Link>
      <br />
      <Link to="/pay" style={{ textDecoration: 'none' }}><Button color="inherit">Pay</Button></Link>
      <br />
      <Link to="/reviewBox" style={{ textDecoration: 'none' }}><Button color="inherit">Customer Review Section</Button></Link>
      <br />

      <Link to="/myOrders" style={{ textDecoration: 'none' }}><Button color="inherit">My Orders</Button></Link>
      <br />

      <Link to="/orders" style={{ textDecoration: 'none' }}><Button color="inherit">All User Orders</Button></Link>
      <br />
      <br />

      <Divider />
      <Divider />

      {
        admin && <Box>

          <Link to="/addItems" style={{ textDecoration: 'none' }}><Button color="inherit">Add Items</Button></Link>
          <br />



          <Link to="/allProducts" style={{ textDecoration: 'none' }}><Button color="inherit">All Products</Button></Link>
          <br />


          <Link to="/makeAdmin" style={{ textDecoration: 'none' }}><Button color="inherit">Make Admin</Button></Link>

        </Box>
      }

      <Link to="/" style={{ textDecoration: 'none' }} >
        <Button type="submit" variant="outlined">Home</Button>
      </Link>


      <List>
        {['Inbox', 'Send email'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
          {/* <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route> */}
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </AdminRoute>
          <AdminRoute path={`${path}/manageOrder`}>
            <ManageOrder></ManageOrder>
          </AdminRoute>
        </Switch>

        <Typography paragraph>

        </Typography>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;