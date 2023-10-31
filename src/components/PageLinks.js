
import { pageLinks } from "../data";
import Link from "./Link";
function PageLinks({ className, subClassName }) {
    return (
        <ul className={className} id={className}>
            {pageLinks.map((link) => {
                return (
                    <Link {...link} key={link.id} subClassName={subClassName} />
                )
            })}

        </ul>
    );

}
export default PageLinks;