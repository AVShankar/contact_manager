import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./ContactList.css";

class ContentList extends React.Component {
  render() {
    return (
      <div className="p-3">
        <div className="d-flex justify-content-around pl-5">
          <div className="search-bar d-flex justify-content-between align-items-center">
            <input
              type="text"
              className="no-outline"
              placeholder="Search contacts"
            />
            <span>
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
          <button className="btn btn-customize">+ Add Contact</button>
        </div>
        <div className="pl-5 pt-3">
          <table className="table table-borderless">
            <thead className="thead-light">
              <tr>
                <th scope="col">+</th>
                <th scope="col" className="text-muted">Basic Info</th>
                <th scope="col" className="text-muted">Company</th>
                <th scope="col" className="text-muted">Message</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                    <input type="checkbox"/>
                </th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ContentList;
