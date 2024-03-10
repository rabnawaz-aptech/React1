import React from 'react'

const Pricing = (props) => {
    const textColor = props.mode.textColor;
    const elementColor = props.mode.elementColor;

  return (
    <>
        <div className={`bg-${elementColor}`}>
        <h2 className={`text-center text-${textColor}`}>Pricing</h2>
        </div>
    </>
  )
}

export default Pricing