import React, { Component } from "react";
import ListContacts from "./ListContacts";
import avatar from "./icons/Mohan-muruge.jpg";

class App extends Component {
  state = {
    contacts: [
      {
        id: "karen",
        name: "Karen Isgrigg",
        handle: "karen_isgrigg",
        avatarURL: avatar,
      },
      {
        id: "richard",
        name: "Richard Kalehoff",
        handle: "richardkalehoff",
        avatarURL: avatar,
      },
      {
        id: "tyler",
        name: "Tyler McGinnis",
        handle: "tylermcginnis",
        avatarURL: avatar,
      },
    ],
  };

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
  };
  render() {
    return (
      <div>
        <ListContacts
          onDeleteContact={this.removeContact}
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}

export default App;
