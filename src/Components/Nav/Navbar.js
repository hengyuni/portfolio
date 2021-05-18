import React, { Component } from "react";
// import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";

const logo = 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v790-nunny-79.png?auto=&bg=transparent&con=3&cs=srgb&dpr=1&fm=png&ixlib=php-3.1.0&q=80&usm=15&vib=3&w=1300&s=698200e0ca0340ed2263aa8a1a48054f'

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <h2
            className="header"
            onClick={this.scrollToTop}
          >
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
        </div>
      </nav>
    );
  }
}