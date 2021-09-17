import { doc, getDoc, increment, updateDoc } from "firebase/firestore";
import { useRouter } from "next/dist/client/router";
import { useContext, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import _Loader from "../../components/Loader";
import UserHeader from "../../components/UserHeader";
import { db } from "../../lib/firebase";
import { AuthContext } from "../../lib/store/AuthStore";
import { UtilityContext } from "../../lib/store/UtiltyStore";
const Profile = () => {
  const alert = useAlert();
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

  const { loading, user, userInfo } = useContext(AuthContext);
  const router = useRouter();
  useEffect(async () => {
    if (userInfo.referralCode) {
      // console.log(userInfo.referralCode);
      const _data = await getDoc(doc(db, "users", userInfo.referralCode));
      setReferrerInfo(_data.data());
    }
  }, [userInfo]);
  useEffect(() => {
    if ((!loading && user === null) || userInfo === null) {
      router.push("/");
    }
  }, [userInfo, user, loading]);
  useEffect(() => {
    // console.log("referrerInfo", referrerInfo);
  }, [referrerInfo]);
  const [loading1, setLoading1] = useState(false);
  // console.log(user);
  const [referralCode, setReferralCode] = useState(userInfo.referralCode);

  const addReferralCode = async () => {
    // console.log("refe", referralCode);
    if (referralCode !== "") {
      // console.log("referralCode3", referralCode);
      setLoading1(true);
      const data = await getDoc(doc(db, "users", referralCode));
      // console.log("data", data.data());
      if (data.exists()) {
        await updateDoc(doc(db, "users", user.uid), {
          referralCode,
          teamNo: data.data().teamNo + 1,
        });
        await updateDoc(doc(db, "users", referralCode), {
          teamCount: increment(1),
        });

        const _data = await getDoc(doc(db, "users", referralCode));
        setReferrerInfo(_data.data());
        alert.show("Referral code added successfully");
        setLoading1(false);
      } else {
        setLoading1(false);
        alert.error("Invalid referral code");
      }
    }
  };

  if (user && userInfo)
    return (
      <>
        <UserHeader user={userInfo} />4
        <div className="flex mt-36 m-7 gap-4 justify-center w-max md:w-auto md:mx-auto">
          <div className=" relative   rounded-sm shadow-2xl   p-7 ">
            {/* <img
          className=" absolute -top-10 left-1/2 transform -translate-x-1/2 "
          src={user.photoURL}
          alt=""
        /> */}
            <div className="md:flex grid gap-4  py-2 items-center">
              <h1 className="text-textDark">Profile name</h1>
              <h3 className="text-gray-600 text-sm">{userInfo.displayName}</h3>
            </div>
            <div className="md:flex grid gap-4  py-2 items-center">
              <h1 className="text-textDark">Email</h1>
              <h3 className="text-gray-600 text-sm">{userInfo.email}</h3>
            </div>
           {
             userInfo.type==="USER" &&
             <>
            {userInfo.referralCode === "" ? (
              <div className="md:flex grid gap-4  py-2 items-center">
                <input
                  className="w-full bg-secondary bg-opacity-10 px-3 py-1.5  rounded-md placeholder-gray-500 outline-none"
                  type="text"
                  placeholder="Enter Referral Code"
                  value={referralCode}
                  onChange={(e) => {
                    setReferralCode(e.target.value);
                  }}
                />
                {loading1 ? (
                  <_Loader />
                ) : (
                  <button
                    onClick={() => addReferralCode()}
                    className="text-white bg-secondary
                 border-2 
             py-1.5 px-7 rounded-md"
                  >
                    Add
                  </button>
                )}
              </div>
            ) : (
              <>
                <div className="md:flex grid gap-4  py-2 items-center">
                  <input
                    readOnly
                    disabled
                    className="w-full bg-secondary bg-opacity-10 px-3 py-1.5  rounded-md placeholder-gray-500 outline-none bre"
                    type="text"
                    placeholder="Enter Referral Code"
                    value={userInfo.referralCode}
                  />
                </div>

                <div className="md:flex grid gap-4  py-2">
                  <h1 className="text-textDark">Referrer name</h1>
                  <h3 className="text-gray-600 text-sm w-max md:w-full break-words">
                    {referrerInfo.displayName}
                  </h3>
                </div>
              </>
            )}
            <div className="md:flex grid gap-4  py-2">
              <h1 className="text-textDark">Referral link</h1>
              <h3 className="text-gray-600 text-sm w-max md:w-full break-words">{`https://growwten.com?referralCode=${userInfo.id}`}</h3>
            </div>
            </>
}
          </div>
        </div>
      </>
    );
  return (
    <div className="grid place-items-center h-screen">
      <_Loader />
    </div>
  );
};

export default Profile;
