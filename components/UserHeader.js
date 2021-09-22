import { useContext, useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import Link from "next/link";
import NavItem from "./NavItem";
import { USER } from "../lib/const";
import { UtilityContext } from "../lib/store/UtiltyStore";
import { AuthContext } from "../lib/store/AuthStore";
import { useRouter } from "next/dist/client/router";
import LogoTitle from "./LogoTitle";
const UserHeader = () => {
  const [active, setActive] = useState("");
  const [show, setShow] = useState(false);
  const {
    setShowLoginModal,
    loginAs,
    setLoginAs,
    showReferralCodeModal,
    setShowReferralCodeModal,
    referralCode,
    setReferralCode,
    referrerTeamNo,
    setReferrerTeamNo,
  } = useContext(UtilityContext);
  const { loading, user, userInfo, setUserInfo } = useContext(AuthContext);
  const router = useRouter();
  const logout = async () => {
    setUserInfo("");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("type");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("cred");
    localStorage.removeItem("result");

    await auth.signOut();
    console.log("logout suc");
  };
  useEffect(() => {
    console.log("header", loading, "user", user, "userInfo", userInfo);
  }, [loading, user, userInfo]);
  return (
    <div
      id="UserHeader"
      className="flex justify-between px-7 py-3 w-full items-center  bg-white md:px-10  shadow-lg md:shadow-none fixed top-0 left:0 z-50 "
    >
      <svg
        onClick={() => setShow(!show)}
        className={`cursor-pointer md:hidden ${show ? "hidden" : "flex"}`}
        fill="#077FEE"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
      >
        <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
      </svg>
      <svg
        onClick={() => setShow(!show)}
        className={`cursor-pointer md:hidden ${!show ? "hidden" : "flex"}`}
        fill="#F25724"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 512 512"
        width="24px"
        height="24px"
      >
        <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
      </svg>

      <LogoTitle />

      <div className="flex gap-7 items-center ">
        <div
          className={`${
            show ? "grid" : "hidden"
          } md:text-textDark md:text-md  md:flex gap-5 py-9 md:py-0 md:relative md:top-0  absolute top-full left-0  place-items-center w-full bg-secondary  text-white md:bg-transparent shadow-lg md:shadow-none`}
        >
          <NavItem
            type={USER}
            title="Home"
            _class="home"
            active={active}
            to="/"
            setActive={setActive}
            setShow={setShow}
          />
          <div className="flex  gap-3 text-sm">
            <button
              onClick={() => logout()}
              className="login py-2 px-5 bg-secondary rounded-sm text-white transition-all duration-200 hover:opacity-90"
            >
              Logout
            </button>
            {/* <button className="signup hidden login py-2 px-5 bg-primary rounded-sm text-white">Signup</button> */}
          </div>

          {/* <NavItem title="Home" _class="home" active={active} to="#"/>
                        <NavItem title="Home" _class="home" active={active} to="#"/>
                        <a href="#why-us" className={`nav-item ${active==='why_us' && 'active'}`}>Why us</a>
                        <a href="#our-mission" className={`nav-item ${active==='our_mission' && 'active'}`}>Our Mission</a>
                        <a href="#services" className={`nav-item ${active==='services' && 'active'}`}>Services</a> */}
        </div>
        <NavItem
          type={USER}
          title={user.displayName}
          _class="profile"
          active={active}
          to="/profile"
          setActive={setActive}
          setShow={setShow}
        />
        <img
          src={user.photoURL}
          alt={user.displayName}
          className="w-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default UserHeader;
