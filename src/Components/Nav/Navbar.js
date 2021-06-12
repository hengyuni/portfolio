import React, { useState } from "react";
// import logo from "../logo.svg";
import { Link as SLink, animateScroll as scroll } from "react-scroll";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
import "../../App.css";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Navbar() {
	const [showLinks, setShowLinks] = useState(false);

	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	// Navbar
	return (
		<div className="NavbarTest" id="navbar">
			<div className="leftSide">
				<h3 className="logo" onClick={scrollToTop}>
					Hengyu Ni
				</h3>
			</div>
			<div className="rightSide">
				<MenuOutlined
					className="button"
					onClick={() => setShowLinks(!showLinks)}
				/>
				<div className="links" id={showLinks ? "hidden" : ""}>
					<Link to={"/"}>Home</Link>
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
						to="contact"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						Contact
					</SLink>
					{/* <RLink to="/">Home</RLink> */}
					<Link to={"/art"}>Art</Link>
					<a href="./CodingResume.pdf" target="_blank">
						Resume
					</a>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
