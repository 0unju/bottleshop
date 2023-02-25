import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Categories from "./components/Categories";
import Wine from "./components/Wine";
import Cheeses from "./components/Cheeses";
import AdminProducts from "./components/Admin/Admin_products";
import AdminUsers from "./components/Admin/Admin_users";
import AdminOrders from "./components/Admin/Admin_orders";
import AdminCategories from "./components/Admin/Admin_categories";
import SignUpConsent from "./components/SignUp/SignUp_consent";
import SignUpInformation from "./components/SignUp/SignUp_information";

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
              path="/SignUp/consent"
              element={<SignUpConsent />}
            ></Route>
            <Route
              exact
              path="/SignUp/information"
              element={<SignUpInformation />}
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
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}
