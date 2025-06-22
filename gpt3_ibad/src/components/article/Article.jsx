import React from 'react'
import './article.css';
const Article = ({imageUrl, date,title}) => {
  return (
    <div className="blog-container-article"  data-aos="zoom-in-up"  >
      <div className="blog-container-article-image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="blog-container-article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>

      </div>
    </div>
  )
}

export default Article