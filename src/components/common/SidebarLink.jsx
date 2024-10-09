import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const linkClass =
  "flex w-full font-sans items-center gap-5 font-light px-7 py-2 hover:no-underline active:bg-neutral-600 rounded-sm text-lg";

export default function SidebarLink({ link, hovered, isCollapsed }) {
  const { pathname } = useLocation();
  const decodedPathname = decodeURIComponent(pathname);

  // Handle special case for home page ('/') and check for other paths
  const isActive =
    link.path === "/"
      ? decodedPathname === link.path // Only exact match for the home page
      : decodedPathname === link.path || decodedPathname.startsWith(link.path);

  return (
    <Link
      to={!link.submenu ? link.path : "#"} // Disable navigation if submenu exists
      className={classNames(
        isActive
          ? "bg-[#181C1678] text-white"
          : "text-[#BBBBBB] hover:text-white",
        isCollapsed && "justify-center",
        linkClass
      )}
      onClick={(e) => {
        if (link.submenu) {
          e.preventDefault(); // Prevent click if submenu exists
        }
      }}
    >
      <span className="text-4xl text-white">{link.icon}</span>
      {!isCollapsed && link.label}

      {!isCollapsed &&
        link.submenu &&
        (hovered === link.key ? (
          <MdKeyboardArrowLeft className="absolute right-5" />
        ) : (
          <MdKeyboardArrowRight className="absolute right-5" />
        ))}
    </Link>
  );
}
