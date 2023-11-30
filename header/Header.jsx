import "./Header.css";

const Header = ({ src, alt }) => {
    return (
        <header>
            <figure>
                <img src={src} alt={alt} />
            </figure>
        </header>

    )

}

export default Header;