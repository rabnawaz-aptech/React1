import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound(props) {
  return (
    <>
    <div className="home">
    <div className="overflow-y-hidden">
    <div className={`w-100 min-vh-100 bg-${props.mode.elementColor}`}>
      <div className={`container py-5`}>
        <div className="row py-5">
          <div className="col-md-6 offset-md-3 text-center center-div py-5">
            <h1 className={`text-${props.mode.textColor} fw-bold`}>Page Not Found</h1>
            <p className={`text-${props.mode.textColor}`}>The page you are looking for does not exist.</p>
            <Link to="/"><button className='btn fw-bold text-primary'>Go to Homepage</button></Link>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}
