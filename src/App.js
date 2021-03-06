import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Products from './Pages/Home/Home/Products/Products';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import NotFound from './Pages/Home/NotFound/NotFound';
import ManageOrder from './Pages/Dashboard/ManageOrder/ManageOrder';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import Orders from './Pages/Dashboard/Orders/Orders';
import Pay from './Pages/Dashboard/Pay/Pay';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddItems from './Pages/Dashboard/Dashboard/AddItems/AddItems';
import ReviewBox from './Pages/Home/Home/ReviewBox/ReviewBox';
import Reviews from './Pages/Home/Home/Reviews/Reviews';
import Header from './Pages/Shared/Header/Header';
import AllProducts from './Pages/Dashboard/Dashboard/AllProducts/AllProducts';
import OrderStatus from './Pages/Dashboard/Dashboard/OrderStatus/OrderStatus';
import UpdateUser from './Pages/Dashboard/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>


            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>

            <PrivateRoute path="/myOrders">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute exact path="/orderStatus">
              <OrderStatus />
            </PrivateRoute>
            <PrivateRoute exact path="/updateUser/:id">
              <UpdateUser />
            </PrivateRoute>

            <PrivateRoute path="/pay">
              <Pay />
            </PrivateRoute>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <PrivateRoute exact path="/allProducts">
              <AllProducts />
            </PrivateRoute>
            <PrivateRoute exact path="/makeAdmin">
              <MakeAdmin />
            </PrivateRoute>
            <Route exact path="/reviews">
              <Reviews />
            </Route>
            <PrivateRoute exact path="/addItems">
              <AddItems />
            </PrivateRoute>
            <Route exact path="/reviewBox">
              <ReviewBox />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/manageOrder/:productId">
              <ManageOrder />
            </PrivateRoute>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>



            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
