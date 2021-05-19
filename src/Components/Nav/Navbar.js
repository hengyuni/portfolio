import React, { Component } from 'react';
// import logo from "../logo.svg";
import { Link, animateScroll as scroll } from 'react-scroll';
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';

// const [isMobile, setMobile] = useState(false)

export default class Navbar extends Component {
	// state = { clicked: false}

	// handleClick = () => {
	//   this.setState({ clicked: !this.state.clicked })
	// }

	scrollToTop = () => {
		scroll.scrollToTop();
	};

	render() {
		return (
			<nav className="nav" id="navbar">
				<div className="nav-content">
					<h2 className="header" onClick={this.scrollToTop}>
						Hengyu Ni
					</h2>
					<ul className="nav-items">
						<li className="nav-item">
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
						<li className="nav-item">
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
						<li className="nav-item">
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
