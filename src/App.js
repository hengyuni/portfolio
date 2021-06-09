import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Nav/Navbar";
import Section from "./Components/Section/Section";
import About from "./Components/About/About.js";
import Projects from "./Components/Projects/Projects.js";
import Contact from "./Components/Contact/Contact.js";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Section
					className="about"
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
					subtitle={<Contact />}
					dark={true}
					id="contact"
				/>
			</div>
		);
	}
}

export default App;
