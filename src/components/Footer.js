import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
function Footer() {
    return (
        <footer className="section footer">
            <PageLinks className='footer-links' subClassName='footer-link' />
            <ul className="footer-icons">
                {socialLinks.map((item) => {
                    const { id, href, icon } = item;
                    return (
                        <li key={id}>
                            <a href={href} target="_blank" rel="noreferrer" className="footer-icon"
                            ><i className={icon}></i
                            ></a>
                        </li>
                    );
                })}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>

    );
}
export default Footer;