import { doc, onSnapshot } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../../lib/firebase";
import { auth } from "../firebase";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState("");
  // const [, ] = useState(true);
  useEffect(() => {
    if (user) {
      // setLoadingUser(true);
      // (true);
      const unsub = onSnapshot(
        doc(db, "users", user.uid),
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
    // ,
    // ,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
