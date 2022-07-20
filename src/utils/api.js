const BASE_URL = "http://localhost:5050/";

const API = {
  SIGN_UP() {
    return BASE_URL + "users";
  },
  LOGIN() {
    return BASE_URL + "users/login";
  },
  GET_PRODUCTS_IN_CATEGORY(categoryId = "") {
    return BASE_URL + "products/categories/" + categoryId;
  },
};

export default API;
