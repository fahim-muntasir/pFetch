import { useState } from "react";
import TableHeader from "../components/Market/TableHeader";
import { getTotalPage, getVisibleData } from "../utils/pagination";

export default function MarketTable() {
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [tableLength] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Calculate total pages
  const totalPages = getTotalPage(tableLength, rowsPerPage);

  // Handle individual checkbox selection
  const handleCheckboxChange = (index) => {
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
    setSelectAll(false);
  };

  // Handle rows per page change
  const handleRowsPerPageChange = (rows) => {
    setRowsPerPage(rows);
    setCurrentPage(1);
  };

  // Get the current data for the page
  const visibleData = getVisibleData(tableLength, rowsPerPage, currentPage);

  return (
    <div className="flex flex-col gap-4">
      <TableHeader
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
                <th scope="col" className="px-4 py-5 w-24">
                  No.
                </th>
                <th scope="col" className="px-4 py-5 w-16">
                  <input
                    id="select-all"
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll} // Toggle all checkboxes
                    className="w-4 h-4 bg-transparent border-2 border-white rounded appearance-none cursor-pointer checked:bg-blue-600 checked:border-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                </th>
                <th scope="col" className="px-4 py-5 w-96">
                  ユーザID
                </th>
                <th scope="col" className="px-4 py-5 text-left">
                  パスワード
                </th>
              </tr>
            </thead>
            <tbody>
              {visibleData.map((i) => (
                <tr
                  key={i}
                  className={`${i % 2 === 0 ? "" : "bg-[#22272B78]"} text-lg`}
                >
                  <td className="px-4 py-4">{i + 1}</td>
                  <td className="text-center">
                    <input
                      id={`checkbox-${i}`}
                      type="checkbox"
                      checked={selected.includes(i)} // Check if the row is selected
                      onChange={() => handleCheckboxChange(i)} // Handle selection change
                      className="w-4 h-4 bg-transparent border-2 border-white rounded appearance-none cursor-pointer checked:bg-blue-600 checked:border-blue-600 focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-4 py-4">testsample@sample.com</td>
                  <td className="px-4 py-4 text-left">testsample1234</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
