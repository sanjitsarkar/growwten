import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/dist/client/router";
import { useContext, useEffect, useState } from "react";
import _Loader from "../../components/Loader";
import UserHeader from "../../components/UserHeader";
import { db } from "../../lib/firebase";
import { AuthContext } from "../../lib/store/AuthStore";
const Teams = () => {
  const { loading, user, userInfo } = useContext(AuthContext);
  const [teamMems, setTeamMems] = useState([]);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if ((!loading && user === null) || userInfo === null) {
      router.push("/");
    }
  }, [userInfo, user, loading]);
  const getTeams = async () => {
    setLoading1(true);
    const dataSnap = await getDocs(
      query(collection(db, "users"), where("referralCode", "==", userInfo.id))
    );
    setLoading1(false);
    setTeamMems(dataSnap.docs);
  };
  useEffect(() => {
    if (userInfo.id) getTeams();
  }, [userInfo]);

  const getTeamInfo = async (name, id) => {
    setTeamMems1("");
    setName("");
    setName(name);
    setLoading2(true);
    const dataSnap = await getDocs(
      query(collection(db, "users"), where("referralCode", "==", id))
    );
    setLoading2(false);
    setTeamMems1(dataSnap.docs);
  };
  const [name, setName] = useState("");
  const [teamMems1, setTeamMems1] = useState("");
  const [id, setId] = useState("");

  if (user && userInfo)
    return (
      <>
        <UserHeader user={userInfo} />
        <div className="flex mt-36 m-7 gap-4 justify-center w-max md:w-auto md:mx-auto">
          <div className=" relative   rounded-sm shadow-2xl   p-7">
            <h1 className="mb-2">Team Members</h1>
            <table className="border-2">
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
            </table>
            {name && (
              <>
                <h1 className="mt-10 mb-2">Teams Member of {name}</h1>
                <table className="border-2">
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
                </table>
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
