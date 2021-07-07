import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import ShippingScreen from "./Screens/ShippingScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import OrderScreen from "./Screens/OrderSCreen";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" component={HomeScreen} exact />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
