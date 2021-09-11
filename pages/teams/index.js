import { collection, getDocs, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import UserHeader from "../../components/UserHeader";
import { db } from "../../lib/firebase";
import { AuthContext } from "../../lib/store/AuthStore";
const Teams = () => {
  const { user, userInfo } = useContext(AuthContext);
  const [teamMems, setTeamMems] = useState([]);
  const getTeams = async () => {
    const dataSnap = await getDocs(
      collection(db, "users"),
      where("referralCode", "==", userInfo.id)
    );
    setTeamMems(dataSnap.docs);
  };
  useEffect(() => {
    getTeams();
  }, []);
  useEffect(() => {
    console.log(teamMems);
  }, [teamMems]);
  return (
    <>
      <UserHeader user={userInfo} />
      <div className="flex mt-36 m-7 gap-4 justify-center">
        <div className=" relative   rounded-sm shadow-2xl   p-7">
          <h1>Team Members</h1>
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
              {teamMems &&
                teamMems.map((mem) => (
                  <tr key={mem.data().email}>
                    <td>
                      <img src={mem.data().photoURL} alt="" />
                    </td>
                    <td>{mem.data().displayName}</td>
                    <td>{mem.data().email}</td>
                    <td>{mem.data().teamNo}</td>
                    <td>{mem.data().teamCount}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Teams;
