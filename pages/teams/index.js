import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/dist/client/router";
import { useContext, useEffect, useRef, useState } from "react";
import _Loader from "../../components/Loader";
import TeamCard from "../../components/TeamCard";
import UserHeader from "../../components/UserHeader";
import { db } from "../../lib/firebase";
import { AuthContext } from "../../lib/store/AuthStore";
const Teams = () => {
  const { loading, user, userInfo } = useContext(AuthContext);
  const [teamMems, setTeamMems] = useState([]);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const teamRef = useRef();
  const router = useRouter();
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

  const getTeamInfo = async (name, id) => {
    setTeamMems1([]);
    setName("");
    setName(name);
    setLoading2(true);
    const dataSnap = await getDocs(
      query(collection(db, "users"), where("referralCode", "==", id))
    );
    setLoading2(false);
    teamRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
    setTeamMems1(dataSnap.docs);
  };
  const [name, setName] = useState("");
  const [teamMems1, setTeamMems1] = useState("");
  const [id, setId] = useState("");

  if (user && userInfo)
    return (
      <>
        <UserHeader user={userInfo} />
        <div className="grid px-7 mt-32  gap-4  w-full ">
          <div className="flex justify-between items-center mb-4  w-full ">
            <div className="px-3 py-2 rounded-md bg-white text-textDark shadow-2xl border border-textDark  ">
              Team Members
            </div>
            <button
              className="px-3 py-2 rounded-md bg-textDark text-white shadow-2xl border border-textDark  "
              onClick={() => {
                setTeamMems([]);
                getTeams();
              }}
            >
              Refresh Tasks
            </button>
          </div>
          {/* <h1 className="mb-2">Team Members</h1> */}
          <div className="flex flex-wrap gap-3 w-full">
            {loading1 && (
              <div className="mx-auto">
                <_Loader />
              </div>
            )}
            {!loading1 && !teamMems.length && (
              <h1 className="text-textDark text-center">
                {" "}
                No team member available
              </h1>
            )}
            {teamMems &&
              teamMems.map((mem) => (
                <TeamCard
                  mem={mem.data()}
                  id={mem.id}
                  getTeamInfo={getTeamInfo}
                  key={mem.id}
                />
              ))}
            {/* <table className="border-2">
              <thead>
                <tr>
                  <th>Profile Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Team No</th>
                  <th>Team Members</th>
                </tr>
              </thead>
              <tbody>
                {loading1 && (
                  <tr>
                    <td colSpan="5">
                      <_Loader />
                    </td>
                  </tr>
                )}
                {!teamMems.length && (
                  <tr>
                    <td colSpan="5"> No team member available</td>
                  </tr>
                )}
                {teamMems &&
                  teamMems.map((mem) => (
                    <tr key={mem.id}>
                      <td>
                        <img src={mem.data().photoURL} alt="" />
                      </td>
                      <td
                        className="cursor-pointer"
                        onClick={() =>
                          getTeamInfo(mem.data().displayName, mem.id)
                        }
                      >
                        {mem.data().displayName}
                      </td>
                      <td>{mem.data().email}</td>
                      <td>{mem.data().teamNo}</td>
                      <td>{mem.data().teamCount - 1}</td>
                    </tr>
                  ))}
              </tbody>
            </table> */}
            {name && (
              <>
                <h1 className="mt-10 mb-2 text-center px-3 py-2 rounded-md bg-white text-textDark shadow-2xl border border-textDark">
                  Team Members of <span className="text-secondary">{name}</span>
                </h1>
                <div ref={teamRef} className="flex flex-wrap gap-3 w-full">
                  {loading2 && (
                    <div className="mx-auto">
                      {" "}
                      <_Loader />{" "}
                    </div>
                  )}
                  {!teamMems1.length && (
                    <h1 className="text-center text-textDark mx-auto">
                      No team member available
                    </h1>
                  )}
                  {teamMems1 &&
                    teamMems1.map((mem) => (
                      <TeamCard
                        mem={mem.data()}
                        id={mem.id}
                        getTeamInfo={getTeamInfo}
                        key={mem.id}
                      />
                    ))}
                </div>
                {/* <table className="border-2">
                  <thead>
                    <tr>
                      <th>Profile Image</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Team No</th>
                      <th>Team Members</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading2 && (
                      <tr>
                        <td colSpan="5">
                          <_Loader />
                        </td>
                      </tr>
                    )}
                    {!teamMems1.length && (
                      <tr>
                        <td colSpan="5"> No team member available</td>
                      </tr>
                    )}
                    {teamMems1 &&
                      teamMems1.map((mem) => (
                        <tr key={mem.id}>
                          <td>
                            <img src={mem.data().photoURL} alt="" />
                          </td>
                          <td
                            className="cursor-pointer"
                            onClick={() =>
                              getTeamInfo(mem.data().displayName, mem.id)
                            }
                          >
                            {mem.data().displayName}
                          </td>
                          <td>{mem.data().email}</td>
                          <td>{mem.data().teamNo}</td>
                          <td>{mem.data().teamCount - 1}</td>
                        </tr>
                      ))}
                  </tbody>
                </table> */}
              </>
            )}
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

export default Teams;
