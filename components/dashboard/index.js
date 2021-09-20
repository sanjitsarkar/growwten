import axios from "axios";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect } from "react";
import { db } from "../../lib/firebase";
import { AuthContext } from "../../lib/store/AuthStore";
import { UtilityContext } from "../../lib/store/UtiltyStore";
import UserBody from "../UserBody";
import UserHeader from "../UserHeader";
const Dashboard = ({ user }) => {
  const { userInfo } = useContext(AuthContext);
  const {
    showLoginModal,
    setShowLoginModal,
    loginAs,
    setLoginAs,
    showReferralCodeModal,
    setShowReferralCodeModal,
    setReferrerTeamNo,
    referrerTeamNo,
    referrerInfo,
    setReferrerInfo,
  } = useContext(UtilityContext);
  const getReffererInfo = async () => {
    if (userInfo.referralCode !== "") {
      const data = await getDoc(doc(db, "users", userInfo.referralCode));
      setReferrerInfo(data.data());
    }
  };
  useEffect(async () => {
    // const { data } = await axios.post(
    //   "https://securetoken.googleapis.com/v1/token?key=AIzaSyDAvdQPLoplTQvzgu_RB0rAWe8shW4rBt4",
    //   {
    //     grant_type: "refresh_token",
    //     refresh_token: localStorage.getItem("refreshToken"),
    //   }
    // );
    // console.log("result12345", data);
    // localStorage.setItem("accessToken", data.access_token);
    // const googleUser = loadClientAuth2();
    // loadAuth2()
    // var googleIdToken = googleUser.getAuthResponse().id_token;
    // const result = await signInWithCredential(
    //   GoogleAuthProvider.credential(
    //     JSON.parse(localStorage.getItem("result"))._tokenResponse.oauthIdToken
    //   )
    // );
    // console.log("Reeeesuuul", result);
  }, []);
  useEffect(() => {
    // if (referrerInfo === "") getReffererInfo();
    console.log("userInfo", userInfo);
  }, [userInfo]);
  // console.log(user);
  return (
    <>
      <UserHeader user={user} />
      <UserBody />
    </>
  );
};

export default Dashboard;
