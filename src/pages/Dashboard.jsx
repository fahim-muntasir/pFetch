import { useState } from "react";
import { RiDeleteBin6Line, RiCheckboxBlankFill } from "react-icons/ri";
import { toast } from "react-toastify";
import { FaPlay } from "react-icons/fa6";
import Header from "../components/dashboard/Header";
import { getTotalPage, getVisibleData } from "../utils/pagination";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [isPlay, setIsPlay] = useState([]); // Array to hold indices of active play rows
  const [tableLength] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();

  const notify = () => toast.success("Deleted successfully!");

  const handleNavigation = () => {
    navigate("/Webサイト選択");
  };

  // Calculate total pages
  const totalPages = getTotalPage(tableLength, rowsPerPage);

  // Handle individual checkbox selection
  const handleCheckboxChange = (index, e) => {
    e.stopPropagation();
    setSelected((prevSelected) => {
      if (prevSelected.includes(index)) {
        return prevSelected.filter((item) => item !== index);
      } else {
        return [...prevSelected, index];
      }
    });
  };

  // Handle "select all" checkbox
  const handleSelectAll = () => {
    if (selectAll) {
      setSelected([]);
    } else {
      setSelected(Array.from({ length: tableLength }, (_, i) => i));
    }
    setSelectAll(!selectAll);
  };

  // Handle page change
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // Handle rows per page change
  const handleRowsPerPageChange = (rows) => {
    setRowsPerPage(rows);
    setCurrentPage(1);
  };

  // Toggle play/pause for a row
  const handlePlayToggle = (index) => {
    if (isPlay.includes(index)) {
      // If the row is already playing, remove it from the play list
      setIsPlay((prevPlay) => prevPlay.filter((item) => item !== index));
    } else {
      // If the row is not playing, add it to the play list
      setIsPlay((prevPlay) => [...prevPlay, index]);
    }
  };

  // Get the current data for the page
  const visibleData = getVisibleData(tableLength, rowsPerPage, currentPage);

  return (
    <div className="flex flex-col gap-4">
      <Header
        currentPage={currentPage}
        totalPages={totalPages}
        rowsPerPage={rowsPerPage}
        handlePageChange={handlePageChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
      />
      <div className="p-6 text-gray-200">
        <div className="overflow-x-auto rounded-t-3xl">
          <table className="w-full text-sm text-center text-gray-400">
            <thead className="font-sans text-lg uppercase bg-[#22272B] text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-6">
                  No.
                </th>
                <th scope="col" className="px-4 py-6 text-center ">
                  <input
                    id="select-all"
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll} // Toggle all checkboxes
                    className="w-4 h-4 bg-transparent border-2 border-white rounded appearance-none cursor-pointer checked:bg-blue-600 checked:border-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                </th>
                <th scope="col" className="px-4 py-6">
                  Website
                </th>
                <th scope="col" className="px-4 py-6">
                  商品名
                </th>
                <th scope="col" className="px-4 py-6">
                  Acch.No.
                </th>
                <th scope="col" className="px-4 py-6">
                  Cch.No.
                </th>
                <th scope="col" className="px-4 py-6">
                  PA
                </th>
                <th scope="col" className="px-4 py-6">
                  タイマー開始時刻
                </th>
                <th scope="col" className="px-4 py-6">
                  進歩
                </th>
                <th scope="col" className="px-4 py-6">
                  ログ
                </th>
                <th scope="col" className="px-4 py-6">
                  Switch
                </th>
                <th scope="col" className="px-4 py-6">
                  Play
                </th>
                <th scope="col" className="px-4 py-6">
                  Trash
                </th>
              </tr>
            </thead>
            <tbody>
              {visibleData.map((i) => (
                <tr
                  key={i}
                  className={`${
                    i % 2 === 0 ? "" : "bg-[#22272B78]"
                  } text-lg cursor-pointer`}
                >
                  <td className="px-4 py-5" onClick={handleNavigation}>
                    {i + 1}
                  </td>
                  <td className="text-center">
                    <input
                      id={`checkbox-${i}`}
                      type="checkbox"
                      checked={selected.includes(i)} // Check if the row is selected
                      onChange={(e) => handleCheckboxChange(i, e)} // Handle selection change
                      className="w-4 h-4 bg-transparent border-2 border-white rounded appearance-none cursor-pointer checked:bg-blue-600 checked:border-blue-600 focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-4 py-5" onClick={handleNavigation}>
                    楽天市場
                  </td>
                  <td className="px-4 py-5" onClick={handleNavigation}>
                    商品名
                  </td>
                  <td className="px-4 py-5" onClick={handleNavigation}>
                    0
                  </td>
                  <td className="px-4 py-5" onClick={handleNavigation}>
                    1
                  </td>
                  <td className="px-4 py-5" onClick={handleNavigation}>
                    0
                  </td>
                  <td className="px-4 py-5" onClick={handleNavigation}>
                    00:00:00
                  </td>
                  <td className="px-4 py-5" onClick={handleNavigation}>
                    {/* Progress Bar */}
                    <div className="w-full overflow-hidden bg-gray-600 rounded-full h-2.5">
                      <div
                        className="bg-green-500 h-2.5 rounded-full"
                        style={{ width: `${(i + 1) * 10}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-4 py-5" onClick={handleNavigation}></td>
                  <td className="px-4 py-5">
                    <div className="relative inline-block w-12 h-6">
                      <input
                        type="checkbox"
                        id={`flexSwitchCheckDefault${i}`}
                        role="switch"
                        className="peer appearance-none w-9 h-[17px] bg-[#84848454] rounded-full transition-colors cursor-pointer checked:bg-[#36C7707A] focus:outline-none mb-[1px]"
                      />
                      <span className="absolute top-1/2 left-[5px] w-4 h-4 rounded-full bg-white shadow-md transform -translate-y-1/2 peer-checked:translate-x-6 transition-transform"></span>
                    </div>
                  </td>
                  <td className="px-4 py-5 flex justify-center">
                    {isPlay.includes(i) ? (
                      <button
                        className="bg-[#EB2E4554] hover:bg-red-600 text-[#EA2E45] rounded-full w-[27px] h-[27px] flex justify-center items-center pl-[2px]"
                        onClick={() => handlePlayToggle(i)} // Stop playing, remove from play array
                      >
                        <RiCheckboxBlankFill />
                      </button>
                    ) : (
                      <button
                        className="bg-[#36C77054] hover:bg-green-600 text-[#36C770] rounded-full w-[27px] h-[27px] flex justify-center items-center pl-[3px]"
                        onClick={() => handlePlayToggle(i)} // Start playing, add to play array
                      >
                        <FaPlay />
                      </button>
                    )}
                  </td>
                  <td className="px-4 py-5">
                    <div className="w-full flex justify-center">
                      <button
                        className="bg-[#EB2E4554] hover:bg-red-600 text-[#EA2E45] rounded-full w-[27px] h-[27px] flex justify-center items-center"
                        onClick={notify}
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
