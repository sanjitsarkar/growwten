import { useContext } from "react";
import { AuthContext } from "../lib/store/AuthStore";
import Card from "./Card";

const UserBody = () => {
  const { user, userInfo } = useContext(AuthContext);

  return (
    <div className="user_body w-full px-20 pt-48 bg-darkerBlue">
      <div className="grid md:flex gap-4 md:gap-0">
        <Card
          to="/tasks"
          title="Tasks"
          textColor="text-white"
          bgColor="bg-secondary"
        ></Card>
        <Card
          to="/teams"
          title="Teams"
          textColor="text-white"
          bgColor="bg-primary"
        >
          <h1 className="text-white text-center text-3xl">
            {userInfo.teamCount}
          </h1>
        </Card>
        <Card
          to="/wallet"
          title="Wallet"
          textColor="text-white"
          bgColor="bg-tertiary"
        ></Card>
      </div>
    </div>
  );
};

export default UserBody;
