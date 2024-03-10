import React from 'react'
import Button from './Button'
// bg-${props.mode.elementColor}
export default function Banner(props) {
    return (
        <>
            <div className={`min-vh-100 `}>
                <div className="container w-50">
                    <h1 className={`text-${props.mode.textColor} text-center pt-5 pb-2 fw-bold text-white`}>{props.title}</h1>
                    <p className={`text-${props.mode.textColor} text-center`}>{props.subtitle}</p>
                    <Button btnContent={props.btnContent} />
                </div>
            </div>
        </>
    )
}
