import { collection, doc, onSnapshot } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../../lib/firebase";
import { auth } from "../firebase";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState("");
  // const [token, setToken] = useState(
  //   window. localStorage?.getItem("ytc-access-token")
  // );
  // const [, ] = useState(true);
  useEffect(() => {
    // const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (user) {
      console.log("user", user);
      // setLoadingUser(true);
      // (true);
      let collectionName = "";
      const type = window.localStorage.getItem("type");
      if (type === "USER") {
        collectionName = "users";
      } else if (type === "CLIENT") {
        collectionName = "clients";
      }
      const unsub = onSnapshot(
        doc(db, collectionName, user.uid),
        { includeMetadataChanges: true },
        (doc) => {
          setUserInfo({ ...doc.data(), id: doc.id });
          // (false);
          console.log("data", doc.data());
        }
      );

      return () => {
        unsub();
      };
    }
    // setLoadingUser(false);
  }, [user]);

  const value = {
    loading,
    user,
    userInfo,
    setUserInfo,
    // token,
    // setToken,
    // ,
    // ,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
