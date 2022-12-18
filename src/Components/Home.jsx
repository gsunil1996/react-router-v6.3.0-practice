import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      This is home Page
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <ul>
        <li>
          <Link to="/products">Products Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
