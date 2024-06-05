import axios from "axios";

const axiosConfig = axios.create();

axiosConfig.defaults.baseURL = "http://localhost:3001";

export default axiosConfig;
