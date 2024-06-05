import React from "react";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import Landing from "./Pages1/Landing/Landing";
import Auth from "./Pages1/Auth/Auth";
import Payment from "./Pages1/Payment/Payment";
import Orders from "./Pages1/Orders/Orders";
import Cart from "./Pages1/Cart/Cart";
import Results from "./Pages1/Results/Results";
import ProductDetail from "./Pages1/ProductDetail/ProductDetail";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtactedRoute from "./Commponent/PrrotectedRoute/ProtactedRoute";
const stripePromise = loadStripe("pk_test_51PNFfQETTmOgeRgbDpqlF1HFuRns3APSsANJKnUJeNuaqaWw0wjMtL5Hx4OHpdOETNKzvb8iDqXhJw6KLnTZf4ry007Z3uEyKb");


function Routing() {
  return (
    <Router>
      <Routes>
      
      <Route path="/" element={<Landing/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/payments" element={
    <ProtactedRoute msg={"you must log in to pay"}
    redirect={"/payments"} >

<Elements stripe={stripePromise}>

<Payment />

</Elements>


    </ProtactedRoute>
 } />
        <Route path="/orders" element={
       <ProtactedRoute ProtactedRoute
        msg={"you must log in to access your order"}
       redirect={"/payments"}>
         <Orders />
        </ProtactedRoute>
       } />
        <Route path="/catagory/:CategoryName" element={<Results/>}/>
       <Route path="/products/:Productid" element={<ProductDetail/>}/>
        <Route path="/cart" element={<Cart/>}/>
        
 
      </Routes>
    </Router>
  );
}

export default Routing;
