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
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
             src={props.author.avatarUrl}
             alt={props.author.name} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};
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
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author} />
        </Wrapper>

      </div>
    );
  }
}

export default App;
