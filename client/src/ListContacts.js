import React, { Component } from "react";
import PropTypes from "prop-types";

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };
  state = {
    query: "",
  };

  updateQuery = (query) => {
    this.setState({
      query: query.trim(),
    });
  };

  clearQuery = () => {
    this.updateQuery("");
  };
  render() {
    const { query } = this.state;
    const { contacts, onDeleteContact } = this.props;

    const showingContacts =
      query === ""
        ? contacts
        : contacts.filter((c) =>
            c.name.toLowerCase().includes(query.toLowerCase())
          );
    return (
      <>
        <div className="list-contacts">
          <div className="list-contacts-top">
            <input
              className="search-contacts"
              type="text"
              placeholder="Search Contacts"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>

          {showingContacts.length !== contacts.length && (
            <div className="showing-contacts">
              <span> Now Showing {showingContacts.length}</span>of{" "}
              {contacts.length}
              <button onClick={this.clearQuery}>Show all</button>
            </div>
          )}

          <ol className="contact-list">
            {showingContacts.map((contact) => {
              return (
                <>
                  <li key={contact.id} className="contact-list-item">
                    <img src={contact.avatarURL} className="contact-avatar" />
                    <div className="contact-details">
                      <p>{contact.name}</p>
                      <p>{contact.handle}</p>
                    </div>
                    <button
                      onClick={() => onDeleteContact(contact)}
                      className="contact-remove"
                    >
                      Remove
                    </button>
                  </li>
                </>
              );
            })}
          </ol>
        </div>
      </>
    );
  }
}

export default ListContacts;
