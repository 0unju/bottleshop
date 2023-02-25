import { React, useState } from "react";
import "./App.css";
import Layout from "./components/Categories/Layout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Categories from "./components/Categories/Categories";
import Wine from "./components/Categories/Wine";
import Cheeses from "./components//Categories/Cheeses";
import Admin_products from "./components/Admin/Admin_product";
import Admin_users from "./components/Admin/Admin_user";
import Cart from "./components/Order/Cart";
import Order from "./components/Order/Order";

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
            <Route exact path="/admin/users" element={<Admin_users />}></Route>
            <Route
              exact
              path="/admin/products"
              element={<Admin_products />}
            ></Route>
            <Route exact path="/order/cart" element={<Cart />}></Route>
            <Route exact path="/order/order" element={<Order />}></Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}
