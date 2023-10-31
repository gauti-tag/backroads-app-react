function Title(props) {
    const { title, sub } = props
    return (
        <div className="section-title">
            <h2>{title} <span>{sub}</span></h2>
        </div>
    );
}

export default Title;