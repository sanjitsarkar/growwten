import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useRouter } from "next/dist/client/router";
import { useContext, useEffect, useRef, useState } from "react";
import _Loader from "../../components/Loader";
import TeamCard from "../../components/TeamCard";
import UserHeader from "../../components/UserHeader";
import { db } from "../../lib/firebase";
import { AuthContext } from "../../lib/store/AuthStore";
import { UtilityContext } from "../../lib/store/UtiltyStore";

const TeamInfo = () => {
  const router = useRouter();
  const { id } = router.query;
  const [_id, setId] = useState();
  const [teamMems, setTeamMems] = useState([]);
  const [loading1, setLoading1] = useState(false);
  const { teamMemberName, setTeamMemberName } = useContext(UtilityContext);
  const { teamRef } = useRef();
  const { loading, user, userInfo } = useContext(AuthContext);
  const getUserInfo = async () => {
    const data = await getDoc(doc(db, "users", id));
    setTeamMemberName(data.data().displayName);
  };
  useEffect(() => {
    if ((!loading && user === null) || userInfo === null) {
      router.push("/");
    }
    if (userInfo && userInfo.type === "CLIENT") {
      router.push("/");
    }
  }, [userInfo, user, loading]);
  const getTeamInfo = async (name, id) => {
    setTeamMems([]);

    setLoading1(true);
    const dataSnap = await getDocs(
      query(collection(db, "users"), where("referralCode", "==", id))
    );
    setLoading1(false);
    teamRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
    setTeamMems(dataSnap.docs);
  };
  useEffect(() => {
    if (id) {
      setId(id);
      getUserInfo();
    }
  }, [id]);
  useEffect(() => {
    if (_id) getTeamInfo(teamMemberName, _id);
  }, [_id]);
  if (user && userInfo)
    return (
      <>
        <UserHeader user={userInfo} />
        <div className="grid px-7 mt-32  gap-4  w-full  ">
          <div className="flex flex-wrap gap-4 items-center  ">
            <h1 className="text-center px-3 py-2 rounded-md bg-secondary text-white shadow-md border w-max font-light ">
              Team Members of{" "}
              <span className="text-white text-opacity-90 font-semibold">
                {teamMemberName}
              </span>
            </h1>
            {/* <button
              className="px-3 py-2 rounded-md bg-textDark text-white shadow-2xl border border-textDark  "
              onClick={() => {
                setTeamMems([]);
                getTeamInfo();
              }}
            >
              Refresh Team
            </button> */}
          </div>
          <div ref={teamRef} className="grid md:flex flex-wrap gap-4">
            {loading1 && (
              <div className="mx-auto">
                <_Loader />{" "}
              </div>
            )}
            {!loading1 && !teamMems.length && (
              <h1 className="text-center text-textDark mx-auto mb-10 md:mb-0 ">
                No team member available
              </h1>
            )}
            {teamMems &&
              teamMems.map((mem) => (
                <TeamCard mem={mem.data()} id={mem.id} key={mem.id} />
              ))}
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

export default TeamInfo;
