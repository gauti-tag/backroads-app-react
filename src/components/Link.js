function Link(props) {
    const { href, text, subClassName } = props;
    return (
        <li>
            <a href={href} className={subClassName}> {text} </a>
        </li>
    );
}

export default Link;