import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./Containers/Navbar/Navbar";
import Sidebar from "./Containers/Sidebar/Sidebar";
import Content from "./Containers/Content/Content";

class App extends React.Component {
  render() {
    return (
      <div className="background-container">
        <div className="container-fluid">
          <Navbar />
          <div className="wrapper">
            <div className="sidebar">
              <Sidebar />
            </div>
            <div className="content">
              <Content />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
