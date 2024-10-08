export const getTotalPage = (tableLength, rowsPerPage) => {
  return Math.ceil(tableLength / rowsPerPage);
}

export const getVisibleData = (tableLength, rowsPerPage, currentPage) => {
  const startIndex = (currentPage - 1) * rowsPerPage;
  const visibleData = Array.from(
    { length: rowsPerPage },
    (_, i) => startIndex + i
  ).filter((i) => i < tableLength);

  return visibleData;
}