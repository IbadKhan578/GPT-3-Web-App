import React from 'react'
import './possibility.css';
import featureImage from '../../Assets/featureImage.png';

const Possibility = () => {
  return (

    <div className="possibility section__margin" id='possibility'>
      <div className="possibility-img-container">
        <img src={featureImage} alt="" />
      </div>
      <div className="possibility-heading-container">
        <p className='possibility-p1'>Request Early Access to Get Started</p>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p className='possibility-p2'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <p className='possibility-p3 gradient__text'> Request Early Access to Get Started</p>
      </div>

    </div>


   )
}

export default Possibility