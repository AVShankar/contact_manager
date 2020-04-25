import React from "react";
import ContentHead from "../../Components/ContentHead/ContentHead";
import ContentList from "../../Components/ContactList/ContactList";
import ContactDetails from "../../Components/ContactDetails/ContactDetails";

class Content extends React.Component {
  render() {
    return (
      <div className="container p-5 row">
        <div className="col-md-7 col-sm-12">
          <ContentHead />
          <ContentList />
        </div>
        <div className="col-md-5 col-sm-12 d-flex align-items-center">
          <ContactDetails />
        </div>
      </div>
    );
  }
}

export default Content;
