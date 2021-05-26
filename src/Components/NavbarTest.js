import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
// import "antd/dist/antd.css";
import "../App.css";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
import { MenuOutlined } from "@ant-design/icons";

function NavbarTest() {
	const [showLinks, setShowLinks] = useState(false);

	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	return (
		<div className="NavbarTest" id="navbar">
			<div className="leftSide">
				<h3 className="logo" onClick={scrollToTop}>
					Hengyu Ni
				</h3>
			</div>
			<div className="rightSide">
				{/* <button onClick={() => setShowLinks(!showLinks)}>
				</button> */}
				<MenuOutlined
					className="button"
					onClick={() => setShowLinks(!showLinks)}
				/>
				<div className="links" id={showLinks ? "hidden" : ""}>
					<Link
						activeClass="active"
						to="about"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						About
					</Link>
					<Link
						activeClass="active"
						to="projects"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						Projects
					</Link>
					<Link
						activeClass="active"
						to="contact"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
}

export default NavbarTest;
