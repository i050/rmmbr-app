import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./index.css"; // Import your custom CSS

const ThreeDotsAdminDropdown = ({ updateTitleInput }) => {
  const [toggleInput, setToggleInput] = useState(true);
  const handleEditTitleClick = (bool) => {
   
    updateTitleInput(bool);
    setToggleInput(!toggleInput);
  };

  return (
    <Dropdown>
      {toggleInput? <Dropdown.Toggle
        variant="light"
        id="dropdown-menu"
        className="custom-dropdown-toggle"
      ><img
      className="three-dots"
      src="src\assets\images\three-dots.png"
      alt="Three Dots"
    /></Dropdown.Toggle>:<span style={{cursor: "pointer"}} onClick={() => handleEditTitleClick(toggleInput)}>✖</span>}
       
      
      <Dropdown.Menu>
        <Dropdown.Item key={1} onClick={() => handleEditTitleClick(toggleInput)}>
          {"עריכת כותרת"}
        </Dropdown.Item>
        <Dropdown.Item key={2}>{"עריכת תמונות"}</Dropdown.Item>
        <Dropdown.Item key={3}>{"עריכת אודות"}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ThreeDotsAdminDropdown;
