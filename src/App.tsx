import React from 'react';
import logo from './logo.svg';
import './App.css';
import {EditorWrapper} from "./components/EditorWrapper";

function App() {
  return (
    <div className="App">
      <div className={"main-contianer"}>
        <EditorWrapper></EditorWrapper>
        <div className={"javascript-container"}>
        </div>
        <div className={"result-container"}>
        </div>
      </div>
    </div>
  );
}

export default App;
