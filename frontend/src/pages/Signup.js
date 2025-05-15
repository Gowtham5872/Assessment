import React, { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    username: "", email: "", password: "", firstName: "", lastName: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/signup", form);
      alert("Signup successful! Please login.");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Signup</h2>
      <form className="card p-4 shadow-sm" onSubmit={handleSubmit}>
        <input className="form-control mb-3" name="username" placeholder="Username" onChange={handleChange} required />
        <input className="form-control mb-3" name="email" placeholder="Email" type="email" onChange={handleChange} required />
        <input className="form-control mb-3" name="password" placeholder="Password" type="password" onChange={handleChange} required />
        <input className="form-control mb-3" name="firstName" placeholder="First Name" onChange={handleChange} />
        <input className="form-control mb-3" name="lastName" placeholder="Last Name" onChange={handleChange} />
        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
};

export default Signup;
