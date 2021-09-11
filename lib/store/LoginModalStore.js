import { useState, createContext } from "react";
import { USER } from "../const";
export const LoginModalContext = createContext();

export const LoginModalProvider = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showReferralCodeModal, setShowReferralCodeModal] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [referrerTeamNo, setReferrerTeamNo] = useState("");

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
  };
  return (
    <LoginModalContext.Provider value={value}>
      {children}
    </LoginModalContext.Provider>
  );
};
