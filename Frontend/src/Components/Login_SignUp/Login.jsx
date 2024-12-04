import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {toast} from 'react-hot-toast'
import "../../App.css";

function Login() {
  const [storeData, setStoreData] = useState([]);

  const [userDetail, setUserDetail] = useState({});

  // const [localData, setLocalData] = useState(
  //   JSON.parse(localStorage.getItem("users")) || []
  // );

  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/auth/login',{...userDetail})

      // console.log(response)
      if(response.status === 200){
        toast.success('Login Successfully!')
        setUserDetail({})
        localStorage.setItem("token", response.data.token);
        navigate('/')
      }
    } catch (error) {
      console.log("error", error)
      console.log("response.data.message", error.response.data.message)
      toast.error( error.response.data.message || 'Please try again.')

    }

    // const updatedUsers = [...localData, userDetail];

    // localStorage.setItem("users", JSON.stringify(updatedUsers));

    // alert('login successfull');

    // setLocalData(updatedUsers);

    // const storedUsers = JSON.parse(localStorage.getItem("users"));

    // console.log(storedUsers);

    // const matchingUser = storedUsers.find(
    //   (user) => user.email === userDetail.email && user.password === userDetail.password
    // );

    // if (matchingUser) {
    //   alert("Login successful");
    //   console.log("Login successful:", matchingUser);
    // } else {
    //   alert("Invalid email or password");
    //   console.log("Login failed: No match found");
    // }
  };


  return (
    <div className="login">
      <div className="auth-container">
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            required
            onChange={(e)=>setUserDetail({
              ...userDetail,
              email:e.target.value
            })}
            />
            </label>
            <label>
              Password: 
          <input
            type="password"
            placeholder="Enter Password"
            name="Password"
            required
            onChange={(e)=>setUserDetail({
              ...userDetail,
              password:e.target.value
            })}
            />
            </label>
          <button type="submit" >
            Login
          </button>
        </form>
        <p>
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
