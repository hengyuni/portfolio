import React from "react";
import * as projectsStyle from "./Projects.module.css";

function Projects() {
	return (
		<div className={projectsStyle.wholeContainer}>
			<div className={projectsStyle.projectContainer}>
				<h3 className={projectsStyle.title}>Dad Joke Generator</h3>
				<a
					className={projectsStyle.link}
					href="https://poppajokes.netlify.app/"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src="https://i.imgur.com/le5dR27.png"
						alt="Dad Joke Gen"
						className={projectsStyle.headerImg}
						width="500px"
					/>
				</a>
				<div className={projectsStyle.bodyContainer}>
					<p className={projectsStyle.body}>
						<b>Link: </b>
						<a
							className={projectsStyle.link}
							href="https://poppajokes.netlify.app/"
							target="_blank"
							rel="noreferrer"
						>
							Live Site/
						</a>
						<a
							className={projectsStyle.link}
							href="https://github.com/hengyuni/dad-joke-generator"
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>
					</p>
					<p className={projectsStyle.body}>
						<b>Description: </b>A Generator for dads and future dads
					</p>
					<p className={projectsStyle.body}>
						<b>Tools Used: </b>
						<li className={projectsStyle.li}>React</li>
						<li className={projectsStyle.li}>Javascript</li>
						<li className={projectsStyle.li}>CSS</li>
					</p>
				</div>
			</div>
			<hr />
			<div className={projectsStyle.projectContainer}>
				<h3 className={projectsStyle.title}>.pngCat</h3>
				<a href="https://pngcat.netlify.app/" target="_blank">
					<img
						src="https://i.imgur.com/FYyMkxM.png"
						alt="pngcat"
						className={projectsStyle.headerImg}
					/>
				</a>
				<div className={projectsStyle.bodyContainer}>
					<p className={projectsStyle.body}>
						<b>Link: </b>
						<a
							className={projectsStyle.link}
							href="https://pngcat.netlify.app/"
							target="_blank"
							rel="noreferrer"
						>
							Live Site/
						</a>
						<a
							className={projectsStyle.link}
							href="https://github.com/shamseen/pngcat-api"
							target="_blank"
							rel="noreferrer"
						>
							GitHub API/
						</a>
						<a
							className={projectsStyle.link}
							href="https://github.com/shamseen/pngcat-client"
							target="_blank"
							rel="noreferrer"
						>
							GitHub Client
						</a>
					</p>
					<p className={projectsStyle.body}>
						<b>Description: </b>A diagram generator for genetic engineers!
						Select a DNA sequence from the European Nucleotide Archive and
						string together some SBOL glyphs to publish in your paper.
					</p>
					<p className={projectsStyle.body}>
						<b>Contribution: </b>
						<li className={projectsStyle.li}>Drag-N-Drop</li>
						<li className={projectsStyle.li}>Styling</li>
						<li className={projectsStyle.li}>Backend Foundation</li>
					</p>
					<p className={projectsStyle.body}>
						<b>Tools Used: </b>
						<li className={projectsStyle.li}>React</li>
						<li className={projectsStyle.li}>MongoDB</li>
						<li className={projectsStyle.li}>MongooseJS</li>
						<li className={projectsStyle.li}>Javascript</li>
						<li className={projectsStyle.li}>CSS3</li>
						<li className={projectsStyle.li}>Netlify</li>
						<li className={projectsStyle.li}>Heroku</li>
					</p>
				</div>
			</div>
			<hr />
			<div className={projectsStyle.projectContainer}>
				<h3 className={projectsStyle.title}>Travlr</h3>
				<a
					href="https://travlr-group.netlify.app/"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src="https://github.com/hengyuni/Hip_yelp_front/raw/main/src/Images/HomePageScreenShot.png"
						alt="project-2"
						className={projectsStyle.headerImg}
						width="500px"
					/>
				</a>
				<div className={projectsStyle.bodyContainer}>
					<p className={projectsStyle.body}>
						<b>Link: </b>
						<a
							className={projectsStyle.link}
							href="https://travlr-group.netlify.app/"
							target="_blank"
							rel="noreferrer"
						>
							Live Site/
						</a>
						<a
							className={projectsStyle.link}
							href="https://github.com/buggydev1/Hip_yelp_Back"
							target="_blank"
							rel="noreferrer"
						>
							GitHub API/
						</a>
						<a
							className={projectsStyle.link}
							href="https://github.com/buggydev1/Hip_yelp_front"
							target="_blank"
							rel="noreferrer"
						>
							GitHub Client
						</a>
					</p>
					<p className={projectsStyle.body}>
						<b>Description: </b>This is site for people who want to explore
						local foods and drinks. Users can click on individual tabs of food
						and drink to explore what they like to checkout. Then users can
						click on map to see all the locations in one click.
					</p>
					<p className={projectsStyle.body}>
						<b>Contribution: </b>
						<li className={projectsStyle.li}>
							Food/Drink details page and styling
						</li>
						<li className={projectsStyle.li}>Nav Styling</li>
						<li className={projectsStyle.li}>Backend Design</li>
					</p>
					<p className={projectsStyle.body}>
						<b>Tools Used: </b>
						<li className={projectsStyle.li}>React</li>
						<li className={projectsStyle.li}>Django</li>
						<li className={projectsStyle.li}>Javascript</li>
						<li className={projectsStyle.li}>CSS</li>
					</p>
				</div>
			</div>
			<hr />
			<div className={projectsStyle.projectContainer}>
				<h3 className={projectsStyle.title}>Pokedex</h3>
				<a
					href="https://hengyuni.github.io/project-2/"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src="https://github.com/hengyuni/project-2/raw/master/Assets/mainScreenShot.png"
						alt="project-1"
						className={projectsStyle.headerImg}
					/>
				</a>
				<div className={projectsStyle.bodyContainer}>
					<p className={projectsStyle.body}>
						<b>Link: </b>
						<a
							className={projectsStyle.link}
							href="https://hengyuni.github.io/project-2/"
							target="_blank"
							rel="noreferrer"
						>
							Live Site/
						</a>
						<a
							className={projectsStyle.link}
							href="https://github.com/hengyuni/project-2"
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>
					</p>
					<p className={projectsStyle.body}>
						<b>Description: </b>Pokedex fetch from a pokeAPI. A minimalistic
						pokedex.
					</p>
					<p className={projectsStyle.body}>
						<b>Tools Used: </b>
						<li className={projectsStyle.li}>React</li>
						<li className={projectsStyle.li}>Javascript</li>
						<li className={projectsStyle.li}>CSS</li>
					</p>
				</div>
			</div>
			<hr />
			<div className={projectsStyle.projectContainer}>
				<h3 className={projectsStyle.title}>Giphy Searcher</h3>
				<a
					href="https://codesandbox.io/s/giphy-searcher-xi0bn"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src="https://i.imgur.com/zMn1zoL.png"
						alt="giphy searcher"
						className={projectsStyle.headerImg}
					/>
				</a>
				<div className={projectsStyle.bodyContainer}>
					<p className={projectsStyle.body}>
						<b>Link: </b>
						<a
							className={projectsStyle.link}
							href="https://codesandbox.io/s/giphy-searcher-xi0bn"
							target="_blank"
							rel="noreferrer"
						>
							Code Sandbox
						</a>
					</p>
					<p className={projectsStyle.body}>
						<b>Description: </b>A giphy fetch using API request and react
					</p>
					<p className={projectsStyle.body}>
						<b>Tools Used: </b>
						<li className={projectsStyle.li}>React</li>
						<li className={projectsStyle.li}>Javascript</li>
						<li className={projectsStyle.li}>CSS</li>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Projects;
