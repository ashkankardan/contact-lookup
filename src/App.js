import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/Card-list";
import { Search } from "./components/search/Search";

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [],
      search: "",
    };
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((contacts) => {
        this.setState({ contacts });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { contacts, search } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="App container">
        <h1 className="heading">Contact Lookup</h1>
        <Search placeholder="Search Contact" handleChange={this.handleChange} />
        <CardList contacts={filteredContacts} />
      </div>
    );
  }
}

export default App;
