import React from "react";
import { Switch, Route } from "react-router-dom";
import { isDesktop} from 'react-device-detect';
//Custom import
import Header from "./components/header/Header";

import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import MyAccountsPage from "./pages/MyAccountsPage";
import OrdersPage from "./pages/OrdersPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderFailedPage from "./pages/OrderFailedPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import monitorImg from './assets/monitors-laptop.png';

//css
import "./App.css";
import TestPage from "./pages/TestPage";
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import AdminDashboard from "./pages/AdminDashboard";
import AdminCreate from "./pages/AdminCreate";


function App() { 
  return (
    <div className="app">
      {isDesktop ? (
        <>
          <Switch>
            <Route exact path="/">
              <Header />
              <HomePage />
            </Route>
            <Route exact path="/admin/dashboard">
              <AdminDashboard />
            </Route>
            <Route exact path="/admin/create-product">
              <AdminCreate />
            </Route>
            <Route exact path="/admin/login">
              <Header />
              <AdminLogin />
            </Route>
            <Route exact path="/admin/register">
              <Header />
              <AdminRegister />
            </Route>
            <Route exact path="/login">
              <Header />
              <AuthPage />
            </Route>
            <Route exact path="/cart">
              <Header />
              <CartPage />
            </Route>
            <Route exact path="/account">
              <Header />
              <MyAccountsPage />
            </Route>
            <Route exact path="/wishlist">
              <Header />
              <MyAccountsPage />
            </Route>
            <Route exact path="/account/addresses">
              <Header />
              <MyAccountsPage />
            </Route>
            <Route exact path="/orders">
              <Header />
              <OrdersPage />
            </Route>
            <Route exact path="/checkout">
              <Header />
              <CheckoutPage />
            </Route>
            <Route exact path="/product/:id">
              <Header />
              <ProductPage />
            </Route>
            <Route exact path="/order-failed">
              <Header />
              <OrderFailedPage />
            </Route>
            <Route exact path="/order-success">
              <Header />
              <OrderSuccessPage />
            </Route>
            <Route component={ErrorPage} />
          </Switch>
        </>
      ) : (
        <div className="container">
          <img className="img" src={monitorImg} alt="Mobile Laptop" />
          <div className="text-container">
            <h2 className="heading">Please use Laptop or desktop</h2>
            <p className="para">
              We don't support small screen yet. Please use laptop or desktop
              for the best experience.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
