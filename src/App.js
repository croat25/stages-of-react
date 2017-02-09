import React, { Component } from 'react';
import logo from './logo.svg';

import styled from 'styled-components';
//import image from 'from name of image'
import './App.css';


const Title=styled.h1`

          font-size=1.5em;
          text-align:center;
          color:palevioletred;
          `;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// console.log(`Hello baby girl`);
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Wrapper>
        <Title>Hello World, this is my first styled component!</Title>
        </Wrapper>

      </div>
    );
  }
}

export default App;
