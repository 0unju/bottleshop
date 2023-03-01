import { React, useState } from "react";
import "./App.css";
import Layout from "./components/Categories/Layout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AdminProducts from "./components/Admin/AdminProducts";
import AdminUsers from "./components/Admin/AdminUsers";
import AdminOrders from "./components/Admin/AdminOrders";
import AdminCategories from "./components/Admin/AdminCategories";
import SignupConsent from "./components/SignUp/SignUpConsent";
import SignupInformation from "./components/SignUp/SignUpInformation";
import SignUpComplete from "./components/SignUp/SignUpComplete";
import Login from "./components/Login/Login";
import MypageOrder from "./components/Mypage/MypageOrder";
import MypageInformation from "./components/Mypage/MypageInformation";
import MypageLeave from "./components/Mypage/MypageLeave";

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
            <Route exact path="/login" element={<Login />}></Route>
            <Route
              exact
              path="/signup/complete"
              element={<SignUpComplete />}
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
            <Route exact path="/mypage/order" element={<MypageOrder />}></Route>
            <Route
              exact
              path="/mypage/information"
              element={<MypageInformation />}
            ></Route>
            <Route exact path="/mypage/leave" element={<MypageLeave />}></Route>
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
