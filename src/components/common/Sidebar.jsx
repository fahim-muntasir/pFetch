import { useState } from 'react';
import SidebarLink from './SidebarLink';
import { Link, useLocation } from 'react-router-dom';

import { IoDocumentText   } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

import Logo from "../../assets/images/logo.png";
import Icon1 from "../../assets/images/icon1.svg";
import Icon2 from "../../assets/images/icon2.svg";
import Icon3 from "../../assets/images/icon3.svg";
import Icon4 from "../../assets/images/icon4.svg";
import Icon5 from "../../assets/images/icon5.svg";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: 'タスク一覧',
    label: 'タスク一覧',
    path: '/',
    icon: <IoDocumentText className='text-[41px] text-white mr-3' />,
  },
  {
    key: 'サイト毎の設定',
    label: 'サイト毎の設定',
    path: '/サイト毎の設定',
    icon: <IoMdSettings  className='text-[41px] text-white mr-3' />,
    submenu: [
      { key: '楽天市場、 楽天ブックス、 楽天ビック', label: '楽天市場、 楽天ブックス、 楽天ビック', path: '/サイト毎の設定/楽天市場、楽天ブックス、楽天ビック' },
      { key: 'Yahoo!ショッピング、 LOHACO', label: 'Yahoo!ショッピング、 LOHACO', path: '/サイト毎の設定/Yahoo!ショッピング、LOHACO' },
      { key: 'Google Account', label: 'Google Account', path: '/サイト毎の設定/GoogleAccount' },
    ],
  },
  {
    key: 'アカウント一覧',
    label: 'アカウント一覧',
    path: '/アカウント一覧',
    icon: <img src={Icon3} alt="icon3" className="h-[37px] w-[37px] mr-3" />,
	submenu: [
		{ key: '楽天市場、 楽天ブックス、 楽天ビック', label: '楽天市場、 楽天ブックス、 楽天ビック', path: '/アカウント一覧/楽天市場、楽天ブックス、楽天ビック' },
		{ key: 'Yahoo!ショッピング', label: 'Yahoo!ショッピング', path: '/アカウント一覧/Yahoo!ショッピング' },
		{ key: 'LOHACO', label: 'LOHACO', path: '/アカウント一覧/LOHACO' },
	],
  },
  {
    key: 'クレジットカード一覧',
    label: 'クレジットカード一覧',
    path: '/クレジットカード一覧',
    icon: <img src={Icon4} alt="icon4" className="h-[39px] w-[39px] mr-3" />,
  },
  {
    key: 'Proxy一覧',
    label: 'Proxy一覧',
    path: '/Proxy一覧',
    icon: <img src={Icon5} alt="icon5" className="h-[39px] w-[39px] mr-3" />,
  },
];

export default function Sidebar() {
  const [hovered, setHovered] = useState(null); // Track which parent link is hovered
  const [activeParent, setActiveParent] = useState(null); // Track which submenu's parent is active
  const { pathname } = useLocation();
  const decodedPathname = decodeURIComponent(pathname);

  return (
    <div className="bg-[#22272B] w-80 flex flex-col">
      <div className="flex items-center gap-2 px-1 py-3">
        <img src={Logo} alt="Logo" className="w-[298px]" />
      </div>
      <div className="pb-8 flex flex-1 flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <div
            key={link.key}
            className={`relative flex ${hovered === link.key || activeParent === link.key ? 'bg-[#181C1678]' : ''}`}
            onMouseEnter={() => setHovered(link.key)}
            onMouseLeave={() => setHovered(null)}
          >
            <SidebarLink link={link} hovered={hovered} />

            {link.submenu && (hovered === link.key || activeParent === link.key) && (
              <div
                className="absolute z-10 top-0 left-[312px] ml-2 bg-[#22272B] w-[380px] shadow-lg"
                onMouseEnter={() => setActiveParent(link.key)}
                onMouseLeave={() => setActiveParent(null)}
              >
                {link.submenu.map((submenu) => {
                  const isSubmenuActive = decodedPathname === submenu.path;
                  return (
                    <Link
                      key={submenu.key}
                      to={submenu.path}
                      className={` ${isSubmenuActive && "bg-[#181C1678] text-white"} block px-7 py-[15px] text-[#BBBBBB] hover:text-white hover:bg-[#181C1678] text-lg`}
                    >
                      {submenu.label}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
