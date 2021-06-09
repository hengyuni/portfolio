import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Nav/Navbar";
import Section from "./Components/Section/Section";
import About from "./Components/About/About.js";
import Projects from "./Components/Projects/Projects.js";
import Contact from "./Components/Contact/Contact.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Art from "./Components/Art/Art";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Navbar />
					<Switch>
						<Route exact path="/">
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
						</Route>
						<Route exact path="/art" render={Art} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
