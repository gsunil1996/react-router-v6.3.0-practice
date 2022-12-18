import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
      <div>
        <ul>
          {[1, 2, 3, 4].map((e) => (
            <li key={e}>
              <Link to={`/products/${e}`}> Product {e} </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;
