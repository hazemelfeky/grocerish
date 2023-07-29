import axios from "axios";

const url =
  "https://corsproxy.io/?" +
  encodeURIComponent("https://www.fruityvice.com/api");

export default axios.create({
  baseURL: url,
});
