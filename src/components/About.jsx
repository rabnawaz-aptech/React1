import React from 'react'

export default function About(props) {
  return (
    <>
    <title>{props.title}</title>
    <div className={`banner-1 bg-${props.mode.elementColor}`}>
      <div className="container">
        <h1 className={`text-${props.mode.textColor}`}>About</h1>
      </div>
    </div>
    </>
  )
}
