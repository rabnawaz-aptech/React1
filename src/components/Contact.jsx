import React from 'react'

export default function Contact(props) {
  return (
    <>
    <title>{props.title}</title>
    <div className={`banner-1 bg-${props.mode.elementColor}`}>
      <div className="container">
        <h1 className={`text-${props.mode.textColor}`}>Contact</h1>
      </div>
    </div>
    </>
  )
}
