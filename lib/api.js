import axios from "axios";
// console.log("key.....", process.env.KEY);
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyDAvdQPLoplTQvzgu_RB0rAWe8shW4rBt4",
  },
});

export default request;
