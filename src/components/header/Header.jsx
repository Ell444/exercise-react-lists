import "./Header.css";

const Header = ({ src, alt, ctaTextH4, ctaTextH1, ctaTextP, ctaBtn }) => {
    return (
        <header>
            <figure>
                <img src={src} alt={alt} />
            </figure>
            <section className="cta">
                <h4>{ctaTextH4}</h4>
                <h1>{ctaTextH1}</h1>
                <div className="divisore"></div>
                <p>{ctaTextP}</p>
                {ctaTextP.length != 50 && <button>{ctaBtn}</button>}

            </section>
        </header>

    )

}

export default Header;