import React from "react";
import "./Page.css";
import Molecule from "./molecule/Molecule";

class Page extends React.Component {
  render() {
    return (
      <>
        <p> Page</p>
        <Molecule />
      </>
    );
  }
}

export default Page;
