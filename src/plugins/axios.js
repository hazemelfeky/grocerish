import axios from "axios";

export default axios.create({
  baseURL: "https://simple-grocery-store-api.glitch.me",
  // headers: {
  //   "X-RapidAPI-Key": "f0a9e226c4msh2d846448469fe15p125987jsndd68392427d2",
  //   "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  // },
});
