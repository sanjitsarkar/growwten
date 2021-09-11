import { useContext } from "react";
import { AuthContext } from "../../lib/store/AuthStore";
import UserBody from "../UserBody";
import UserHeader from "../UserHeader";

const Dashboard = ({ user }) => {

  console.log(user);
  return (
    <>
      <UserHeader user={user} />
      <UserBody />
    </>
  );
};

export default Dashboard;
