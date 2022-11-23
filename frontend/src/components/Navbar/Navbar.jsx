import { slide as Menu } from "react-burger-menu";
import "./Navbar.css";
import React from "react";

export default function Navabar() {
  //   const [isOpen, setIsOpen] = React.useState();
  //   const [isClose, setIsClose] = React.useState();

  //   const handleOnOpen = () => {
  //     setIsOpen(!isOpen);
  //   };
  //   const handleOnClose = () => {
  //     setIsClose(!isClose);
  //   };

  const [open, setOpen] = React.useState();

  const handleChange = () => {
    setOpen(!open);
  };

  return (
    <Menu isOpen={open} onClick={handleChange} right noOverlay>
      <ul>
        <li>
          <a href="#hourly">Detail hourly forecast</a>
        </li>
        <li>
          <a href="#weekly">Detail weekly forecast</a>
        </li>
        <li>
          <a href="#sun_moon">Sun and Moon time</a>
        </li>
      </ul>
    </Menu>
  );
}
