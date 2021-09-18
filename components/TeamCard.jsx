import Label from "./Images/label.svg";
import Team from "./Images/team.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
const TeamCard = ({ mem, id, getTeamInfo }) => {
  console.log("mem", mem);
  return (
    <div className="rounded-lg bg-textDark shadow-2xl px-6 py-6 text-white md:w-auto lg:flex md:gap-6 gap-6 items-center w-full grid place-items-center ">
      <LazyLoadImage
        src={mem.photoURL}
        alt={mem.displayName}
        className="rounded-full border-2 border-secondary border-opacity-70 w-24 shadow-2xl bg-secondary"
      />
      <div
        onClick={() => getTeamInfo(mem.displayName, id)}
        className="cursor-pointer grid place-items-center"
      >
        <h2 className="font-medium text-lg">{mem.displayName}</h2>
        <h4 className="font-light">{mem.email}</h4>
      </div>
      <div className="flex justify-between gap-6">
        <div className="grid place-items-center gap-1">
          <img src={Team.src} alt="" srcset="" />
          <h4>{mem.teamCount} Members</h4>
        </div>
        <div className="grid place-items-center gap-1">
          <img src={Label.src} alt="" srcset="" />
          <h4>Team {mem.teamNo}</h4>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
