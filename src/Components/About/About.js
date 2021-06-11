import React from "react";
import * as aboutStyle from "./About.module.css";

function About() {
	return (
		<div className={aboutStyle.aboutContainer}>
			<img
				src="https://i.imgur.com/T4kI92O.jpg"
				alt="headshot"
				className={aboutStyle.headerImg}
			/>
			<p className={aboutStyle.body}>
				MERN-stack developer with background in traditional sign painting and
				television production. A lover of music, books, skateboarding, and the
				outdoors.
			</p>
		</div>
	);
}

export default About;
