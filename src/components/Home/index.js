import AKLogo from './../../assets/images/AKStyle.png';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, I'm<br />
                <img src={AKLogo} alt="developer" />
                Web developer
                </ h1>
                <h2>Full Stack Developer / Software Engineer / Blogger</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    );

}

export default Home