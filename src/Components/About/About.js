import React from "react";
import * as aboutStyle from "./About.module.css";

function About() {
	return (
		<div className={aboutStyle.aboutContainer}>
			<img
				src="https://i.imgur.com/T4kI92O.jpg"
				alt="headshot"
				className={aboutStyle.headerImg}
				width="200px"
			/>
			<p className={aboutStyle.body}>
				Hi, I'm Hengyu! My background in painting and cooking helps with
				tackling problems and brings a willingness to work with a team. It
				enables me to connect with others on a personal level and provide
				top-notch teamwork. My previous experiences allow me to approach each
				project with the ability to adapt, put the ingredients together and find
				solutions to efficiently solve problems.
			</p>
		</div>
	);
}

export default About;
