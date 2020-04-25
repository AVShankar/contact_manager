import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faUser,
  faFile,
  faClock,
  faDatabase,
  faCalendar,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="side-bar text-center">
        <ul>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faBars} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faHome} />
            </a>
          </li>
          <li className="active-tab">
            <a href="#">
              <FontAwesomeIcon icon={faUser} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faFile} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faClock} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faDatabase} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faCalendar} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faCog} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
