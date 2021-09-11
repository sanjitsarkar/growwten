import { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import LoginModal from "../components/LoginModal";
import OurMissionSection from "../components/OurMissionSection";
import ServicesSection from "../components/ServicesSection";
import WhyUsSection from "../components/WhyUsSection";
import { LoginModalContext } from "../lib/store/LoginModalStore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../lib/firebase";
import Dashboard from "../components/dashboard";
import _Loader from "../components/Loader";
import {
  doc,
  FieldValue,
  getDoc,
  increment,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { CLIENT, USER } from "../lib/const";
import { useRouter } from "next/dist/client/router";
import ReferralCodeModal from "../components/ReferralCodeModal";
const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  const {
    showLoginModal,
    setShowLoginModal,
    loginAs,
    setLoginAs,
    showReferralCodeModal,
    setShowReferralCodeModal,
    referralCode,
    setReferralCode,
    setReferrerTeamNo,
    referrerTeamNo
  } = useContext(LoginModalContext);

  const addUserInfo = async (type, user, referralCode) => {
    console.log(user);
    let collectionName = "";
    if (type === USER) collectionName = "users";
    else if (type === CLIENT) collectionName = "clients";
    else collectionName = "admins";
    const info = await getDoc(doc(db, collectionName, user.uid));
    console.log("info", info);
    if (!info.exists()) {
      if (referralCode !== "") {
        console.log("incrementss");
        await updateDoc(doc(db, collectionName, referralCode), {
          teamCount: increment(1),
        });
        console.log("incrementee");
      }
      let userInfo;
      if(referrerTeamNo)
       userInfo = {
        type,
        referralCode,
        displayName: user.displayName,
        email: user.email,
        createdAt: serverTimestamp(),
        photoURL: user.photoURL,
        teamCount: 1,
        teamNo: referrerTeamNo+1
      };
      else
         userInfo = {
           type,
           referralCode,
           displayName: user.displayName,
           email: user.email,
           createdAt: serverTimestamp(),
           photoURL: user.photoURL,
           teamCount: 1
         };
      await setDoc(doc(db, collectionName, user.uid), userInfo);
    } else {
      if (info.data().referralCode === "") {
        setShowReferralCodeModal(true);
      }
    }
  };

  if (loading)
    return (
      <div className="h-screen w-screen grid place-items-center">
        <_Loader />
      </div>
    );
  if (user) {
    addUserInfo(loginAs, user, referralCode);
    return <Dashboard user={user} />;
  }
  return (
    <>
      {showLoginModal && <LoginModal />}
      <Header />
      <HeroSection />
      <WhyUsSection />
      <OurMissionSection />
      <ServicesSection />
      <Footer />
    </>
  );
};

export default Home;
