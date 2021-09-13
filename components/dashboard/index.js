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
