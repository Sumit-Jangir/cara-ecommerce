import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { clearToken, setToken } from "../../Redux/Slice/CartSlice";
import useGetUserId from "../../CustomHooks/useGetUserId";
import { getUser } from "../../Redux/Slice/GetUserSlice";

const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.cart.token);
  const { userId } = useGetUserId();

  // Fetch user info when userId is available or token changes
  useEffect(() => {
    if (userId) {
      dispatch(getUser(userId));
    }
  }, [dispatch, userId]);

  const userInfo = useSelector((state) => state.userInfo);
  const [theme, setTheme] = useState("lightMode");
  const [isNavbarActive, setIsNavbarActive] = useState(false);
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
    setIsLogin(null);
  };

  // Set login state when token changes
  useEffect(() => {
    setIsLogin(token);
  }, [token]);

  return (
    <section id="header">
      <Link to={"/"}>
        <img src={logo} alt="Logo" />
      </Link>

      <div>
        <ul id="navbar" className={isNavbarActive ? "active" : ""}>
          <li>
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

          {/* Show Dashboard link if the user is a seller */}
          {userInfo?.user?.role === "seller" && (
            <li>
              <Link
                onClick={handleNavbarClose}
                className={`${
                  location.pathname === "/sellerDashBoard" ? "active" : ""
                } nav-link`}
                to={"/sellerDashBoard"}
              >
                DashBoard
              </Link>
            </li>
          )}

          {/* Cart and Logout */}
          <li className="lg-bag">
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

          {/* Theme switch and logout */}
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

          {/* Login/Logout */}
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
    </section>
  );
};

export default Header;
