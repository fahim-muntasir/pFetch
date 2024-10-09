import { useState } from "react";
import SidebarLink from "./SidebarLink";
import { Link, useLocation } from "react-router-dom";

import { IoDocumentText, IoMenuSharp } from "react-icons/io5";
import { BiSolidUserAccount } from "react-icons/bi";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { SiNginxproxymanager } from "react-icons/si";
import { IoMdSettings } from "react-icons/io";

import Logo from "../../assets/images/logo.png";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "タスク一覧",
    label: "タスク一覧",
    path: "/",
    icon: <IoDocumentText />,
  },
  {
    key: "サイト毎の設定",
    label: "サイト毎の設定",
    path: "/サイト毎の設定",
    icon: <IoMdSettings />,
    submenu: [
      {
        key: "楽天市場、 楽天ブックス、 楽天ビック",
        label: "楽天市場、 楽天ブックス、 楽天ビック",
        path: "/サイト毎の設定/楽天市場、楽天ブックス、楽天ビック",
      },
      {
        key: "Yahoo!ショッピング、 LOHACO",
        label: "Yahoo!ショッピング、 LOHACO",
        path: "/サイト毎の設定/Yahoo!ショッピング、LOHACO",
      },
      {
        key: "Google Account",
        label: "Google Account",
        path: "/サイト毎の設定/GoogleAccount",
      },
    ],
  },
  {
    key: "アカウント一覧",
    label: "アカウント一覧",
    path: "/アカウント一覧",
    icon: <BiSolidUserAccount />,
    submenu: [
      {
        key: "楽天市場、 楽天ブックス、 楽天ビック",
        label: "楽天市場、 楽天ブックス、 楽天ビック",
        path: "/アカウント一覧/楽天市場、楽天ブックス、楽天ビック",
      },
      {
        key: "Yahoo!ショッピング",
        label: "Yahoo!ショッピング",
        path: "/アカウント一覧/Yahoo!ショッピング",
      },
      { key: "LOHACO", label: "LOHACO", path: "/アカウント一覧/LOHACO" },
    ],
  },
  {
    key: "クレジットカード一覧",
    label: "クレジットカード一覧",
    path: "/クレジットカード一覧",
    icon: <BsCreditCard2FrontFill />,
  },
  {
    key: "Proxy一覧",
    label: "Proxy一覧",
    path: "/Proxy一覧",
    icon: <SiNginxproxymanager />,
  },
];

export default function Sidebar() {
  const [hovered, setHovered] = useState(null);
  const [activeParent, setActiveParent] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false); // State for sidebar collapse
  const { pathname } = useLocation();
  const decodedPathname = decodeURIComponent(pathname);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`bg-[#22272B] ${
        isCollapsed ? "w-20" : "w-80"
      } flex flex-col transition-all duration-100`}
    >
      <div
        className={`flex items-center ${
          isCollapsed ? "justify-center" : "justify-left"
        } px-8 py-3 gap-2`}
      >
        <button onClick={toggleSidebar} className="text-white">
          {isCollapsed ? (
            <IoMenuSharp className="text-4xl" />
          ) : (
            <IoMenuSharp className="text-4xl" />
          )}
        </button>
        {!isCollapsed && <img src={Logo} alt="Logo" className="w-[200px]" />}
      </div>
      <div className="pb-8 flex flex-1 flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <div
            key={link.key}
            className={`relative flex ${
              hovered === link.key || activeParent === link.key
                ? "bg-[#181C1678]"
                : ""
            }`}
            onMouseEnter={() => setHovered(link.key)}
            onMouseLeave={() => setHovered(null)}
          >
            <SidebarLink
              link={link}
              hovered={hovered}
              isCollapsed={isCollapsed}
            />

            {link.submenu &&
              (hovered === link.key || activeParent === link.key) && (
                <div
                  className={`absolute z-10 top-0 ${isCollapsed ? "left-[72px]" : "left-[312px]"} ml-2 bg-[#22272B] w-[380px] shadow-lg`}
                  onMouseEnter={() => setActiveParent(link.key)}
                  onMouseLeave={() => setActiveParent(null)}
                >
                  {link.submenu.map((submenu) => {
                    const isSubmenuActive = decodedPathname === submenu.path;
                    return (
                      <Link
                        key={submenu.key}
                        to={submenu.path}
                        className={` ${
                          isSubmenuActive && "bg-[#181C1678] text-white"
                        } block px-7 py-[12px] text-[#BBBBBB] hover:text-white hover:bg-[#181C1678] text-lg`}
                      >
                        {submenu.label}
                      </Link>
                    );
                  })}
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}
