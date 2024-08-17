import React from 'react'
import underConst from '../assets/underconst.png'

const UnderConstructionPage = () => {
  return (
    <div className="container">
      <h1 className="title">UNDER CONSTRUCTION</h1>
      <div className="image-container">
        <img src={underConst} alt="Under Construction" className="image" />
      </div>
      <p className="message">
        Our website is under construction, but we are ready to go! Special surprise for our subscribers only.
      </p>
    </div>
  )
}

export default UnderConstructionPage