import React, { Component } from 'react';
import logo from './logo.svg';
import {Button} from 'antd';
import './App.css';

class App extends Component {
  render() {
    console.log(Button)
    return (
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
