import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./index.css"; // Import your custom CSS

const ThreeDotsAdminDropdown = ({
  updateTitleInput,
  updateAboutInput,
  returnToDotsIcon,
}) => {
  const [toggleTitleInput, setToggleTitleInput] = useState(true);
  const [toggleAboutInput, setToggleAboutInput] = useState(true);

  useEffect(() => {
    setToggleTitleInput(!returnToDotsIcon);
  });
  const handleEditTitleClick = (bool) => {
    updateTitleInput(bool);
    setToggleTitleInput(!toggleTitleInput);
  };

  const handleEditAboutClick = (bool) => {
    updateAboutInput(bool);
    setToggleAboutInput(!toggleAboutInput);
  };

  return (
    <Dropdown>
      {toggleTitleInput ? (
        <Dropdown.Toggle
          variant="light"
          id="dropdown-menu"
          className="custom-dropdown-toggle"
        >
          <img
            className="three-dots"
            src="src\assets\images\three-dots.png"
            alt="Three Dots"
          />
        </Dropdown.Toggle>
      ) : (
        <span
          onClick={() => handleEditTitleClick(toggleTitleInput)}
          style={{ cursor: "pointer" }}
        >
          ✖
        </span>
      )}

      <Dropdown.Menu>
        <Dropdown.Item
          key={1}
          onClick={() => handleEditTitleClick(toggleTitleInput)}
        >
          {"עריכת כותרת"}
        </Dropdown.Item>
        
        <Dropdown.Item key={2}>{"עריכת תמונות"}</Dropdown.Item>
        <Dropdown.Item
          key={3}
          onClick={() => handleEditAboutClick(toggleAboutInput)}
        >
          {"עריכת אודות"}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ThreeDotsAdminDropdown;
