import { useContext, useEffect } from "react";
import request from "../../../../lib/api";
const Subscribe = () => {
  useEffect(async () => {
    try {
      const token = window.sessionStorage.getItem("ytc-access-token");
      console.log("toooken", token);
      const { data } = await request.get("/subscriptions", {
        params: {
          part: "snippet,contentDetails",
          mine: true,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("data", data);
    } catch (e) {
      console.log(e);
    }
  }, []);
  return <div>Subscribe</div>;
};

export default Subscribe;
