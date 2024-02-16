import React from 'react'
import Button from './Button'

export default function Banner(props) {
    return (
        <>
            <div className={`banner-1 bg-${props.mode.elementColor}`}>
                <div className="container">
                    <h1 className={`text-${props.mode.textColor} text-center py-5 fw-bold`}>{props.title}</h1>
                    <Button btnContent={props.btnContent} />
                </div>
            </div>
        </>
    )
}
