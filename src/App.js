import React, { Component } from 'react'
import './App.css';

class App extends Component{
  render() {
    return(
      <div className="App">
          <table className="titleBar">
            <tbody>
              <tr>
                <td>
                  <img width="50" src="green_app_icon.svg">
                </td>
                <td width="8">
                  <td>
                <h1>Fly_movie</h1>
                </td>
              </td>
              </tr>
            </tbody>
          </table>
      </div>
    );
  }
}

export default App;
