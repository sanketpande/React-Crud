import React from 'react';
import { useState } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Routes, Route, Link,useNavigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Shot from './Shot';

function Test(props){
  //const cars = ['Ford', 'BMW', 'Audi'];
  const [name, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
    console.log(inputs);
  }
  const fire = (msg) =>{
    alert(msg)
  }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  return (
    
      <><h1>Title here 2{props.brand}</h1>
      <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName1(e.target.value)}
        />
      </label>
      <label>Enter your name:
        <input 
          type="text" 
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>Enter your name:
        <input 
          type="text" 
          name="password"
          value={inputs.password || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
      </>
    
  );
  function Car(props) {
    return <li>I am a { props.brand }</li>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
