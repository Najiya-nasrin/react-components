import useSort from "../hooks/use-sort";
import Table from "../Components/Table";
import { BsFillTrash3Fill, BsPencilSquare, BsToggleOn } from "react-icons/bs";

const data = [
  { name: "Orange", color: "bg-orange-500", score: 5 },
  { name: "Apple", color: "bg-red-500", score: 2 },
  { name: "Banana", color: "bg-yellow-500", score: 6 },
  { name: "Lime", color: "bg-green-500", score: 4 },
  { name: "Melon", color: "bg-purple-500", score: 1 },
];

/* TODO:
1. Add Pagination
2. Add edit, toggle, delete functionality
3. Add multiselect functionality
4. Add API data
5. Add better full page table styling
*/

export default function TablePage() {
  const { sortedData, sortColumn } = useSort(data);

  const handleRowSelection = (rowData) => {
    console.log("selected row: ", rowData);
  };

  const handleEdit = (row) => {
    console.log("handleEdit: ", row);
  };

  const handleDelete = (row) => {
    console.log("handleDelete", row);
  };

  const column = [
    {
      title: "Name", //label to display the column title
      key: "name", //unique idenitfier to render the columns
      render: (row) => row.name, //jsx element or just values
      sort: true,
    },
    {
      title: "Color",
      key: "color",
      render: (row) => <div className={`p-2 m-3 ${row.color}`}></div>,
    },
    {
      title: "Score",
      key: "score",
      render: (row) => row.score,
      sort: true,
    },
    {
      title: "Action",
      key: "action",
      render: (row) => (
        <>
          <span className="flex justify-around items-center cursor-pointer">
            <BsPencilSquare onClick={() => handleEdit(row)} />
            <BsFillTrash3Fill onClick={() => handleDelete(row)} />
          </span>
        </>
      ),
    },
    {
      title: "",
      key: "toggle",
      render: () => (
        <>
          <span className="flex justify-around items-center cursor-pointer">
            <BsToggleOn />
          </span>
        </>
      ),
    },
  ];

  return (
    <div>
      <Table
        multiselect
        data={sortedData ? sortedData : data}
        columns={column}
        onRowClick={handleRowSelection}
        pagination={""}
        sortColumn={sortColumn}
      />
    </div>
  );
}
