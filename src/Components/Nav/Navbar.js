import React, { Component } from "react";
// import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
import * as navStyle from "./Navbar.module.css";

export default class Navbar extends Component {
	scrollToTop = () => {
		scroll.scrollToTop();
	};

	render() {
		return (
			<nav className={navStyle.nav} id="navbar">
				<div className={navStyle.navBox}>
					<div className={navStyle.logo}>
						<h2 className="header" onClick={this.scrollToTop}>
							Hengyu Ni
						</h2>
					</div>
					<div className={navStyle.itemsBox}>
						<ul className={navStyle.navItems}>
							<li className={navStyle.navItem}>
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
							</li>
							<li className={navStyle.navItem}>
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
							</li>
							<li className={navStyle.navItem}>
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
							</li>
						</ul>
					</div>
					{/* <button className="mobile-menu-icon">
            {isMobile ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button> */}
				</div>
			</nav>
		);
	}
}
