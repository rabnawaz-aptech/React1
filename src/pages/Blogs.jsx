import Blog from "../components/Blog";
const Blogs = (props) => {
    const textColor = props.mode.textColor;
    const elementColor = props.mode.elementColor;
    const bgColor = props.mode.bgColor;
    const color = props.mode.color;
    const hash = props.mode.hash;
    const title = props.title;

    return (
        <>
        <title>{title} - Rabnawaz</title>
            <div className={`bg-hash-${hash} py-4`}>
                <div className={`container w-100`}>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <h2 className={`text-${textColor} fw-bold`}>Coding Articles</h2>
                                        <Blog title={title} mode={props.mode} toggleMode={props.toggleMode} />
                                        <Blog title={title} mode={props.mode} toggleMode={props.toggleMode} />
                                        <Blog title={title} mode={props.mode} toggleMode={props.toggleMode} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs