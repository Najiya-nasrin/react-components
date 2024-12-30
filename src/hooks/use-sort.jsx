import { useState } from "react";

export default function useSort(data) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const sortColumn = (column) => {
    if (column.key !== sortBy && sortOrder) {
      setSortOrder(null);
      setSortBy(null);
      return;
    }
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(column.key);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(column.key);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
    console.log(column);
  };

  const sortedData =
    sortOrder !== null
      ? [...data].sort((a, b) => {
          const renderValue = sortOrder === "asc" ? 1 : -1;
          if (typeof a[sortBy] === "string") {
            return a[sortBy].localeCompare(b[sortBy]) * renderValue;
          } else {
            return (a[sortBy] - b[sortBy]) * renderValue;
          }
        })
      : [...data];

  return {
    sortedData,
    sortColumn,
  };
}
