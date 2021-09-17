import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { AuthContext } from "../lib/store/AuthStore";
import Card from "./Card";

const UserBody = () => {
  const { user, userInfo } = useContext(AuthContext);
  // const [taskCount, setTaskCount] = useState(0);
  // const getTaskCount = async () => {
  //   const dataSnap = await getDocs(
  //     query(collection(db, "tasks"), where("isCompleted", "==", false))
  //   );

  //   const dataSnap2 = await getDocs(
  //     collection(db, `{users/${userInfo.id}/tasks}`)
  //   );

  //   console.log("dataSnap.docs.length", dataSnap.docs.length);
  //   console.log("dataSnap2.docs.length", dataSnap2.docs.length);
  //   if (dataSnap.docs.length > dataSnap2.docs.length) {
  //     setTaskCount(dataSnap.docs.length - dataSnap2.docs.length);
  //   }
  // };
  // useEffect(() => {
  //   if (userInfo) getTaskCount();
  // }, [userInfo]);

  return (
    <div className="user_body w-full md:px-20 px-7 pt-32 md:pt-48 bg-darkerBlue">
      <div className="grid md:flex gap-4 md:gap-0 ">
        {userInfo.type === "CLIENT" && (
          <Card
            type="normal"
            to="/tasks"
            title="Tasks"
            textColor="text-white"
            bgColor="bg-secondary"
          ></Card>
        )}
        {userInfo.type === "USER" && (
          <>
            <Card
              type="normal"
              to="/tasks"
              title="Pending Tasks"
              textColor="text-white"
              bgColor="bg-secondary"
            >
              {/* <h1 className="text-white text-center text-3xl">{taskCount}</h1> */}
            </Card>
            <Card
              type="normal"
              to="/teams"
              title="Teams"
              textColor="text-white"
              bgColor="bg-primary"
            >
              <h1 className="text-white text-center text-3xl">
                {userInfo.teamCount && userInfo.teamCount - 1}
              </h1>
            </Card>
            <Card
              type="normal"
              to="/wallet"
              title="Wallet"
              textColor="text-white"
              bgColor="bg-tertiary"
            >
              <h1 className="text-white text-center text-3xl">0</h1>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default UserBody;
