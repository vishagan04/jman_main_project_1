import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  localStorage.setItem("Email", "vishagan@gmail.com")
  localStorage.setItem("password", "1234567")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const notify = (message) => toast(message);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      notify("Please fill in all fields.");
    } else {
       
        if(email === localStorage.getItem("Email") && password === localStorage.getItem("password")){
          notify("Login Successful");
          setTimeout(() => {
            //Cookies.set("userEmail", email, { expires: 1 }); // Optionally, set expiration
            navigate("/Home"); 
        }, 2000);
        }
        else{
          toast.error("Invalid");
        }
        
      
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="container">
        <div className="row min-vh-100 d-flex justify-content-center align-items-center">
          <div className="col-lg-6 border">
            <div className="login-container p-3">
              <h2 className="text-center mb-4">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control col-md-12"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
