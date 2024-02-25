import axios from "axios";

const apiData = axios.create({
  baseURL: "http://localhost:3000/dados",
});

export default apiData;
