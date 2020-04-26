import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCommentDots,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./ContactList.css";
import data from "../../data.json";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import $ from "jquery";
import ContentHead from "../ContentHead/ContentHead";
import ContactDetails from "../ContactDetails/ContactDetails";

class ContentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      addContactModal: false,
      viewContact: "",
      count: 6,
    };
  }

  componentDidMount() {
    this.setState({
      contacts: data.contacts,
      viewContact: data.contacts[0],
    });
  }

  addContact() {
    this.setState({
      addContactModal: true,
    });
    $(document).ready(function () {
      $(".input").focus(function () {
        $(this).parent().find(".label-txt").addClass("label-active");
      });

      $(".input").focusout(function () {
        if ($(this).prop("required")) {
          if ($(this).val() === "") {
            $(this).parent().find(".label-txt").removeClass("label-active");
            $(this).parent().find(".line-box").addClass("line-red");
          } else {
            $(this).parent().find(".line-box").removeClass("line-red");
          }
        } else {
          if ($(this).val() === "") {
            $(this).parent().find(".label-txt").removeClass("label-active");
          }
        }
      });
    });
  }

  detailedView(contact) {
    this.setState({
      viewContact: contact,
    });
  }

  createNewContact = (e) => {
    const { contacts, count } = this.state;
    e.preventDefault();
    var name = $("#fName").val();
    var initials = name.match(/\b\w/g) || [];
    initials = (
      (initials.shift() || "") + (initials.pop() || "")
    ).toUpperCase();
    const CSS_COLOR_NAMES = [
      "AliceBlue",
      "AntiqueWhite",
      "Aqua",
      "Aquamarine",
      "Azure",
      "Beige",
      "Bisque",
      "Black",
      "BlanchedAlmond",
      "Blue",
      "BlueViolet",
      "Brown",
      "BurlyWood",
      "CadetBlue",
      "Chartreuse",
      "Chocolate",
      "Coral",
      "CornflowerBlue",
      "Cornsilk",
      "Crimson",
      "Cyan",
      "DarkBlue",
      "DarkCyan",
      "DarkGoldenRod",
      "DarkGray",
      "DarkGrey",
      "DarkGreen",
      "DarkKhaki",
      "DarkMagenta",
      "DarkOliveGreen",
      "DarkOrange",
      "DarkOrchid",
      "DarkRed",
      "DarkSalmon",
      "DarkSeaGreen",
      "DarkSlateBlue",
      "DarkSlateGray",
      "DarkSlateGrey",
      "DarkTurquoise",
      "DarkViolet",
      "DeepPink",
      "DimGray",
      "DimGrey",
      "DodgerBlue",
      "FireBrick",
      "FloralWhite",
      "ForestGreen",
      "Fuchsia",
      "Gainsboro",
      "GhostWhite",
      "Gold",
      "GoldenRod",
      "Gray",
      "Grey",
      "Green",
      "GreenYellow",
      "HoneyDew",
      "IndianRed",
      "Indigo",
      "Ivory",
      "Khaki",
      "Lavender",
      "LavenderBlush",
      "LawnGreen",
      "LemonChiffon",
      "LightBlue",
      "LightCoral",
      "LightCyan",
      "LightGoldenRodYellow",
      "LightGray",
      "LightGrey",
      "LightPink",
      "LightSalmon",
      "LightSeaGreen",
      "LightSkyBlue",
      "LightSlateGray",
      "LightSlateGrey",
      "LightSteelBlue",
      "LightYellow",
      "Lime",
      "LimeGreen",
      "Linen",
      "Magenta",
      "Maroon",
      "MediumAquaMarine",
      "MediumBlue",
      "MediumOrchid",
      "MediumPurple",
      "MediumSeaGreen",
      "MediumSlateBlue",
      "MediumSpringGreen",
      "MediumTurquoise",
      "MediumVioletRed",
      "MidnightBlue",
      "MintCream",
      "MistyRose",
      "Moccasin",
      "NavajoWhite",
      "Navy",
      "OldLace",
      "Olive",
      "OliveDrab",
      "Orange",
      "Orchid",
      "PaleGoldenRod",
      "PaleGreen",
      "PaleTurquoise",
      "PaleVioletRed",
      "PapayaWhip",
      "PeachPuff",
      "Peru",
      "Pink",
      "Plum",
      "PowderBlue",
      "Purple",
      "RebeccaPurple",
      "Red",
      "RosyBrown",
      "RoyalBlue",
      "SaddleBrown",
      "Salmon",
      "SandyBrown",
      "SeaGreen",
      "SeaShell",
      "Sienna",
      "Silver",
      "SkyBlue",
      "SlateBlue",
      "SlateGray",
      "SlateGrey",
      "Snow",
      "SpringGreen",
      "SteelBlue",
      "Tan",
      "Teal",
      "Thistle",
      "Tomato",
      "Turquoise",
      "Violet",
      "Wheat",
      "White",
      "WhiteSmoke",
      "Yellow",
      "YellowGreen",
    ];
    let color =
      CSS_COLOR_NAMES[Math.floor(Math.random() * CSS_COLOR_NAMES.length)];
    let newContact = {
      fName: $("#fName").val(),
      email: $("#email").val(),
      phone: $("#phone").val(),
      company: $("#company").val(),
      address: $("#address").val(),
      role: $("#role").val(),
      initial: initials,
      color: color,
      id: count,
    };
    this.setState({
      contacts: [...contacts, newContact],
      count: count + 1,
    });
    this.onCloseModal();
  };

  onCloseModal = () => {
    this.setState({
      addContactModal: false,
    });
  };

  resetView = () => {
    const { contacts } = this.state;
    this.setState({
      viewContact: contacts[0]
    })
  }

  handleDelete(contact){
    const { contacts } = this.state;
    console.log('delete invoked')
    this.setState({
      contacts: contacts.filter(i => i !== contact)
    }, () => this.resetView())
  }

  render() {
    const { contacts, addContactModal, viewContact } = this.state;

    return (
      <div className="row">
        <div className="col-md-7 col-sm-12">
          <ContentHead />
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
              <button
                className="btn btn-customize"
                onClick={this.addContact.bind(this)}
              >
                + Add Contact
              </button>
            </div>
            <div className="pl-5 pt-3">
              <table className="table table-borderless">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">+</th>
                    <th scope="col" className="text-muted">
                      Basic Info
                    </th>
                    <th scope="col" className="text-muted">
                      Company
                    </th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.length !== 0 ? contacts.map((contact) => {
                    return (
                      <tr key={contact.id} className="tr-highlight">
                        <th
                          scope="row"
                          onClick={this.detailedView.bind(this, contact)}
                        >
                          <input type="checkbox" id={contact.id} />
                        </th>
                        <td onClick={this.detailedView.bind(this, contact)}>
                          <div className="row">
                            <div className="col-4">
                              <div
                                className="rounded-circle p-3 d-flex justify-content-center"
                                style={{ backgroundColor: contact.color }}
                              >
                                <h6>{contact.initial}</h6>
                              </div>
                            </div>
                            <div className="col-8">
                              <h6>{contact.fName}</h6>
                              <p className="text-muted">{contact.email}</p>
                            </div>
                          </div>
                        </td>
                        <td onClick={this.detailedView.bind(this, contact)}>
                          {contact.company}
                        </td>
                        <td>
                          <FontAwesomeIcon
                            icon={faCommentDots}
                            className="fa-message"
                          />{" "}
                          &nbsp;
                          <FontAwesomeIcon
                            icon={faTimes}
                            className="fa-times"
                            onClick={this.handleDelete.bind(this, contact)}
                          />
                        </td>
                      </tr>
                    )
                  }): <tr><td>No Contacts to display</td></tr>
                }
                </tbody>
              </table>
            </div>
            <div>
              <Modal
                open={addContactModal}
                onClose={this.onCloseModal}
                center={true}
                showCloseIcon
              >
                <div className="container p-5">
                  <h3 className="text-muted text-center">Create new contact</h3>
                  <form className="form">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            <p className="label-txt">Full Name* :</p>
                            <input
                              type="text"
                              className="input"
                              id="fName"
                              required
                            />
                            <div className="line-box">
                              <div className="line"></div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            <p className="label-txt">Email :</p>
                            <input type="text" className="input" id="email" />
                            <div className="line-box">
                              <div className="line"></div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            <p className="label-txt">Phone* :</p>
                            <input
                              type="text"
                              className="input"
                              id="phone"
                              required
                            />
                            <div className="line-box">
                              <div className="line"></div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            <p className="label-txt">Company :</p>
                            <input type="text" className="input" id="company" />
                            <div className="line-box">
                              <div className="line"></div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            <p className="label-txt">Address :</p>
                            <input type="text" className="input" id="address" />
                            <div className="line-box">
                              <div className="line"></div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            <p className="label-txt">Role :</p>
                            <input type="text" className="input" id="role" />
                            <div className="line-box">
                              <div className="line"></div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        id="createContact"
                        className="btn btn-customize"
                        onClick={this.createNewContact}
                      >
                        Create
                      </button>
                    </div>
                  </form>
                </div>
              </Modal>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-sm-12 pt-5">
          <ContactDetails contactDetails={viewContact} />
        </div>
      </div>
    );
  }
}

export default ContentList;
