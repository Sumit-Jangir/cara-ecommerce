import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function SignUp() {
  
  // const [localData, setLocalData] = useState([]);
  const [storeData, setStoreData] = useState([]);
  
  const [userDetail, setUserDetail] = useState({
    username: "",
    email: "",
    password: "",
    conformPassword: "",
  });

  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );


  const userData = (e) => {
    e.preventDefault();

    const updatedUsers = [...localData, userDetail];

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setLocalData(updatedUsers);

    const storedUsers = JSON.parse(localStorage.getItem("users"));

    console.log(storedUsers);
  };

  const getInputData = ((e)=>{
    const {name, value} = e.target;
    setUserDetail({...userDetail,[name]:value})
  })

  return (
    <div className="login">
      <div className="auth-container">
        <h2 style={{ textAlign: "center" }}>Sign Up</h2>
        <form onSubmit={userData}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            required
            onChange={getInputData}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            onChange={getInputData}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            onChange={getInputData}
          />
          <input
            type="password"
            placeholder="Conform Password"
            name="conformPassword"
            required
            onChange={getInputData}
          />
          <button type="submit" >
            Sign Up
          </button>
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
