import { NavLink } from "react-router-dom"

const Footer = (props) => {
    const nav = props.mode.nav;
    const card = props.mode.card;
    const color = props.mode.color;
    const textColor = props.mode.textColor;
    return (
        <>
            <footer>
                <div className={`bg-nav-${nav} card-hash-${card} border-top`} data-bs-theme={color}>
                    <div className="container py-3">
                        <div className="row">
                            <div className="col-12">
                                <span className={`card-hash-${card}-p`}><span className={`fs-4 text-${textColor}`}>Rabnawaz <div className="vr"></div></span> Copyright &copy; {new Date().getFullYear()} Rabnawaz.site</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer