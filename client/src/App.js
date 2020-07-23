import React, { Component } from "react";
import ListContacts from "./ListContacts.js";
import avatar from "./icons/Mohan-muruge.jpg";
import * as ContactsAPI from "./utils/ContactsAPI.js";
import CreateContact from "./CreateContact";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState(() => ({
        contacts,
      }));
    });
  }

  removeContact = (contact) => {
    //Way 1: pass in an object, every key of the object will be merged in the current state.
    // this.setState({
    //   key:"tyler"
    // })

    //Way 2: functional setState - passing an object and returning an object. callback setState so use this. use when updating satte component based on previous state, passes current state of the component
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id;
      }),
    }));
    ContactsAPI.remove(contact);
  };

  createContact = (contact) => {
    ContactsAPI.create(contact).then(() => {
      this.setState((currentState) => ({
        contacts: currentState.contacts.concat([contact]),
      }));
    });
  };
  //pass a props to ListCOntacts, when it's clicked it'll toggle the screen.
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <ListContacts
              onDeleteContact={this.removeContact}
              contacts={this.state.contacts}
            />
          )}
        />
        <Route
          path="/create"
          render={({ history }) => (
            <CreateContact
              onCreateContact={(contact) => {
                this.createContact(contact);
                history.push("/");
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
