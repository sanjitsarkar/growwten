import { useContext } from "react";
import { AuthContext } from "../lib/store/AuthStore";
import Card from "./Card";

const UserBody = () => {
  const { user, userInfo } = useContext(AuthContext);

  return (
    <div className="user_body w-full md:px-20 px-7 pt-32 md:pt-48 bg-darkerBlue">
      <div className="grid md:flex gap-4 md:gap-0 ">
        <Card
          type="normal"
          to="/tasks"
          title="Tasks"
          textColor="text-white"
          bgColor="bg-secondary"
        >
          <h1 className="text-white text-center text-3xl">0</h1>
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
      </div>
    </div>
  );
};

export default UserBody;
