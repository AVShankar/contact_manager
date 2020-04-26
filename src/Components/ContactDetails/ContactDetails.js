import React from "react";
import "./ContactDetails.css";

class ContactDetails extends React.Component {
  render() {
    const { contactDetails } = this.props;
    return (
      <div className="pt-5">
        <div className="pt-5">
          <div className="card rounded-top">
          {contactDetails !== undefined ? 
            <div className="p-4">
              <div className="d-flex justify-content-center">
                <div className="rounded-circle p-4" style={{backgroundColor: contactDetails.color}}>
                  <h4>{contactDetails.initial}</h4>
                </div>
              </div>
              <div className="p-2 text-center">
                <h4>{contactDetails.fName}</h4>
                <p className="text-muted">{contactDetails.role}</p>
              </div>
              <table className="table table-borderless pt-3">
                <tbody>
                  <tr>
                    <td className="text-muted">Full Name:</td>
                    <td>{contactDetails.fName}</td>
                  </tr>
                  <tr>
                    <td className="text-muted">Email:</td>
                    <td>{contactDetails.email}</td>
                  </tr>
                  <tr>
                    <td className="text-muted">Phone:</td>
                    <td>{contactDetails.phone}</td>
                  </tr>
                  <tr>
                    <td className="text-muted">Company:</td>
                    <td>{contactDetails.company}</td>
                  </tr>
                  <tr>
                    <td className="text-muted">Address:</td>
                    <td>{contactDetails.address}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            : <p>No contacts to display</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default ContactDetails;
