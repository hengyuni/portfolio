import React from 'react'
import * as aboutStyle from './About.module.css'

function About() {
  return (
    <div className={aboutStyle.aboutContainer}>
      <img
        src="https://i.imgur.com/T4kI92O.jpg"
        alt="headshot"
        className={aboutStyle.headerImg}
        width="200px"
      />
      <p className={aboutStyle.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A iaculis at erat pellentesque adipiscing commodo elit. Tincidunt ornare massa eget egestas purus viverra. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Adipiscing tristique risus nec feugiat in. Lorem sed risus ultricies tristique. Sit amet tellus cras adipiscing enim eu turpis egestas. Sit amet mattis vulputate enim nulla. Bibendum est ultricies integer quis auctor. Dictum fusce ut placerat orci nulla.</p>
    </div>
  )
}

export default About;
