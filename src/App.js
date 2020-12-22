import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list'


class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        {
          name: "Frankie",
          id: 1,
        },
        {
          name: "Todd",
          id: 2,
        },
        {
          name: "John",
          id: 3,
        },
      ],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(contacts => {
        this.setState({ contacts })
        console.log(this.state.contacts)
      })
      .catch(err => console.error(err))
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
