import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function Login() {
  return (
    <div className="login">
    <div className="auth-container">
      <h2 style={{textAlign:"center"}}>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?
         <Link to="/signup">Sign Up</Link>
      </p>
    </div>
    </div>
  );
}

export default Login;
