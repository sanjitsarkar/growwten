import { useRouter } from "next/dist/client/router";
import { useContext, useEffect } from "react";
import _Loader from "../../components/Loader";
import { AuthContext } from "../../lib/store/AuthStore";
const Tasks = () => {
  const { loading, user, userInfo } = useContext(AuthContext);

  const router = useRouter();
  useEffect(() => {
    if ((!loading && user === null) || userInfo === null) {
      router.push("/");
    }
  }, [userInfo, user, loading]);

  if (user && userInfo) return <div>Tasks</div>;
  return (
    <div className="grid place-items-center h-screen">
      <_Loader />
    </div>
  );
};

export default Tasks;
