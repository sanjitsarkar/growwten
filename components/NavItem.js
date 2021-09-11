import { ADMIN, CLIENT, USER } from "../lib/const";
import Link from "next/link";
const NavItem = ({ active, _class, to, title, setActive, setShow, type }) => {
  const handleClick = (e) => {
    setActive(_class);
    setShow(false);
  };
  if (type === USER || type === ADMIN || type === CLIENT)
    return (
      <Link href={to}>
        <a
          onClick={(e) => handleClick(e)}
          className={`nav-item  ${active === _class && "active"}`}
        >
          {title}
        </a>
      </Link>
    );
  return (
    <a
      onClick={(e) => handleClick(e)}
      href={to}
      className={`nav-item  ${active === _class && "active"}`}
    >
      {title}
    </a>
  );
};

export default NavItem;
