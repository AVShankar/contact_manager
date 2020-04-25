import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faEnvelope,
  faSortDown,
  faBell
} from "@fortawesome/free-solid-svg-icons";

class Navbar extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-between p-2 shadow">
        <div className="pl-5">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="nav-list">
          <ul className="d-flex justify-content-between">
            <li>+Add</li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
            </li>
            <li>
              Mark Hendry &nbsp;
              <FontAwesomeIcon icon={faSortDown} />
            </li>
            <li>
              <FontAwesomeIcon icon={faBell} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
