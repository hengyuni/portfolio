import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Nav/Navbar";
import Section from "./Components/Section/Section";
import About from "./Components/About/About.js";
import Projects from "./Components/Projects/Projects.js";
import Contact from "./Components/Contact/Contact.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Art from "./Components/Art/Art";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route path="/art" component={Art} />
				<Route exact path="/">
					<Section
						title="Projects"
						subtitle={<Projects />}
						dark={true}
						id="projects"
					/>
					<Section
						className="about"
						title="About"
						subtitle={<About />}
						dark={false}
						id="about"
					/>
					<Section
						title="Contact"
						subtitle={<Contact />}
						dark={true}
						id="contact"
					/>
				</Route>
			</Switch>
		</div>
	);
}

export default App;
