import DropDown from "../Components/DropDown";
import { useState } from "react";

function DropDownPage() {
  const [selected, setSelected] = useState(null);

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
    { label: "White", value: "white" },
  ];

  const getSelectedOption = (option) => {
    console.log("getSelectedOption", option);
    setSelected(option);
  };

  return (
    <div className="flex">
      <DropDown
        options={options}
        onChange={getSelectedOption}
        value={selected}
      />
    </div>
  );
}

export default DropDownPage;
