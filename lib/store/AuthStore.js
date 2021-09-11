import { doc, onSnapshot } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../../lib/firebase";
import { auth } from "../firebase";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    if (user) {
      const unsub = onSnapshot(
        doc(db, "users", user.uid),
        { includeMetadataChanges: true },
        (doc) => {
          setUserInfo({ ...doc.data(), id: doc.id });
        }
      );

      return () => {
        unsub();
      };
    }
  }, [user]);

  const value = { user, userInfo, setUserInfo };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
