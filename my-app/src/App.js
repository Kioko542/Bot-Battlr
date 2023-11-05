// App.js
import React, { Component } from 'react';
import BotCollection from './components/BotCollection';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allBots: [], // Initialize with an empty array
    };
  }

  componentDidMount() {
    fetch(' http://localhost:3000/bots') 
      .then((response) => response.json())
      .then((data) => {
        // Update state with the fetched data
        this.setState({ allBots: data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    return (
      <div>
        <h1>Bot Battlr</h1>
        <BotCollection bots={this.state.allBots} />
      </div>
    );
  }
}

export default App;
