import Label from "./Images/label.svg";
import Team from "./Images/team.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { UtilityContext } from "../lib/store/UtiltyStore";
import { useRouter } from "next/dist/client/router";
const TeamCard = ({ mem, id }) => {
  const { teamMemberName, setTeamMemberName } = useContext(UtilityContext);
  const router = useRouter();
  return (
    <div
      className={`rounded-lg ${mem.teamNo === 1 && "bg-textDark"} ${
        mem.teamNo === 2 && "bg-darkBlue"
      } ${
        mem.teamNo === 3 && "bg-darkerBlue"
      } shadow-2xl px-6 py-6 text-white  lg:flex md:gap-6 gap-6 items-center  grid place-items-center w-full  md:w-max`}
      key={id}
    >
      <LazyLoadImage
        src={mem.photoURL}
        alt={mem.displayName}
        className="rounded-full border-2 border-secondary border-opacity-70 w-20 shadow-2xl bg-secondary"
      />
      <div
        // onClick={() => getTeamInfo(mem.displayName, id)}
        className="cursor-pointer grid place-items-center md:place-items-start"
      >
        <h2 className="font-medium text-lg">{mem.displayName}</h2>
        <h4 className="font-light">{mem.email}</h4>
      </div>
      <div className="flex justify-evenly gap-6 w-full flex-wrap">
        {mem.teamNo !== 3 && (
          <div className="grid place-items-center gap-1">
            <img src={Team.src} />
            <h4>
              {mem.teamCount}
              {mem.teamCount <= 1 ? " Member" : " Members"}
            </h4>
          </div>
        )}
        <div className="grid place-items-center gap-1">
          <img src={Label.src} />
          <h4>Team {mem.teamNo}</h4>
        </div>
        {mem.teamNo !== 3 && (
          <div className="flex place-items-center">
            <div className="px-2 py-1 rounded-2xl bg-white text-textDark shadow-2xl border border-white ">
              <a
                onClick={() => {
                  setTeamMemberName(mem.displayName);
                  router.push("/teams/" + id);
                }}
              >
                Show Team
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
