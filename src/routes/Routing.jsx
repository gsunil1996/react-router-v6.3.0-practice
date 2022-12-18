import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import NewProduct from "../Components/NewProduct";
import NotFound from "../Components/NotFound";
import PrivatePage from "../Components/PrivatePage";
import PrivatePage2 from "../Components/PrivatePage2";
import ProductDetails from "../Components/ProductDetails";
import Products from "../Components/Products";
import UserDetails from "../Components/UserDetails";
import Users from "../Components/Users";
import PrivateRoutes from "./PrivateRoutes";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* product routes */}
        {/* <Route path="/products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="products/new" element={<NewProduct />} />
        <Route path="products/:id/users" element={<Users />} />
        <Route path="products/:id/users/:id" element={<UserDetails />} /> */}

        {/* nested routes, above product routes can also be written like this */}
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductDetails />} />
          <Route path="new" element={<NewProduct />} />
          <Route path=":id/users" element={<Users />} />
          <Route path=":id/users/:id" element={<UserDetails />} />
        </Route>
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/PrivatePage" element={<PrivatePage />} />
          <Route path="/PrivatePage2" element={<PrivatePage2 />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Routing;
