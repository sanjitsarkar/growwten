import { useContext, useEffect, useState } from "react";
import { ADMIN, CLIENT, USER } from "../lib/const";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithCustomToken,
  signInWithCredential,
} from "firebase/auth";
import { auth, db } from "../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/dist/client/router";
import _Loader from "./Loader";
import { UtilityContext } from "../lib/store/UtiltyStore";
import { useAlert } from "react-alert";
const LoginModal = () => {
  const alert = useAlert();

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
  } = useContext(UtilityContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const _referralCode = router.query.referralCode;

  useEffect(() => {
    if (_referralCode === undefined) {
      setReferralCode("");
      // return;
    } else {
      setReferralCode(_referralCode);
    }
  }, [_referralCode]);
  const loginWihGoogle = async () => {
    setLoading(true);
    if (loginAs === ADMIN) {
      setLoading(false);
      alert.info("Login as admin is not available right now :(");
      return;
    }
    if (referralCode !== "") {
      const isValidReferralCode = await getDoc(doc(db, "users", referralCode));
      if (!isValidReferralCode.exists()) {
        setLoading(false);
        alert.error("Invalid ReferralCode");
        return;
      } else {
        console.log("teamNo", isValidReferralCode.data().teamNo);
        setReferrerTeamNo(isValidReferralCode.data().teamNo);
        if (isValidReferralCode.data().teamCount >= 10) {
          setLoading(false);
          alert.error("Team is already full");
          return;
        }
      }
    }
    // console.log("helllo");
    const provider = new GoogleAuthProvider();
    if (loginAs === USER)
      provider.addScope("https://www.googleapis.com/auth/youtube.readonly");
    // signInWithCredential()
    signInWithPopup(auth, provider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);

        const accessToken = credential.accessToken;
        const refreshToken = result._tokenResponse.refreshToken;
        const user = result.user;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        
        // sessionStorage.setItem("isLoggedIn", true);
        localStorage.setItem("cred", JSON.stringify(credential));
        localStorage.setItem("result", JSON.stringify(result));
        localStorage.setItem("user", JSON.stringify(user));
        setLoading(false);
        setShowLoginModal(false);
        // console.log(user);

        // ...
      })
      .catch((error) => {
        setLoading(false);

        setShowLoginModal(false);

        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  // const loginWihFacebook = async () => {};
  // useEffect(() => {}, [loginAs]);
  useEffect(() => {
    window.localStorage.setItem("type", loginAs);
  }, []);
  const handleLoginTypeClick = (type) => {
    window.localStorage.setItem("type", type);
    setLoginAs(type);
  };

  return (
    <div className="container modal fixed md:top-1/2 top-1/2 left-1/2 bg-white w-11/12 md:w-auto z-50 transform -translate-y-1/2 -translate-x-1/2 rounded-md  md:p-7 p-6  shadow-2xl border-textDark ">
      <h1 className="text-center font-medium text-xl">Login as</h1>
      <svg
        onClick={() => setShowLoginModal(false)}
        className={`cursor-pointer absolute top-2.5 right-2.5`}
        fill="#F25724"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 512 512"
        width="24px"
        height="24px"
      >
        <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
      </svg>
      <div className="grid md:flex justify-evenly mt-5 gap-3 md:gap-2\4">
        <button
          onClick={() => handleLoginTypeClick(USER)}
          className={`${
            loginAs === USER
              ? "text-white bg-primary"
              : "text-darkBlue bg-white border-2 border-textDark"
          } py-1.5 px-16 rounded-md`}
        >
          User
        </button>
        <button
          onClick={() => handleLoginTypeClick(CLIENT)}
          className={`${
            loginAs === CLIENT
              ? "text-white bg-secondary"
              : "text-darkBlue bg-white border-2 border-textDark"
          } py-1.5 px-16 rounded-md`}
        >
          Client
        </button>
      </div>
      {loginAs === USER && _referralCode !== undefined && (
        <div className="flex justify-center md:inline mt-6 md:mt-0 md:mx-0">
          <input
            className="bg-primary bg-opacity-20 px-3 py-1.5 mt-3 rounded-md placeholder-gray-500 outline-none w-11/12"
            type="text"
            placeholder="Enter Referral Code"
            value={referralCode}
            onChange={(e) => {
              setReferralCode(e.target.value);
            }}
          />
        </div>
      )}
      <div className="gap-5 justify-center mt-7 grid md:flex">
        {loading ? (
          <_Loader />
        ) : (
          <button
            onClick={() => loginWihGoogle()}
            className=" py-2 md:px-6  px-4 shadow-md bg-white flex gap-2 justify-between items-center"
          >
            <span>Login with Google</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 256 262"
            >
              <path
                fill="#4285F4"
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              />
              <path
                fill="#34A853"
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              />
              <path
                fill="#FBBC05"
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
              />
              <path
                fill="#EB4335"
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              />
            </svg>
          </button>
        )}
        {/* <button className="py-2 md:px-6  px-3  shadow-md bg-white flex gap-2 justify-between items-center">
          <span>Login with Facebook</span>
          <svg
            width="25"
            height="25"
            data-name="Ebene 1"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="#1877f2"
              d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
            />
            <path
              fill="#fff"
              d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
            />
          </svg>
        </button> */}
      </div>
    </div>
  );
};

export default LoginModal;
