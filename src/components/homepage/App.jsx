import React from "react";
import Projects from "../project/Projects";
import Contact from "../contact/Contact";
import Greeting from "./Greeting";
import SideIcons from "./SideIcons";

function App() {
  return (
    <div className="App">
      <SideIcons />
      <Greeting />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
