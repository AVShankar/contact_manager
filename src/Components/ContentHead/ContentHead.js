import React from "react";
import './ContentHead.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faSortDown } from "@fortawesome/free-solid-svg-icons";

class ContentHead extends React.Component {
  render() {
    return (
      <div className="row align-items-center">
        <div className="col-7">
          <div className="d-flex justify-content-center align-items-center">
            <div>
              <FontAwesomeIcon icon={faAddressBook} className="fa-2x customize-icon" />
            </div>
            <div className="pl-3">
              <h4 className="font-weight-bold">Contacts</h4>
              <p className="text-muted">Welcome to FlatCRM Contact page</p>
            </div>
          </div>
        </div>
        <div className="col-5">
          <p className="text-muted text-center">
            Sort by:{" "}
            <span className="font-weight-bold">
              Date Created &nbsp;
              <FontAwesomeIcon icon={faSortDown} />
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default ContentHead;
