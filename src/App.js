import React, { useState, useEffect } from "react";
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header/header";
import SmallHeader from "./components/SmallHeader/SmallHeader";
import Footer from "./components/Footer/Footer";
import Admin from "./components/Admin/Home/Home";
import Store from "./components/Store/Store";
import AddProduct from "./components/Admin/AddProduct/AddProduct";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap";
import Product from "./components/Product/Product";
import SignIn from "./components/Admin/SignIn/SignIn";
import firebase from "./firebase";
import BeatLoader from "react-spinners/BeatLoader";
import AdminHeader from "./components/Admin/AdminHeader/AdminHeader";
import AllProducts from "./components/Admin/AllProducts/AllProducts";

function App() {
  const [User, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
      setIsLoading(false);
    } else {
      setUser(null);
      setIsLoading(false);
    }
  });
  return (
    <div>
      {isLoading && (
        <div className="loader">
          <BeatLoader color={"#19456b"} size={20} margin={10} />
        </div>
      )}
      <Router>
        <Switch>
          {/* ==================== Admin Routes ========================= */}
          <Route path="/admin">
            {User ? (
              <div>
                <AdminHeader />
                <Route path="/admin/add-product/:collection">
                  <AddProduct />
                </Route>
                <Route path="/admin/add-product">
                  <AddProduct />
                </Route>
                <Route path="/admin/all-products/:collection">
                  <AllProducts />
                </Route>
                <Route path="/admin/all-products/">
                  <AllProducts />
                </Route>
                <Route exact path="/admin">
                  <Admin />
                </Route>
              </div>
            ) : (
              <SignIn />
            )}
          </Route>
          {/* ============================ HomePage Routes ========================= */}
          <Route path="/">
            <SmallHeader />
            <Header />
            <Route path="/product/:id">
              <Product />
            </Route>
            <Route path="/store">
              <Store />
            </Route>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
