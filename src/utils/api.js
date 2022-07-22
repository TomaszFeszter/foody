const BASE_URL = "http://localhost:5050/";

const API = {
  SIGN_UP() {
    return BASE_URL + "users";
  },
  LOGIN() {
    return BASE_URL + "users/login";
  },
  LOGOUT() {
    return BASE_URL + "users/logout";
  },
  GET_USER_DATA() {
    return BASE_URL + "users/me";
  },
  GET_CATEGORIES() {
    return BASE_URL + "products/categories";
  },
  GET_PRODUCTS_IN_CATEGORY(categoryId = "") {
    return BASE_URL + "products/categories/" + categoryId;
  },
  GET_PRODUCT(productId = "") {
    return BASE_URL + "products/" + productId;
  },
  POST_CART() {
    return BASE_URL + "carts/";
  },
  GET_CART(cartId) {
    return BASE_URL + "carts/" + cartId;
  },
  PUT_PRODUCTS_TO_CART(cartId) {
    return BASE_URL + "carts/" + cartId;
  },
};

export default API;
