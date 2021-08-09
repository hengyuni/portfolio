import React from "react";
import * as aboutStyle from "./About.module.css";

function About() {
	const imgOne = "https://i.imgur.com/T4kI92O.jpg";
	const imgTwo = "https://i.imgur.com/gHTdog7.jpg";

	return (
		<div className={aboutStyle.aboutContainer}>
			<img src={imgTwo} alt="headshot" className={aboutStyle.headerImg} />
			<p className={aboutStyle.body}>
				MERN-stack developer with background in traditional sign painting and
				television production. A lover of music, reading, skateboarding, and the
				outdoors.
			</p>
		</div>
	);
}

export default About;
