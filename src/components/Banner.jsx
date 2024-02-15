import React from 'react'

export default function Banner(props) {
    return (
        <>
            <div className={`banner-1 bg-${props.mode.elementColor}`}>
                <div className="container">
                    <h1 className={`text-${props.mode.textColor}`}>{props.title}</h1>
                </div>
            </div>
        </>
    )
}
