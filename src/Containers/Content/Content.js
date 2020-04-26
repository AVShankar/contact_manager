import React from "react";
import ContentList from "../../Components/ContactList/ContactList";

class Content extends React.Component {

  render() {
    return (
      <div className="container p-5">
        <ContentList />
      </div>
    );
  }
}

export default Content;
