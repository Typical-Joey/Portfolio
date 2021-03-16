import React from "react";
import Projects from "./Projects";
import Contact from "./Contact";
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
