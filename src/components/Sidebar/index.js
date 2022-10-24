import './index.scss';
import { Link, NavLink } from 'react-router-dom'
import AKLogo from './../../assets/images/AKLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
      <div className="nav-bar">
        <Link className="Logo" to="/">
          <img src={AKLogo} alt="" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/asutrio/?viewAsMember=true" >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/asutrio/?viewAsMember=true" >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/asutrio/?viewAsMember=true" >
              <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
    )
}

export default Sidebar;