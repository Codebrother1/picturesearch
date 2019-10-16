import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 823f523fd99e08bb7810b16ffecd1b5c8aa3bfeeb571fc6c7b966194e5144f72"
  }
});
