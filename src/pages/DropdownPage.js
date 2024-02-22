import { useState } from "react";
import Dropdown from "../components/DropDown";


function DropdownPage() {
  const [optionSelect, setOptionSelect] = useState(null);
  const handleOptionSelect = (option) => {
    setOptionSelect(option);
  }
  const options = [
    {
      label: "Blue",
      value: "blue",
    },
    { label: "Green", value: "green" },
    { label: "Pink", value: "pink" },
  ];
  return <Dropdown value={optionSelect} onChange={handleOptionSelect} options={options} />;
}

export default DropdownPage;
