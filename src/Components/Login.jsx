import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleLogin = () => {
    if (Object.keys(formData).length === 2) {
      localStorage.setItem("token", "token12345");
      navigate("/");
    }
  };

  let token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // if (token) {
  //   return <button onClick={() => handleTokenChange("")}>Logout</button>;
  // }
  return (
    <div>
      <h3>Login</h3>
      <label>Username</label>
      <input
        type="text"
        name="email"
        placeholder="Enter username"
        onChange={handleChange}
      />
      <br />
      <label>Password</label>
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        onChange={handleChange}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
