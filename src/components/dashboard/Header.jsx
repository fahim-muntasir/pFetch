import { RiDeleteBin6Line, RiCheckboxBlankFill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa6";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

export default function Header({
  currentPage,
  totalPages,
  rowsPerPage,
  handlePageChange,
  handleRowsPerPageChange,
}) {
  return (
    <div className="px-6 flex justify-end items-center pt-10 gap-16 ">
      <div className="flex gap-10">
        <div className="relative inline-block w-12 h-7">
          <input
            type="checkbox"
            id="flexSwitchCheckDefault02"
            role="switch"
            className="peer appearance-none w-full h-full bg-[#84848454] rounded-full transition-colors cursor-pointer checked:bg-[#36C770A8] focus:outline-none"
          />
          <span className="absolute top-1/2 left-[1px] w-5 h-5 rounded-full bg-white shadow-sm transform -translate-y-1/2 peer-checked:translate-x-6 transition-transform"></span>
        </div>
        <div className="relative inline-block w-12 h-7">
          <input
            type="checkbox"
            id="flexSwitchCheckDefault02"
            role="switch"
            className="peer appearance-none w-full h-full bg-[#84848454] rounded-full transition-colors cursor-pointer checked:bg-[#EB2E45A8] focus:outline-none"
          />
          <span className="absolute top-1/2 left-[1px] w-5 h-5 rounded-full bg-white shadow-sm transform -translate-y-1/2 peer-checked:translate-x-6 transition-transform"></span>
        </div>
      </div>
      <div className="flex gap-10 items-center bg-[#22272B] py-2 px-4 rounded-full">
        <button className="bg-[#36C77054] hover:bg-green-600 text-[#36C770] rounded-full w-[32px] h-[32px]  flex justify-center items-center">
          <FaPlay />
        </button>
        <button className="bg-[#EB2E4554] hover:bg-red-600 text-[#EA2E45] rounded-full w-[32px] h-[32px]  flex justify-center items-center">
          <RiCheckboxBlankFill />
        </button>
        <button className="bg-[#EB2E455E] hover:bg-[#EB2E455E] border border-[#EB2E45] text-white rounded-full w-[32px] h-[32px]  flex justify-center items-center">
          <RiDeleteBin6Line />
        </button>
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
