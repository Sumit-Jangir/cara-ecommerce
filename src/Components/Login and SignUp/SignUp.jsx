import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function SignUp() {
  return (
    <div className="login">
    <div className="auth-container">
      <h2 style={{textAlign:"center"}}>Sign Up</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Conform Password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? 
        <Link to="/login">Login</Link>
      </p>
    </div>
    </div>
  );
}

export default SignUp;