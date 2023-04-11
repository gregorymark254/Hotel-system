import axios from "axios";

export default axios.create({
  baseURL: "hhttps://xain-hotel-server.up.railway.app",
  headers: {
    "Content-type": "application/json"
  }
});