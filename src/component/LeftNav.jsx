import { NavLink,useLocation } from "react-router-dom";

export const LeftNav = () => {
   const location=useLocation()

  const getStyle = ({ isActive }) => ({
    color: isActive ? "red" : "",
    fontWeight:isActive?"600":""
  });

  return (
    <>
      <nav className="flex flex-col gap-12 text-base relative text-slate-500">
        <NavLink to="/" style={getStyle} className="flex items-center">
          Inbox
          <hr
            className={`${
              location.pathname === "/" ? "block" : "hidden"
            } rotate-90 w-[45px] border-b-2 border-black absolute right-0`}
          />
        </NavLink>
        <NavLink to="/spam" style={getStyle} className="flex items-center">
          Spam
          <hr
            className={`${
              location.pathname === "/spam" ? "block" : "hidden"
            } rotate-90 w-[45px] border-b-2 border-black absolute right-0`}
          />
        </NavLink>
        <NavLink to="/trash" style={getStyle} className="flex items-center">
          Trash
          <hr
            className={`${
              location.pathname === "/trash" ? "block" : "hidden"
            } rotate-90 w-[45px] border-b-2 border-black absolute right-0`}
          />
        </NavLink>
      </nav>
    </>
  );
};
