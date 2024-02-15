import React from 'react'

export default function Projects(props) {
  return (
    <>
    <title>{props.title}</title>
    <div className={`banner-1 bg-${props.mode.elementColor}`}>
      <div className="container">
        <h1 className={`text-${props.mode.textColor}`}>Projects</h1>
      </div>
    </div>
    </>
  )
}
