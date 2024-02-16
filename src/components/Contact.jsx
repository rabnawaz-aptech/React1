import React from 'react'
import Banner from './Banner'

export default function Contact(props) {
  return (
    <>
    <title>{props.title} - Rabnawaz</title>
    <Banner mode={props.mode} toggleMode={props.toggleMode} title={props.title} btnContent={props.btnContent} />
    </>
  )
}
