import React, { useState } from "react";
// import logo from "../logo.svg";
import { Link as SLink, animateScroll as scroll } from "react-scroll";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
import "../../App.css";
import {
	MenuOutlined,
	GithubOutlined,
	LinkedinOutlined,
	FormatPainterOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function Navbar() {
	const [showLinks, setShowLinks] = useState(false);

	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	const twoFunctions = () => {
		scrollToTop();
		setShowLinks(showLinks);
	};

	// Navbar
	return (
		<div className="NavbarTest" id="navbar">
			<div className="leftSide">
				<div className="iconsContainer">
					<a
						href="https://github.com/hengyuni/"
						target="_blank"
						rel="noreferrer"
					>
						<GithubOutlined className="icon" />
					</a>
					<a
						href="https://www.linkedin.com/in/hengyuni/"
						target="_blank"
						rel="noreferrer"
					>
						<LinkedinOutlined className="icon" />
					</a>
					<Link to={"/art"}>
						<FormatPainterOutlined className="icon" />
					</Link>
				</div>
			</div>
			<div className="middle">
				<Link to={"/"}>
					<h3 className="logo" onClick={twoFunctions}>
						Hengyu Ni
					</h3>
				</Link>
			</div>
			<div className="rightSide">
				<MenuOutlined
					className="button"
					onClick={() => setShowLinks(!showLinks)}
				/>
				<div className="links" id={showLinks ? "hidden" : ""}>
					<SLink
						activeClass="active"
						to="projects"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						Projects
					</SLink>
					<SLink
						activeClass="active"
						to="about"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						About
					</SLink>
					<SLink
						activeClass="active"
						to="contact"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						Contact
					</SLink>
					<Link to={"/art"} onClick={() => setShowLinks(!showLinks)}>
						Art
					</Link>
					<a href="./FDresume.pdf" target="_blank">
						Resume
					</a>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
