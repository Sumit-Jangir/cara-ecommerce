import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { clearToken, setToken } from "../../Redux/Slice/CartSlice";

const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.cart.token);

  const [theme, setTheme] = useState("lightMode");
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  // const [isLogin, setIsLogin] = useState(localStorage.getItem("token") || null);
  const [isLogin, setIsLogin] = useState(token);
  const location = useLocation();


  const handleTheme = () => {
    theme === "lightMode" ? setTheme("darkMode") : setTheme("lightMode");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleNavbarClose = () => {
    if (window.innerWidth < 799) setIsNavbarActive(!isNavbarActive);
  };

  const handleLogout = () => {
    dispatch(clearToken());
    setIsLogin(token);
  };

  // useEffect(() => {
  //   setIsLogin(localStorage.getItem("token"));
  //   // console.log("jjjjjjj")
  // });
  useEffect(() => {
    setIsLogin(token);
    // console.log("jjjjjjj")
  });

  return (
    <>
      <section id="header">
        <Link to={"/"}>
          <img src={logo} alt="Logo" />
        </Link>

        <div>
          <ul id="navbar" className={isNavbarActive ? "active" : ""}>
            <li>
              {/* <a className="active" href="index.html">Home</a> */}
              <Link
                onClick={handleNavbarClose}
                className={`${
                  location.pathname === "/" ? "active" : ""
                } nav-link`}
                to={"/"}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                onClick={handleNavbarClose}
                className={`${
                  location.pathname === "/shop/" ? "active" : ""
                } nav-link`}
                to={"/shop/"}
              >
                Shop
              </Link>
              {/* <a href="shop.html">Shop</a> */}
            </li>
            <li>
              <Link
                onClick={handleNavbarClose}
                className={`${
                  location.pathname === "/Blog/" ? "active" : ""
                } nav-link`}
                to={"/Blog/"}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                onClick={handleNavbarClose}
                className={`${
                  location.pathname === "/about/" ? "active" : ""
                } nav-link`}
                to={"/about/"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={handleNavbarClose}
                className={`${
                  location.pathname === "/contact/" ? "active" : ""
                } nav-link`}
                to={"/contact/"}
              >
                Contact
              </Link>
            </li>
            <li className="lg-bag ">
              <Link
                onClick={handleNavbarClose}
                className={`${
                  location.pathname === "/cart/" ? "active" : ""
                } nav-link`}
                to={"/cart/"}
              >
                <i className="fa-solid fa-bag-shopping"></i>
              </Link>
            </li>
            <a
              onClick={handleNavbarClose}
              href="#"
              id="close"
              className={isNavbarActive ? "" : "active"}
            >
              <i className="fa-solid fa-xmark"></i>
            </a>
            <li>
              <Link className="nav-link theme" onClick={handleTheme}>
                {theme === "lightMode" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-moon"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-sun-moon"
                  >
                    <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.9 4.9 1.4 1.4" />
                    <path d="m17.7 17.7 1.4 1.4" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.3 17.7-1.4 1.4" />
                    <path d="m19.1 4.9-1.4 1.4" />
                  </svg>
                )}
              </Link>
            </li>

            {isLogin ? (
              <li style={{ padding: "0px" }}>
                <Link
                  className="login-btn signup-btn"
                  to={"/"}
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link className="login-btn" to={"/login/"}>
                    Login
                  </Link>
                </li>
                <li style={{ padding: "0px" }}>
                  <Link className="login-btn signup-btn" to={"/signup/"}>
                    SignUp
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {isNavbarActive && (
          <div onClick={handleNavbarClose} className="navbar-outer-div"></div>
        )}

        <div id="mobile">
          <Link className="nav-link" onClick={handleTheme}>
            {theme === "lightMode" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-moon"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sun-moon"
              >
                <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.9 4.9 1.4 1.4" />
                <path d="m17.7 17.7 1.4 1.4" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.3 17.7-1.4 1.4" />
                <path d="m19.1 4.9-1.4 1.4" />
              </svg>
            )}
          </Link>

          {/* <Link className="nav-link" to={"/cart/"}>
                <i className="fa-solid fa-bag-shopping"></i>
              </Link> */}
          <div onClick={handleNavbarClose}>
            <i id="bar" className="fas fa-outdent"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
