import { useContext, useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import Link from "next/link";
import NavItem from "./NavItem";
import { USER } from "../lib/const";
import { UtilityContext } from "../lib/store/UtiltyStore";
import { AuthContext } from "../lib/store/AuthStore";
import { useRouter } from "next/dist/client/router";
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
    sessionStorage.removeItem("ytc-access-token");
    sessionStorage.removeItem("ytc-user");
    localStorage.removeItem("type");
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

      <div className="flex-col justify-center items-center gap-1">
        <svg
          className="w-4/6 md:w-aut0 mx-auto"
          width="99"
          height="56"
          viewBox="0 0 99 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M80.7523 17.5496H88.6194L75.0396 46.0344C73.7361 42.653 71.4178 39.7581 68.403 37.7472C65.3882 35.7362 61.8248 34.7079 58.2022 34.8034C54.5795 34.8989 51.0753 36.1135 48.1706 38.2805C45.266 40.4474 43.1034 43.4605 41.9798 46.9058C40.7831 44.8864 39.0612 43.2293 36.9974 42.1109C34.9336 40.9925 32.6052 40.4546 30.2599 40.5546C27.9147 40.6545 25.6405 41.3886 23.6793 42.6786C21.7182 43.9685 20.1435 45.7662 19.123 47.8801C17.8922 46.0038 16.0883 44.5753 13.9799 43.8071C11.8715 43.039 9.57142 42.9724 7.42211 43.6172C5.27279 44.262 3.38921 45.5837 2.05183 47.3856C0.714444 49.1874 -0.00520745 51.3731 2.83686e-05 53.617C0.726218 49.986 5.27701 46.4277 8.94426 45.7499C10.5976 45.4285 12.3104 45.6424 13.8339 46.3607C15.3574 47.0789 16.6123 48.264 17.4165 49.744C17.429 49.765 17.4392 49.7873 17.4467 49.8106C17.5496 50.216 17.8582 50.5912 17.9853 51.0209C18.1124 51.4505 18.3545 52.4127 18.6268 53.2721C18.6178 53.2078 18.6178 53.1426 18.6268 53.0784C18.6692 53.1934 18.6994 53.3144 18.7297 53.4294C18.7297 53.4294 18.8204 53.8651 18.8204 53.8772C18.8802 54.0611 18.9679 54.2346 19.0807 54.3916C19.2618 54.5953 19.5037 54.7353 19.7705 54.791C21.7494 55.2388 21.2169 50.5549 21.7615 49.393C22.5928 47.6067 23.9333 46.1058 25.6148 45.0788C27.2963 44.0519 29.2437 43.5448 31.2125 43.6211C33.1813 43.6973 35.0837 44.3537 36.6807 45.5077C38.2777 46.6616 39.4981 48.2618 40.1886 50.1071C40.4972 50.924 40.939 54.0043 41.3989 54.4763C41.7173 54.7783 42.124 54.9706 42.5595 55.025C42.995 55.0795 43.4365 54.9932 43.8195 54.7789C45.3445 53.8772 44.6667 51.3416 44.9512 49.8711C44.9541 49.8389 44.9541 49.8064 44.9512 49.7742C45.5459 46.6052 47.2224 43.7409 49.6943 41.6707C52.1663 39.6004 55.2803 38.4526 58.5046 38.4234C61.7288 38.3941 64.8632 39.4851 67.3723 41.5101C69.8815 43.5351 71.6098 46.3684 72.2619 49.5261C72.8005 52.1465 73.4178 57.7381 77.7084 55.0694L93.4425 19.3651L98.2837 25.4166L98.8889 0L80.7523 17.5496Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M10.554 40.8481C12.058 40.8481 13.2772 39.6289 13.2772 38.1249C13.2772 36.6209 12.058 35.4017 10.554 35.4017C9.04999 35.4017 7.83077 36.6209 7.83077 38.1249C7.83077 39.6289 9.04999 40.8481 10.554 40.8481Z"
            fill="#F15A24"
          />
          <path
            d="M58.3615 31.4682C61.3694 31.4682 63.8079 29.0297 63.8079 26.0218C63.8079 23.0138 61.3694 20.5753 58.3615 20.5753C55.3535 20.5753 52.915 23.0138 52.915 26.0218C52.915 29.0297 55.3535 31.4682 58.3615 31.4682Z"
            fill="#F15A24"
          />
          <path
            d="M30.5242 38.1249C32.5295 38.1249 34.1551 36.4993 34.1551 34.494C34.1551 32.4887 32.5295 30.863 30.5242 30.863C28.5189 30.863 26.8932 32.4887 26.8932 34.494C26.8932 36.4993 28.5189 38.1249 30.5242 38.1249Z"
            fill="#F15A24"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="2.83686e-05"
              y1="27.8857"
              x2="98.907"
              y2="27.8857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF0000" />
              <stop offset="0.1" stopColor="#FD0B05" />
              <stop offset="0.5" stopColor="#F73616" />
              <stop offset="0.81" stopColor="#F35020" />
              <stop offset="1" stopColor="#F15A24" />
            </linearGradient>
          </defs>
        </svg>

        <h3 className="text-textDark font-md text-md text-center">
          <Link href="/">GrowwTen</Link>
        </h3>
      </div>
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
          {/* <NavItem title="Home" _class="home" active={active} to="#"/>
                        <NavItem title="Home" _class="home" active={active} to="#"/>
                        <a href="#why-us" className={`nav-item ${active==='why_us' && 'active'}`}>Why us</a>
                        <a href="#our-mission" className={`nav-item ${active==='our_mission' && 'active'}`}>Our Mission</a>
                        <a href="#services" className={`nav-item ${active==='services' && 'active'}`}>Services</a> */}
        </div>
        <div className="flex  gap-3 text-sm">
          <button
            onClick={() => logout()}
            className="login py-2 px-5 bg-secondary rounded-sm text-white transition-all duration-200 hover:opacity-90"
          >
            Logout
          </button>
          {/* <button className="signup hidden login py-2 px-5 bg-primary rounded-sm text-white">Signup</button> */}
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
