import axios from "axios";

const url = "https://groceyish-strapi.onrender.com/api";
// "https://corsproxy.io/?" +
// encodeURIComponent("https://groceyish-strapi.onrender.com/api");

export default axios.create({
  baseURL: url,
});
