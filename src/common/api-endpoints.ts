const API_ENDPOINTS = {
  BASE_URL: "http://localhost:4000/api",
  PUBLIC: {
    GET_ALL_MOBILE_SUITS: "/mobilesuits",
    LOGIN: "/session/login",
    LOGOUT: "/session/logout",
  },
  ADMIN: {
    GET_ALL_USERS: "/admin/users",
    GET_CURRENT_USER: "/admin/session",
  },
};

export default API_ENDPOINTS;
