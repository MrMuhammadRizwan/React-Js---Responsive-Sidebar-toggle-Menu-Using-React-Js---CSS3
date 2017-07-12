import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isShow: false};
  }

  handleClick = () => {
    this.setState({ isShow: !this.state.isShow })
  }

  render () {
    return (
      <div>
        <h2>React Js Menu</h2>
        <div className='control' onClick={this.handleClick}>&#9776; MENU</div>
        <div className={this.state.isShow ? 'content' : 'invisible'}>
          <div id="mySidenav" className="sidenav">
            <button
              onClick={this.handleClick}
              type="button"
              className="closebtn"
            >
              &times;
            </button>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Clients</a>
            <a href="">Contact</a>
          </div>
        </div>
      </div>
    );
  }
}



export default App;






