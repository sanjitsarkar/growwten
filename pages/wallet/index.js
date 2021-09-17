import { useRouter } from "next/dist/client/router";
import { useContext, useEffect } from "react";
import _Loader from "../../components/Loader";
import { AuthContext } from "../../lib/store/AuthStore";

const Wallet = () => {
  const { loading, user, userInfo } = useContext(AuthContext);

  const router = useRouter();
  useEffect(() => {
    if ((!loading && user === null) || userInfo === null) {
      router.push("/");
    }
    if (userInfo && userInfo.type === "CLIENT") {
      router.push("/");
    }
  }, [userInfo, user, loading]);
  if (user && userInfo) return <div>Wallet</div>;
  return (
    <div className="grid place-items-center h-screen">
      <_Loader />
    </div>
  );
};

export default Wallet;
