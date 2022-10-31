import Loader from 'react-loaders'; 
import React, { useState } from 'react';
import './index.scss';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _12`}>C</span>
            <span className={`${letterClass} _13`}>o</span>
            <span className={`${letterClass} _14`}>n</span>
            <span className={`${letterClass} _15`}>t</span>
            <span className={`${letterClass} _16`}>a</span>
            <span className={`${letterClass} _17`}>c</span>
            <span className={`${letterClass} _18`}>t</span>
            <span className={`${letterClass} _19`}> </span>
            <span className={`${letterClass} _20`}>M</span>
            <span className={`${letterClass} _21`}>e</span>
            </h1>
          {/* <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p> */}
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact;