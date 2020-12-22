import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/Card-list";

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((contacts) => {
        this.setState({ contacts });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <CardList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
