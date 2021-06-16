import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    response: {}
  };
  
  componentDidMount() {
    axios.get('http://localhost:5000/api/v1/my-login').then((res) => {
      const response = res.data;
      this.setState({response});
    });
  }

  render() {
    return (
      <div className="App">
        <img src="ust.png" className="App-logo" alt="logo" />
        <h1><font color="gblue" size='6'>Employee Login</font></h1>
        <h1>{this.state.response.body}</h1>
        <form>
      <table width="50%" border="0" cellspacing="1" cellpadding="2" align="center">
          <tr  align="center">
             <td align="right">
               <font color="green" size='5'>Username</font>
              </td>
          <td ><input type="text" name="uLogin" id="uID" placeholder="Username"></input></td>
        </tr>
        <tr>
          <td align="right"><font color="green" size='5'>Password</font></td>
              <td><input type="password" name="uPassword" id="Pass" placeholder=" Password"></input></td>
        </tr>
        <tr>
          <td>&nbsp;</td>
              <td align="center"><input class="button" type="submit" name="Submit" value="Login"></input></td>
        </tr>
        
           <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
          </tr>
      </table>
        </form>
      </div>
    );
  }
}

export default App;