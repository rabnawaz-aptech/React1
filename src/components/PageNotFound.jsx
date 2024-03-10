import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export default function PageNotFound(props) {
  const hash = props.mode.hash;
  return (
    <>
      <div className={`bg-hash-${hash} vh-100`}>
        <div className={` py-5`}>
          <div className={`container py-5`}>
            <div className="row py-5">
              <div className="col-md-6 offset-md-3 text-center center-div py-5">
                <h2 className={`text-${props.mode.textColor} fw-bold`}>Page Not Found</h2>
                <span className={`text-${props.mode.textColor}`}>The page you are looking for does not exist.</span>
                <br />
                <Link to="/"><button className='btn fw-bold text-primary'>Go to Homepage</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
