import { doc, getDoc, increment, updateDoc } from "firebase/firestore";
import { useRouter } from "next/dist/client/router";
import { useContext, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import _Loader from "../../components/Loader";
import UserHeader from "../../components/UserHeader";
import { db } from "../../lib/firebase";
import { AuthContext } from "../../lib/store/AuthStore";
import { UtilityContext } from "../../lib/store/UtiltyStore";
import Location from "../../components/Images/location.svg";
import Phone from "../../components/Images/phone.svg";
import ProfileForm from "../../components/ProfileForm";
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
    showProfileFormModal,
    setShowProfileFormModal,
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
  useEffect(() => {}, []);

  if (user && userInfo)
    return (
      <>
        {showProfileFormModal && <ProfileForm />}
        <UserHeader user={userInfo} />
        <div className="md:flex  mt-40 justify-center  gap-4 p-7   text-white w-full">
          <div className=" relative   rounded-md shadow-2xl   p-7 bg-textDark md:w-1/2   ">
            <div className="text-center">
              <img
                className=" absolute -top-10 left-1/2 transform -translate-x-1/2 rounded-full border-4 border-white  w-20 "
                src={user.photoURL}
                alt=""
              />
              <h3 className=" text-lg mt-7">{userInfo.displayName}</h3>
              <h3 className=" text-md font-light">{userInfo.email}</h3>
            </div>

            <div className="grid   mt-4 md:justify-center md:gap-4 flex-wrap ">
              {userInfo.isCompleted && (
                <div className="flex gap-7 justify-center">
                  <div className="md:flex grid gap-4  py-2 md:place-content-start place-content-center place-items-center">
                    <img src={Phone.src} alt="" width="40" />
                    <h3 className=" text-md">{userInfo.phoneNo}</h3>
                  </div>
                  <div className="md:flex grid gap-4  py-2  md:place-content-startplace-content-center place-items-center">
                    <img src={Location.src} alt="" width="40" />
                    <h3 className=" text-md">{userInfo.address}</h3>
                  </div>
                </div>
              )}
              {userInfo.isCompleted ? (
                <button
                  className="text-center  py-2  rounded-3xl bg-white text-textDark w-max mx-auto px-7 mt-7"
                  onClick={() => setShowProfileFormModal(true)}
                >
                  Edit Profile
                </button>
              ) : (
                <button
                  className=" text-center  py-2  rounded-3xl bg-white text-textDark w-max mx-auto px-7 mt-7"
                  onClick={() => setShowProfileFormModal(true)}
                >
                  Complete Profile
                </button>
              )}
            </div>
          </div>
          <div className="    rounded-xl shadow-2xl   p-7 md:w-1/2 w-full   grid bg-white">
            {/* <img
          className=" absolute -top-10 left-1/2 transform -translate-x-1/2 "
          src={user.photoURL}
          alt=""
        /> */}

            {/* <div className="md:flex grid gap-4  py-2 items-center">
              <h1 className="text-textDark">Referrer ID</h1>
              <h3 className="text-gray-600 text-sm">{referralCode}</h3>
            </div> */}

            {userInfo.referralCode === "" ? (
              <div className="md:flex grid gap-4  py-2 items-center">
                <input
                  className="w-full bg-tertiary bg-opacity-900 px-3 py-1.5  rounded-md placeholder-textDark placeholder-opacity-75 text-textDark outline-none"
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
                    className="text-white bg-textDark
                       
             py-1.5 px-7 rounded-md"
                  >
                    Add
                  </button>
                )}
              </div>
            ) : (
              <>
                <div className="md:flex flex-wrap gap-0 md:gap-4 grid py-2 items-center ">
                  <h1 className="text-textDark uppercase font-medium">
                    Referrer Name
                  </h1>
                  <h3 className="text-textDark text-opacity-95 text-base">
                    {referrerInfo.displayName}
                  </h3>
                </div>
                <div className="md:flex  flex-wrap gap-4 py-2 items-center ">
                  <h1 className="text-textDark uppercase font-medium">
                    Referrer ID
                  </h1>
                  <h3 className="text-textDark text-opacity-95   text-sm">
                    {userInfo.referralCode}
                  </h3>
                </div>
                {userInfo.teamNo && (
                  <div className="md:flex  flex-wrap gap-4 py-2 items-center ">
                    <h1 className="text-textDark uppercase font-medium">
                      Position
                    </h1>
                    <h3 className="text-textDark text-opacity-95   text-sm">
                      Level {userInfo.teamNo}
                    </h3>
                  </div>
                )}
              </>
            )}
            <div className="md:flex  flex-wrap gap-4 py-2 items-center b">
              <h1 className="text-textDark uppercase font-medium">
                Joining Date
              </h1>
              <h3 className="text-textDark text-opacity-95   text-sm">
                {new Date(userInfo.createdAt.seconds * 1000).toLocaleString(
                  "default"
                )}
              </h3>
            </div>
            <div className="md:flex  flex-wrap gap-4 py-2 items-center b">
              <h1 className="text-textDark uppercase font-medium">
                Referral Link
              </h1>
              <a
                href={`https://growwten.com?referralCode=${userInfo.id}`}
                className="text-textDark underline text-opacity-95   text-sm break-all"
              >
                {`https://growwten.com?referralCode=${userInfo.id}`}
              </a>
            </div>
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
