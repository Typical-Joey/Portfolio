import React from "react";
import Projects from "./Projects";
import Contact from "./Contact";
import Greeting from "./Greeting";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
