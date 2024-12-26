import { useState, useRef, useEffect } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Panel from "./Panel";

export default function DropDown({ options, onChange, value }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  const handleDropDownExpansion = () => {
    setIsOpen(!isOpen);
  };

  const selectedOption = (selected) => {
    setIsOpen(false);
    onChange(selected);
  };

  useEffect(() => {
    const handleClick = (event) => {
      if (!divEl?.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleDropDownExpansion}
      >
        {value?.label || "Select.."}
        <span>
          <MdOutlineArrowDropDown />
        </span>
      </Panel>

      {isOpen && (
        <Panel className="absolute top-full">
          {options.map((option) => (
            <div
              className="hover:bg-sky-100 rounded cursor-pointer p-1"
              onClick={() => selectedOption(option)}
              key={option.value}
            >
              {option.label}
            </div>
          ))}
        </Panel>
      )}
    </div>
  );
}
