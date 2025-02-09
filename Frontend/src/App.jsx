import "./App.css";
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  Outlet,
} from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Main/Home";
import Shop from "./Components/Main/Shop";
import About from "./Components/Main/About";
import Contact from "./Components/Main/Contact";
import Cart from "./Components/Main/Cart";
import S_product from "./Components/Main/S_product";
import Login from "./Components/Login_SignUp/Login";
import SignUp from "./Components/Login_SignUp/SignUp";
import BlogMain from "./Components/Main/BlogMain.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import { useEffect, useState } from "react";

function App() {
  const  [userDetails ,setUserDetails] = useState(localStorage.getItem("token"))
  
  // const token = localStorage.getItem("token");
    // setUserDetails(true)

  const useAuth = () => {
    const token = localStorage.getItem("token");
    // setUserDetails(true)
    return token;
  };
console.log(`>>>>>>>>>>>userDetails`,userDetails);

  const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
  };

  return (  
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/blog" element={<BlogMain />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/cart" element={<Cart /> }></Route>
          <Route path="sproduct/:id/" element={<S_product />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
