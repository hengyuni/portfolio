import React from 'react'
import * as projectsStyle from './Projects.module.css'

function Projects() {
  return (
    //https://github.com/hengyuni/Hip_yelp_front/raw/main/src/Images/HomePageScreenShot.png

    <div className={projectsStyle.wholeContainer}>
      <div className={projectsStyle.p1Container}>
        <h3 className={projectsStyle.title}>Pokedex</h3>
        <img
        src="https://github.com/hengyuni/project-2/raw/master/Assets/mainScreenShot.png"
        alt="project-1"
        className={projectsStyle.headerImg}
        width="500px"
        />
        <div className={projectsStyle.bodyContainer}>
          <p className={projectsStyle.body}><b>Link: </b><a className={projectsStyle.link}  href="https://hengyuni.github.io/project-2/">Pokedex</a></p>
          <p className={projectsStyle.body}><b>Description: </b>Simple pokedex from an API.</ p>
          <p className={projectsStyle.body}>
            <b>Tools Used: </b>
            <li className={projectsStyle.li}>React</li>
            <li className={projectsStyle.li}>Javascript</li>
            <li className={projectsStyle.li}>CSS</li>
          </p>
        </div>
      </div>
      <hr className={projectsStyle.line}/>
      <div className={projectsStyle.p2Container}>
        <h3 className={projectsStyle.title}>Travlr</h3>
        <img
        src="https://github.com/hengyuni/Hip_yelp_front/raw/main/src/Images/HomePageScreenShot.png"
        alt="project-2"
        className={projectsStyle.headerImg}
        width="500px"
        />
        <div className={projectsStyle.bodyContainer}>
          <p className={projectsStyle.body}><b>Link: </b><a className={projectsStyle.link} href="https://travlr-group.netlify.app/">Travlr</a></p>
          <p className={projectsStyle.body}><b>Description: </b>This is site for people who want to explore local foods and drinks. Users can click on individual tabs of food and drink to explore what they like to checkout. Then users can click on map to see all the locations in one click.</p>
          <p className={projectsStyle.body}>
            <b>Contribution: </b>
            <li className={projectsStyle.li}>Food/Drink details page and styling</li>
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
    </div>
  )
}


export default Projects


