import { useState, createContext } from "react";
import { USER } from "../const";
export const UtilityContext = createContext();

export const UtilityProvider = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showReferralCodeModal, setShowReferralCodeModal] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [referrerTeamNo, setReferrerTeamNo] = useState("");
  const [referrerInfo, setReferrerInfo] = useState("");
  const [loginAs, setLoginAs] = useState(USER);

  const value = {
    showLoginModal,
    setShowLoginModal,
    loginAs,
    setLoginAs,
    showReferralCodeModal,
    setShowReferralCodeModal,
    referralCode,
    setReferralCode,
    referrerTeamNo,
    setReferrerTeamNo,
    referrerInfo,
    setReferrerInfo,
  };
  return (
    <UtilityContext.Provider value={value}>{children}</UtilityContext.Provider>
  );
};
