import React, { Component } from "react";

class ListContacts extends Component {
  render() {
    return (
      <>
        <ol className="contact-list">
          {this.props.contacts.map((contact) => {
            return (
              <>
                <li key={contact.id} className="contact-list-item">
                  <img src={contact.avatarURL} className="contact-avatar" />
                  <div className="contact-details">
                    <p>{contact.name}</p>
                    <p>{contact.handle}</p>
                    <button className="contact-remove">Remove</button>
                  </div>
                </li>
                ;
              </>
            );
          })}
        </ol>
      </>
    );
  }
}

export default ListContacts;
