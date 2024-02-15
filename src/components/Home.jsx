import React from 'react'
import Banner from './Banner'

export default function Home(props) {
  return (
    <>
      <title>{props.title}</title>
      <div className={`banner-1 bg-${props.mode.elementColor}`}>
        <div className="container">
          <h1 className={`text-${props.mode.textColor}`}>Home</h1>
        </div>
      </div>
    </>
  )
}
