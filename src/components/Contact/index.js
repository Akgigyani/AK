import Loader from 'react-loaders'; 
import React, { useRef, useState } from 'react';
import './index.scss';
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          'service_gm1nhnp',
          'template_j6pd5qs',
          refForm.current,
          'uVZmRcqVkiBm25AAz'
        )
        .then (
          () => {
            alert("Message sent successfully!")
            window.location.reload(false)
          },
          () => {
            alert("Failed to send the message, please try again!")
          }
        )
    }
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
            <form ref={refForm} onSubmit={sendEmail}>
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