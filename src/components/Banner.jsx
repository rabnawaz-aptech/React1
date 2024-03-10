import React from 'react'
import Button from './Button'
import { NavLink } from 'react-router-dom'

export default function Banner(props) {

    const textColor = props.mode.textColor;
    const elementColor = props.mode.elementColor;
    const hash = props.mode.hash;
    const title = props.title;
    const subtitle = props.subtitle;

    return (
        <>
            <div className={`bg-hash-${hash} text-center py-5`}>
                <div className="container w-50 py-5">
                    <h1 className={`text-${textColor} pt-5 pb-2 fw-bold`}>{title}</h1>
                    <p className={`text-${textColor}`}>{subtitle}</p>
                    <NavLink className={`text-${textColor} text-decoration-none`}>Get a Quote</NavLink>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <NavLink className={`text-${textColor} text-decoration-none`}>Download CV</NavLink>
                </div>
            </div>
        </>
    )
}
