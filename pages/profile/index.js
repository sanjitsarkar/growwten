import { doc, getDoc, increment, updateDoc } from "firebase/firestore";
import { useRouter } from "next/dist/client/router";
import { route } from "next/dist/server/router";
import { useContext, useEffect, useState } from "react";
import _Loader from "../../components/Loader";
import UserHeader from "../../components/UserHeader";
import { db } from "../../lib/firebase";
import { AuthContext } from "../../lib/store/AuthStore";
import { LoginModalContext } from "../../lib/store/LoginModalStore";
const Profile = () => {
  const {
    showLoginModal,
    setShowLoginModal,
    loginAs,
    setLoginAs,
    showReferralCodeModal,
    setShowReferralCodeModal,
    setReferrerTeamNo,
    referrerTeamNo,
  } = useContext(LoginModalContext);

  const { user, userInfo } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    console.log("referrerTeamNo", referrerTeamNo);
    if (user === null) {
      router.push("/");
    }
  }, [user]);
  const [loading, setLoading] = useState(false);
  // console.log(user);
  const [referralCode, setReferralCode] = useState(userInfo.referralCode);
  const addReferralCode = async () => {
    console.log("refe", referralCode);
    if (referralCode !== "") {
      setLoading(true);
      const data = await getDoc(doc(db, "users", referralCode));
      console.log("data", data.data());
      if (data.exists()) {
        await updateDoc(doc(db, "users", referralCode), {
          teamCount: increment(1),
        });
        await updateDoc(doc(db, "users", userInfo.id), {
          referralCode,
          teamNo: data.data().teamNo + 1,
        });
        alert("added");
        setLoading(false);
      } else {
        setLoading(false);
        alert("Invalid Referral Code");
      }
    }
  };
  return (
    <>
      <UserHeader user={userInfo} />4
      <div className="flex mt-36 m-7 gap-4 justify-center">
        <div className=" relative   rounded-sm shadow-2xl   p-7">
          {/* <img
          className=" absolute -top-10 left-1/2 transform -translate-x-1/2 "
          src={user.photoURL}
          alt=""
        /> */}
          <div className="flex gap-4  py-2 items-center">
            <h1 className="text-textDark">Profile name</h1>
            <h3 className="text-gray-600 text-sm">{userInfo.displayName}</h3>
          </div>
          <div className="flex gap-4  py-2 items-center">
            <h1 className="text-textDark">Email</h1>
            <h3 className="text-gray-600 text-sm">{userInfo.email}</h3>
          </div>

          <div className="flex gap-4  py-2 items-center">
            {userInfo.referralCode === "" ? (
              <>
                <input
                  className="bg-secondary bg-opacity-10 px-3 py-1.5  rounded-md placeholder-gray-500 outline-none"
                  type="text"
                  placeholder="Enter Referral Code"
                  value={referralCode}
                  onChange={(e) => {
                    setReferralCode(e.target.value);
                  }}
                />
                {loading ? (
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
              </>
            ) : (
              <>
                <input
                  readOnly
                  disabled
                  className="bg-secondary bg-opacity-10 px-3 py-1.5  rounded-md placeholder-gray-500 outline-none"
                  type="text"
                  placeholder="Enter Referral Code"
                  value={referralCode}
                />
              </>
            )}
          </div>
          <div className="flex gap-4  py-2">
            <h1 className="text-textDark">Referral link</h1>
            <h3 className="text-gray-600 text-sm">{`https://growwten.com/referralCode=${userInfo.id}`}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
