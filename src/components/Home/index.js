import AKLogo from './../../assets/images/AKStyle.png';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Logo from '../Logo'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    // const jobArray = ['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r']

    // useEffect(() => {
    //     return setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 4000)
    //   }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>' m</span>
                <img src={AKLogo} alt="developer" />
                {/* <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} 
                /> */}
                <span className={`${letterClass} _15`}>S</span>
                <span className={`${letterClass} _16`}>o</span>
                <span className={`${letterClass} _17`}>f</span>
                <span className={`${letterClass} _18`}>t</span>
                <span className={`${letterClass} _19`}>w</span>
                <span className={`${letterClass} _20`}>a</span>
                <span className={`${letterClass} _21`}>r</span>
                <span className={`${letterClass} _22`}>e</span>
                <span className={`${letterClass} _23`}> </span>
                <span className={`${letterClass} _24`}>E</span>
                <span className={`${letterClass} _25`}>n</span>
                <span className={`${letterClass} _26`}>g</span>
                <span className={`${letterClass} _27`}>i</span>
                <span className={`${letterClass} _28`}>n</span>
                <span className={`${letterClass} _29`}>e</span>
                <span className={`${letterClass} _30`}>e</span>
                <span className={`${letterClass} _31`}>r</span>
                </h1>
                <h2>Web Developer / Data Enthusiast / Blogger</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        </>
    );

}

export default Home