import { slide as Menu } from "react-burger-menu";
import "./Navbar.css";
import React from "react";

export default function Navabar() {
  const [open, setOpen] = React.useState();

  const handleChange = () => {
    setOpen(!open);
  };

  return (
    <Menu isOpen={handleChange} right noOverlay>
      <ul>
        <li>
          <a onClick={handleChange} href="#hourly">
            Detail hourly forecast
          </a>
        </li>
        <li>
          <a onClick={handleChange} href="#weekly">
            Detail weekly forecast
          </a>
        </li>
        <li>
          <a onClick={handleChange} href="#sun_moon">
            Sun and Moon time
          </a>
        </li>
      </ul>
    </Menu>
  );
}
