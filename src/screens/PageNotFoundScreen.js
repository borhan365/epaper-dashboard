import React from 'react'
import Logo from '../images/wipdata-logo.png'
import {CgArrowLeft} from 'react-icons/cg'
import {Link} from 'react-router-dom'

function PageNotFoundScreen() {
  return (
    <> 
      <div className="not-found-container">

        {/* wrapper */}
        <div className="not-found-wrapper">
          <div className="not-found-content">
            <h1>404</h1>
            <h2>Oops, This page could not be found!</h2>
            <p>This page you're looking for might have been removed had this name changed or temporarily unavailable!</p>
          </div>
          <button> <Link to="/"><CgArrowLeft /> Back to home</Link> </button>
        </div>
      </div>
    </>
  )
}

export default PageNotFoundScreen