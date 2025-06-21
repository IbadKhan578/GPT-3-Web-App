import React from 'react'
import './brand.css'
import google from '../../Assets/google.png';
import slack from '../../Assets/slack.png'
import atlassian from '../../Assets/atlassian.png'
import dropbox from '../../Assets/dropbox.png'
import shopify from '../../Assets/shopify.png'

const Brand = () => {
  return (
    <div className="brand section__padding">
    <div>
      
      <img src={google} alt="" />
      <img src={slack} alt="" />
      <img src={atlassian} alt="" />
      <img src={dropbox} alt="" />
      <img src={shopify} alt="" />
    </div>
     </div>


    
  )
}

export default Brand