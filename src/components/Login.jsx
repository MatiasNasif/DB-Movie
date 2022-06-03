import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/login", { email: user, password: password })
      .then((res) => {
        setUser(res.data);
      });
      navigate("/");
  };

  return (
    <div class="container">
      <div class="col-md-12 login-form pt-5">
          <h2>Log in into your TMDB account</h2>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              onChange={(e)=> setUser(e.target.value)} 
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              onChange={(e)=> setPassword(e.target.value)} 
            />
          </div>
          <button type="submit" class="btn btn-danger">
            Login
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Login;