import { useCallback, useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import LoginModal from "../components/LoginModal";
import OurMissionSection from "../components/OurMissionSection";
import ServicesSection from "../components/ServicesSection";
import WhyUsSection from "../components/WhyUsSection";
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
import { UtilityContext } from "../lib/store/UtiltyStore";
import { AuthContext } from "../lib/store/AuthStore";
const Home = () => {
  const [done, setDone] = useState(false);
  const { user, userInfo, setUserInfo, loading } = useContext(AuthContext);
  const router = useRouter();
  const _referralCode = router.query.referralCode;
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
    referrerTeamNo,
    referrerInfo,
    setReferrerInfo,
  } = useContext(UtilityContext);

  //   const refreshToken = async() => {
  //     print("Token Refresh");
  //      const provider = new GoogleAuthProvider();
  //       provider.addScope("https://www.googleapis.com/auth/youtube.readonly");
  // auth.
  //     google(auth, provider)
  //       .then(async (result) => {
  //         // This gives you a Google Access Token. You can use it to access the Google API.
  //         const credential = GoogleAuthProvider.credentialFromResult(result);

  //         const token = credential.accessToken;
  //         const user = result.user;
  //     // const GoogleSignInAccount googleSignInAccount =
  //     //     await googleSignIn.signInSilently();
  //     // final GoogleSignInAuthentication googleSignInAuthentication =
  //     //     await googleSignInAccount.authentication;

  //     // final AuthCredential credential = GoogleAuthProvider.getCredential(
  //     //   accessToken: googleSignInAuthentication.accessToken,
  //     //   idToken: googleSignInAuthentication.idToken,
  //     // );
  //     // final AuthResult authResult = await auth.signInWithCredential(credential);

  //     // return googleSignInAuthentication.accessToken; // New refreshed token
  //   }
  useEffect(() => {
    if (_referralCode) {
      setShowLoginModal(true);
    }
  }, [_referralCode]);
  const addUserInfo = useCallback(
    async (type, user, referralCode) => {
      setDone(false);
      console.log("called1");
      let collectionName = "";
      if (type === USER) collectionName = "users";
      else if (type === CLIENT) collectionName = "clients";
      else collectionName = "admins";
      const info = await getDoc(doc(db, collectionName, user.uid));

      if (!info.exists()) {
        let userInfo;
        if (loginAs === CLIENT) {
          userInfo = {
            type,
            displayName: user.displayName,
            email: user.email,
            createdAt: serverTimestamp(),
            photoURL: user.photoURL,
            referralCode,
            tasks: 0,
          };
          await setDoc(doc(db, collectionName, user.uid), userInfo);
          return;
        }
        if (referralCode !== "") {
          const referrer = await getDoc(doc(db, collectionName, referralCode));
          setReferrerInfo({ ...referrer.data(), id: referrer.id });

          userInfo = {
            type,
            referralCode,
            isCompleted: false,
            displayName: user.displayName,
            email: user.email,
            dob: "",
            createdAt: serverTimestamp(),
            photoURL: user.photoURL,
            teamCount: 1,
            phoneNo: "",
            address: "",
            teamNo: referrer.data().teamNo + 1,
          };
        } else {
          userInfo = {
            type,
            isCompleted: false,

            address: "",
            referralCode,
            dob: "",
            phoneNo: "",
            displayName: user.displayName,
            email: user.email,
            createdAt: serverTimestamp(),
            photoURL: user.photoURL,
            teamCount: 1,
          };
        }

        await setDoc(doc(db, collectionName, user.uid), userInfo);
        if (referralCode !== "") {
          await updateDoc(doc(db, collectionName, referralCode), {
            teamCount: increment(1),
          });
        }
        setDone(true);
      }
    },
    [user]
  );

  useEffect(() => {
    // console.log(user, "user", "uinfo", userInfo);
    if (!loading && user && userInfo === "")
      addUserInfo(loginAs, user, referralCode);
  }, [user]);

  // useEffect(() => {
  //   if (!user && !userInfo) {
  //     console.log("hello");
  //   }
  //   console.log("user", user, "userInfo", userInfo);
  // }, [user, userInfo]);
  useEffect(() => {
    console.log(loading);
  }, [loading]);

  if ((!loading && user && userInfo) || done)
    return <Dashboard user={userInfo} />;
  if (!loading && !user)
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

  return (
    <div className="h-screen w-screen grid place-items-center">
      <_Loader />
    </div>
  );
};

export default Home;
