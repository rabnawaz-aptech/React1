import React from 'react'
import Banner from './Banner'

export default function Home(props) {
  return (
    <>
      <div className="home">
      <title>{props.title} - Rabnawaz</title>
      <Banner mode={props.mode} toggleMode={props.toggleMode} title={props.title} subtitle={props.subtitle} btnContent={props.btnContent} />
      </div>
    </>
  )
}
