import { Fragment } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Login from "../screens/Login";
import Products from "../screens/Products";

const Private = ({ Item }) => {
  const { signed } = useAuth();
  const navigate = useNavigate();

  if (!signed) {
    navigate("/");
    return null;
  }

  return <Item />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/viewProducts" element={<Private Item={Products} />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;