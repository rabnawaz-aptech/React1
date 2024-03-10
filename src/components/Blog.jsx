import Button from "./Button"

const Blog = (props) => {
    const textColor = props.mode.textColor;
    const bgColor = props.mode.bgColor;
    const color = props.mode.color;
    const card = props.mode.card;
    const hash = props.mode.hash;
    const title = props.title;
    return (
        <>
           <div className={`card mb-3 card-hash-${card} shadow shadow-lg border-0 my-4`}>
                <div className="row g-0">
                    <div className="col-md-12">
                        <div className="card-body px-4">
                            <h2 className="card-title fw-bold">Article title</h2>
                            <p className={`card-text card-hash-${card}-p`}><small className="">Last updated 3 mins ago</small></p>
                            <p className={`card-text card-hash-${card}-p`}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <Button btnContent={`Read More`} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog