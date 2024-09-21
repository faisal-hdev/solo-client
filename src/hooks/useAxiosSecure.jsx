import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  // Axios Interceptor
  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    async (error) => {
      console.log("Error from axios interceptors", error.response);
      if (error.response.status === 401 || error.response.status === 301) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  // Request interceptors
  // axios.interceptors.request;

  return axiosSecure;
};

export default useAxiosSecure;
