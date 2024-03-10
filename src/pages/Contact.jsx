import Button from '../components/Button'

const Contact = (props) => {
    const textColor = props.mode.textColor;
    const bgColor = props.mode.bgColor;
    const color = props.mode.color;
    const card = props.mode.card;
    const hash = props.mode.hash;
    const title = props.title;
    return (
        <>
            <title>{title} - Rabnawaz</title>
            <div className={`bg-hash-${hash} py-5`}>
                <div className="container-fluid p-5">
                    <div className={`card mb-3 card-hash-${card} ${card==="dark" ? "contact-card" : ""} shadow shadow-lg border-0 p-5`}>
                        <div className="row g-0">
                            <div className="col-md-12">
                                <div className="card-body px-4">
                                    <h2 className="card-title fw-bold text-center mb-3">Feel free to contact me!</h2>
                                    <center><img src="../Blog.jpg" height="100px" className='rounded-circle' width="100px" alt="" /></center>
                                    <br /><br /><br />
                                    <center><Button btnContent={`Read More`} /></center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact