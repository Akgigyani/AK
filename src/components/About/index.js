import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

    return (
      <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
          <span className={`${letterClass} _12`}>A</span>
          <span className={`${letterClass} _13`}>b</span>
          <span className={`${letterClass} _14`}>o</span>
          <span className={`${letterClass} _15`}>u</span>
          <span className={`${letterClass} _16`}>t</span>
          <span className={`${letterClass} _17`}> </span>
          <span className={`${letterClass} _18`}>M</span>
          <span className={`${letterClass} _19`}>e</span>
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, a sports fanatic, a die hard Arsenal FC fan, a
            photography enthusiast, data passionate and tech-obsessed!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#376c99" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About