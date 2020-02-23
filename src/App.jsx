import React from "react";
import "./App.css";
import Core from "./core/Core";
import Shared from "./shared/Shared";

class App extends React.Component {
  render() {
    return (
      <>
        <Core />
        <Shared />
      </>
    );
  }
}

export default App;
