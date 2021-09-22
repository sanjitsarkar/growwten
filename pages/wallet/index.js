import { useRouter } from "next/dist/client/router";
import { useContext, useEffect, useState } from "react";
import _Loader from "../../components/Loader";
import UserHeader from "../../components/UserHeader";
import { AuthContext } from "../../lib/store/AuthStore";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
const Wallet = () => {
  const { loading, user, userInfo } = useContext(AuthContext);
  const [walletInfo, setWalletInfo] = useState("");
  const router = useRouter();
  const getWalletInfo = async () => {
    const data = await getDoc(doc(db, "wallets", userInfo.id));
    setWalletInfo(data.data());
  };
  useEffect(() => {
    if (user) getWalletInfo();
  }, []);
  useEffect(() => {
    if ((!loading && user === null) || userInfo === null) {
      router.push("/");
    }
    if (userInfo && userInfo.type === "CLIENT") {
      router.push("/");
    }
  }, [userInfo, user, loading]);
  if (user && userInfo && walletInfo)
    return (
      <>
        <UserHeader />
        <div className="flex justify-center  flex-wrap px-4  mt-32  gap-4  w-full ">
          <div className="   items-center rounded-md bg-textDark text-white p-7 text-center w-full md:flex-1 md:w-auto">
            <h1>Total Earning</h1>
            <h2>
              ₹
              {walletInfo.referralEarning +
                walletInfo.selfEarning +
                walletInfo.withdrawlAmount}
            </h2>
          </div>
          <div className="flex  flex-wrap w-full gap-4 justify-center md:flex-1 md:w-auto">
            <div className="rounded-md bg-primary text-white p-7  text-center flex-1">
              <h1>Self Earning</h1>
              <h2>₹{walletInfo.selfEarning}</h2>
            </div>
            <div className="rounded-md bg-secondary text-white p-7  text-center flex-1">
              <h1>Referral Earning</h1>
              <h2>₹{walletInfo.referralEarning}</h2>
            </div>
          </div>
          <div className="rounded-md bg-darkerBlue text-white p-7 text-center w-full">
            <h1>Total Balance</h1>
            <h2>₹{walletInfo.referralEarning + walletInfo.selfEarning}</h2>
          </div>
          <div className="rounded-md bg-darkBlue text-white p-7 text-center w-full">
            <h1>Total Withdrawl</h1>
            <h2>₹{walletInfo.withdrawlAmount}</h2>
          </div>
          <button className="  bg-secondary text-white px-7 py-3 rounded-md shadow-xl ">
            Withdraw Money
          </button>
        </div>
      </>
    );
  return (
    <div className="grid place-items-center h-screen">
      <_Loader />
    </div>
  );
};

export default Wallet;
