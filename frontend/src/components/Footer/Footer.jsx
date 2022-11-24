import "./Footer.css";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Footer() {
  return (
    <div className="footer-body">
      <p className="provided-by"> Data provided by OpenWeather</p>

      <Popup
        className="pop-up"
        position="top center"
        trigger={<p className="made-with-love"> Made with 💙</p>}
      >
        <div className="my-popup-content">
          <p>Development Team 👨‍💻</p>
          <ul>
            <li>Olga Dobrovolska</li>
            <li>Vitalii Yurchenko</li>
            <li>Olena Shuliakovska</li>
            <li>Valeria Kurylko</li>
          </ul>
        </div>
      </Popup>
    </div>
  );
}

export default Footer;
