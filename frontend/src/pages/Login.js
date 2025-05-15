import React, { useState, useContext } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", form);
      login(res.data.user, res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Login</h2>
      <form className="card p-4 shadow-sm" onSubmit={handleSubmit}>
        <input className="form-control mb-3" name="email" placeholder="Email" type="email" onChange={handleChange} required />
        <input className="form-control mb-3" name="password" placeholder="Password" type="password" onChange={handleChange} required />
        <button className="btn btn-success w-100" type="submit">Login</button>
      </form>
      <div className="text-center mt-3">
        <a href="/signup">Don't have an account? Signup</a>
      </div>
    </div>
  );
};

export default Login;
