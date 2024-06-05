

import axios from "axios";
const axiosInstance = axios.create({
   
   // baseURL:"http://127.0.0.1:5001/clone-1257b/us-central1/api",
baseURL:"https://amazon-backend-b7xw.onrender.com"

});
export { axiosInstance };