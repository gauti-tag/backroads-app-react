import logo from '../images/logo.svg'
import { socialLinks } from '../data';
import PageLinks from './PageLinks';
function NavBar() {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="backroads" />
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <PageLinks className='nav-links' subClassName='nav-link' />
                <ul className="nav-icons">
                    {socialLinks.map((item) => {
                        const { id, href, icon } = item;
                        return (
                            <li key={id}>
                                <a href={href} target="_blank" className="nav-icon" rel='noreferrer'>
                                    <i className={icon}> </i>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
