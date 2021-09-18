import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/dist/client/router";
import { useContext, useEffect, useRef, useState } from "react";
import _Loader from "../../components/Loader";
import TeamCard from "../../components/TeamCard";
import UserHeader from "../../components/UserHeader";
import { db } from "../../lib/firebase";
import { AuthContext } from "../../lib/store/AuthStore";
const Teams = () => {
  const [teamMems, setTeamMems] = useState([]);
  const [loading1, setLoading1] = useState(false);
  const teamRef = useRef();
  const router = useRouter();
  const { loading, user, userInfo } = useContext(AuthContext);
  useEffect(() => {
    if ((!loading && user === null) || userInfo === null) {
      router.push("/");
    }
    if (userInfo && userInfo.type === "CLIENT") {
      router.push("/");
    }
  }, [userInfo, user, loading]);
  const getTeams = async () => {
    setLoading1(true);
    const dataSnap = await getDocs(
      query(collection(db, "users"), where("referralCode", "==", userInfo.id))
    );
    setTeamMems(dataSnap.docs);
    setLoading1(false);
  };
  useEffect(() => {
    if (userInfo.id) getTeams();
  }, [userInfo]);

  if (user && userInfo)
    return (
      <>
        <UserHeader user={userInfo} />
        <div className=" px-7 mt-32  ">
          <div className="flex  items-center mb-4 flex-wrap gap-4 w-full">
            <div className="px-3 py-2 rounded-md bg-white text-textDark shadow-2xl border border-textDark  ">
              Team Members
            </div>
            <button
              className="px-3 py-2 rounded-md bg-primary text-white shadow-2xl border border-primary  "
              onClick={() => {
                setTeamMems([]);
                getTeams();
              }}
            >
              Refresh Team
            </button>
          </div>
        </div>

        {/* <h1 className="mb-2">Team Members</h1> */}

        <div className="flex flex-wrap gap-3 w-full p-5 items-center justify-center md:justify-start ">
          {loading1 && (
            <div className="mx-auto">
              <_Loader />
            </div>
          )}
          {!loading1 && !teamMems.length && (
            <h1 className="text-textDark text-center mx-auto">
              {" "}
              No team member available
            </h1>
          )}
          {teamMems &&
            teamMems.map((mem) => (
              <TeamCard mem={mem.data()} id={mem.id} key={mem.id} />
            ))}
        </div>
      </>
    );
  return (
    <div className="grid place-items-center h-screen">
      <_Loader />
    </div>
  );
};

export default Teams;
