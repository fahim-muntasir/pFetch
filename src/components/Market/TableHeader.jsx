import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { BsPlusCircleFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiLogoutCircleLine } from "react-icons/ri";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { GoAlertFill } from "react-icons/go";

export default function TableHeader({
  currentPage,
  totalPages,
  rowsPerPage,
  handlePageChange,
  handleRowsPerPageChange,
}) {
  return (
    <div className="px-4 md:px-6 flex flex-wrap justify-between md:justify-end items-center pt-6 md:pt-10 gap-4 md:gap-10">
      <div className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-[#36C770] bg-[#36C77054] py-2 md:py-3 px-4 md:px-5 rounded-full hover:bg-[#36C770] hover:text-white shadow-lg">
        <BsPlusCircleFill className="text-lg md:text-xl" />
        <span>行追加</span>
      </div>
      <div className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-[#EB2E45] bg-[#EA2E4554] py-2 md:py-3 px-4 md:px-5 rounded-full hover:bg-[#EB2E45] hover:text-white shadow-lg">
        <RiDeleteBin6Line className="text-lg md:text-xl" />
        <span>行削除</span>
      </div>
      <div className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-white bg-[#22272B] py-2 md:py-3 px-4 md:px-5 rounded-full hover:bg-[#364149] hover:text-white">
        <RiLogoutCircleLine className="text-lg md:text-xl" />
        <span>インポート</span>
      </div>
      <div className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-white bg-[#22272B] py-2 md:py-3 px-4 md:px-5 rounded-full hover:bg-[#364149] hover:text-white">
        <RiLogoutCircleRLine className="text-lg md:text-xl" />
        <span>エクスポート</span>
      </div>
      <div className="flex items-center gap-3 md:gap-5 bg-[#FD7E145E] h-[52px] md:h-[58px] px-4 md:px-5 rounded-2xl text-white hover:bg-[#FD7E14]">
        <GoAlertFill className="text-lg md:text-xl" />
        <span className="text-xs md:text-base">
          データ確定はTab or Enter押下時
        </span>
      </div>
      <div className="flex gap-10 items-center">
        <div className="flex items-center gap-5 text-white text-lg">
          <MdOutlineKeyboardDoubleArrowLeft
            onClick={() => handlePageChange(currentPage - 1)}
            className={`cursor-pointer ${
              currentPage === 1 ? "text-gray-500" : ""
            }`}
          />
          <span className="bg-[#22272B] h-[42px] w-[52px] flex justify-center items-center rounded">
            {currentPage}
          </span>
          <MdOutlineKeyboardDoubleArrowRight
            onClick={() => handlePageChange(currentPage + 1)}
            className={`cursor-pointer ${
              currentPage === totalPages ? "text-gray-500" : ""
            }`}
          />
        </div>
        <div>
          <select
            value={rowsPerPage}
            onChange={(e) => handleRowsPerPageChange(parseInt(e.target.value))}
            className="h-[42px] w-[101px] bg-[#22272B] text-white rounded px-2"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
      </div>
    </div>
  );
}
