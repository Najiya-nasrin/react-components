import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { useState } from "react";

export default function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  const renderedElements = items.map((item, index) => {
    if (expandedIndex === index) item.isExpanded = true;
    else item.isExpanded = false;

    return (
      <div key={item.id}>
        <div
          onClick={() => handleClick(index)}
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
        >
          {item.label}{" "}
          <span className="text-2xl">
            {item.isExpanded ? (
              <MdOutlineKeyboardArrowDown />
            ) : (
              <MdOutlineKeyboardArrowLeft />
            )}
          </span>
        </div>
        {item.isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedElements}</div>;
}
