import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Nav/Navbar";
import Section from "./Components/Section/Section";
import DummyText from "./DummyText";
import About from './Components/About/About.js'
import Projects from './Components/Projects/Projects.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="About"
          subtitle={<About />}
          dark={true}
          id="about"
        />
        <Section
          title="Projects"
          subtitle={<Projects />}
          dark={false}
          id="projects"
        />
        <Section
          title="Contact"
          subtitle={<DummyText />}
          dark={true}
          id="contact"
        />
      </div>
    );
  }
}

export default App;