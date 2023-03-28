import axios from "axios";

const instance = axios.create({
  baseURL: "https://gburger-45099-default-rtdb.firebaseio.com/",
});

export default instance;
