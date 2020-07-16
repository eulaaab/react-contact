import React from "react";
import PropTypes from "prop-types";

function ListContacts(props) {
  return (
    <>
      <ol className="contact-list">
        {props.contacts.map((contact) => {
          return (
            <>
              <li key={contact.id} className="contact-list-item">
                <img src={contact.avatarURL} className="contact-avatar" />
                <div className="contact-details">
                  <p>{contact.name}</p>
                  <p>{contact.handle}</p>
                </div>
                <button
                  onClick={() => props.onDeleteContact(contact)}
                  className="contact-remove"
                >
                  Remove
                </button>
              </li>
            </>
          );
        })}
      </ol>
    </>
  );
}

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ListContacts;
