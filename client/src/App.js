import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {
    response: {}
  };
  
  componentDidMount() {
    axios.get('http://localhost:5000/api/v1/say-something').then((res) => {
      const response = res.data;
      this.setState({response});
    });
  }

  render() {
    return (
      <div className="App">
        <h1><font color="green" size='5'>Welcome to my first AWS APP!</font></h1>
        <h1>{this.state.response.body}</h1>
      </div>
    );
  }
}

export default App;