import { FaArrowsAltV } from "react-icons/fa";

export default function Table({
  data,
  columns,
  onRowClick,
  pagination,
  multiselect,
  actionBar,
  sortColumn,
}) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              {" "}
              {multiselect && (
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
              )}
            </th>
            {columns.map((column) => (
              <th
                className={column.sort && `flex items-center`}
                key={column.key}
              >
                {column.sort && (
                  <>
                    <FaArrowsAltV
                      className="cursor-pointer"
                      onClick={() => sortColumn(column)}
                    />
                  </>
                )}
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr onClick={() => onRowClick(row)} key={row.name}>
              {multiselect && (
                <td>
                  {" "}
                  <input type="checkbox" />
                </td>
              )}
              {columns.map((column, index) => (
                <td key={`${row[column.key]}-${index}`}>
                  {column.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button disabled> Previous </button>
        {data.length}
        <button> Next</button>
      </div>
    </div>
  );
}
