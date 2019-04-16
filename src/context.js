import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Chris Smithh",
        email: "cs@gmail.com",
        phone: "555 5555-55555"
      },
      {
        id: 2,
        name: "John Doe",
        email: "jd@gmail.com",
        phone: "666 6666-66666"
      },
      {
        id: 3,
        name: "Foo Bar",
        email: "fb@gmail.com",
        phone: "777 7777-77777"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;