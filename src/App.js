import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimateSharedLayout } from "framer-motion";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
// import Calc from "./components/calc_age";
import AgeCalculator from "./components/calc_age";
import Permission from "./pages/Permission";







export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-page">
        <h1>Loading</h1>
      </div>
    );
  };

  

  return (
   <>
      <TopBar />
      <Routes>
        <Route path="/Calc" element={<AgeCalculator />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/Permission" element={<Permission/>} />
        <Route path="/ProductPage/:productId" element={<ProductPage />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  );
}



