import React, { useContext } from "react";
import { AuthContext } from "../../context/Auth";
import AuthorizedLayout from "../../layouts/AuthorizedLayout";
import { useNavigate } from "react-router-dom";
const Category = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  if (!isLoggedIn) {
    navigate("/log-in");
  }
  return (
    <AuthorizedLayout>
      <div>Elo mordo na stronie kategorii</div>
    </AuthorizedLayout>
  );
};

export default Category;
