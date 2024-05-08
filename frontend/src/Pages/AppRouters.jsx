import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./MainPages/Footer";
import HomePage from "./MainPages/HomePage";
import LoginPage from "./MainPages/LoginPage";
import Nav from "./Nav";
import ContactPage from "./MainPages/ContactPage";
import StorePage from "./MainPages/StorePage";
import { CartProvider } from "react-use-cart";
import { useState, useEffect, CSSProperties } from "react";
import Login from "./MainPages/authenticationFiles/Login";
import * as reactToastify from "react-toastify";
import PuffLoader from "react-spinners/PuffLoader";
const AppRouters = () => {
  const [user, setUser] = useState({
    username: "Ilaha",
    password: "12345",
  });


  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const [mode, setMode] = useState("dark");
  useEffect(() => {
    document.body.className = mode;
  }, [mode]);
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    marginTop: "200px"
  };
  return (
    <>
      {loading ?
        <PuffLoader
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader" color="#181578" /> :
        <BrowserRouter>
          <reactToastify.ToastContainer pauseOnHover={false} autoClose={1000} />
          <CartProvider>
            <Nav />
            <Routes>
              <Route path="/" element={<HomePage />} ></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/contact" element={<ContactPage />}></Route>
              <Route path="/store" element={<StorePage />}></Route>
              <Route path="/admin" element={<Login />}></Route>
            </Routes>
          </CartProvider>

          <Footer />
        </BrowserRouter>}

    </>
  )
}

export default AppRouters



