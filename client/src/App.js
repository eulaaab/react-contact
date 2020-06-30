<<<<<<< HEAD
import React, { Component } from "react";
import ListContacts from "./ListContacts";
import avatar from "./icons/Mohan-muruge.jpg";

const contacts = [
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
];
=======
import React, { Component } from 'react';
>>>>>>> master

class App extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <ListContacts contacts={contacts} />
=======
        Hello World
>>>>>>> master
      </div>
    );
  }
}

export default App;
