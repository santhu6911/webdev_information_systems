import axios from "axios";

const axiosInstance = axios.create({
  baseURL:"http://localhost:3000/api",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("axios reponse", response);

    return response;
  },
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;
