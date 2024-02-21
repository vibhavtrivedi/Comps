import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    console.log("opt", option);
    setIsOpen(false);
    onChange(option);
  };
  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="w-48 relative">
      {
        <div
          className="flex justify-between cursor-pointer items-center border rounded p-3 shadow bg-white w-full"
          onClick={handleClick}
        >
          {value?.label || "select..."}
          <GoChevronDown className="text-lg" />
        </div>
      }
      {isOpen && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {renderedOptions}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
