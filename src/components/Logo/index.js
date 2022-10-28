import './index.scss';
import AKLogo from './../../assets/images/AKLogoLarge.PNG';

const Logo = () => {
    return (
        <div className="logo-container">
            <img className="solid-logo" src={AKLogo} alt='large-logo' />
        </div>
    )
} 

export default Logo