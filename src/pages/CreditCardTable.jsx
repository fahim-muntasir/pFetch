import { useState } from "react";
import TableHeader from "../components/Market/TableHeader";
import { getTotalPage, getVisibleData } from "../utils/pagination";

export default function CreditCardTable() {
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
                <th scope="col" className="px-4 py-6 w-24">
                  No.
                </th>
                <th scope="col" className="px-4 py-6 w-16">
                  <input
                    id="select-all"
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll} // Toggle all checkboxes
                    className="w-4 h-4 bg-transparent border-2 border-white rounded appearance-none cursor-pointer checked:bg-blue-600 checked:border-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                </th>
                <th scope="col" className="px-4 py-6 w-[8rem]">
                  カード種別
                </th>
                <th scope="col" className="px-4 py-6 text-left">
                  カードNo.
                </th>
                <th scope="col" className="px-4 py-6 text-left">
                  Year(YYYY)
                </th>
                <th scope="col" className="px-4 py-6 text-left">
                  Month(MM)
                </th>
                <th scope="col" className="px-4 py-6 text-left">
                  Security
                </th>
                <th scope="col" className="px-4 py-6 text-left">
                  名前
                </th>
                <th scope="col" className="px-4 py-6 text-left">
                  3D Secure
                </th>
              </tr>
            </thead>
            <tbody>
              {visibleData.map((i) => (
                <tr
                  key={i}
                  className={`${i % 2 === 0 ? "" : "bg-[#22272B78]"} text-lg`}
                >
                  <td className="px-4 py-5">{i + 1}</td>
                  <td className="text-center">
                    <input
                      id={`checkbox-${i}`}
                      type="checkbox"
                      checked={selected.includes(i)}
                      onChange={() => handleCheckboxChange(i)}
                      className="w-4 h-4 bg-transparent border-2 border-white rounded appearance-none cursor-pointer checked:bg-blue-600 checked:border-blue-600 focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-4 py-5">
                    <div>
                      <select
                        value={rowsPerPage}
                        onChange={(e) =>
                          handleRowsPerPageChange(parseInt(e.target.value))
                        }
                        className="h-[28px] w-[101px] bg-[#22272B] text-white rounded px-2"
                      >
                        <option value="VISA">VISA</option>
                        <option value="AMEX">AMEX</option>
                        <option value="Master">Master</option>
                        <option value="JCB">JCB</option>
                      </select>
                    </div>
                  </td>
                  <td className="px-4 py-5 text-left">5324-3800-     -</td>
                  <td className="px-4 py-5 text-left"></td>
                  <td className="px-4 py-5 text-left"></td>
                  <td className="px-4 py-5 text-left"></td>
                  <td className="px-4 py-5 text-left">Kimura</td>
                  <td className="px-4 py-5 text-left"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
