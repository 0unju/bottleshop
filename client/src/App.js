import { React, useState } from "react";
import "./App.css";
import Layout from "./components/Categories/Layout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AdminProducts from "./components/Admin/Admin_products";
import AdminUsers from "./components/Admin/Admin_users";
import AdminOrders from "./components/Admin/Admin_orders";
import AdminCategories from "./components/Admin/Admin_categories";
import SignupConsent from "./components/SignUp/SignUp_consent";
import SignupInformation from "./components/SignUp/SignUp_information";

import Categories from "./components/Categories/Categories";
import Wine from "./components/Categories/Wine";
import Cheeses from "./components//Categories/Cheeses";
import Cart from "./components/Order/Cart";
import Order from "./components/Order/Order";
import Complete from "./components/Order/Complete";
import Login from "./components/Login/Login";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={<Navigate replace to="/categories" />}
            ></Route>
            <Route exact path="/categories" element={<Categories />}></Route>
            <Route exact path="/categories/wine" element={<Wine />}></Route>
            <Route
              exact
              path="/categories/cheeses"
              element={<Cheeses />}
            ></Route>
            <Route
              exact
              path="/signup/consent"
              element={<SignupConsent />}
            ></Route>
            <Route
              exact
              path="/signup/information"
              element={<SignupInformation />}
            ></Route>
            <Route exact path="/Admin/users" element={<AdminUsers />}></Route>
            <Route exact path="/admin/orders" element={<AdminOrders />}></Route>
            <Route
              exact
              path="/admin/categories"
              element={<AdminCategories />}
            ></Route>
            <Route
              exact
              path="/admin/products"
              element={<AdminProducts />}
            ></Route>
            <Route exact path="/order/cart" element={<Cart />}></Route>
            <Route exact path="/order/order" element={<Order />}></Route>
            <Route exact path="/order/complete" element={<Complete />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}
