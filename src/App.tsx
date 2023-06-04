import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { EditorWrapper } from "./components/EditorWrapper";
import { SourceView } from "./components/SourceView";
import { ResultView } from "./components/ResultView";

function App() {
  return (
    <div className="App">
      <div className={"main-container"}>
        <div className={"source-container"}>
          <SourceView></SourceView>
        </div>
        <div className={"javascript-container"}>
          <EditorWrapper></EditorWrapper>
        </div>
        <div className={"result-container"}>
          <ResultView></ResultView>
        </div>
      </div>
    </div>
  );
}

export default App;
