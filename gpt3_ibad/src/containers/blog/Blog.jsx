import React from 'react'
import './blog.css';
import Article  from '../../components/article/Article';
import { Article1,Article2,Article3,Article4,Article5 } from './../blog/import' ;

const Blog = () => {
  return (
    <div className="blog  section__padding" id='blog'>
      <div className="blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="blog-container">
        <div className="blog-container-groupA">
          <Article imageUrl={Article1} date={"July 22, 2025"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"} />


        </div>
         <div className="blog-container-groupB">
          <Article imageUrl={Article2} date={"July 22, 2025"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"} />
          <Article imageUrl={Article3} date={"July 22, 2025"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}/>
          <Article imageUrl={Article4} date={"July 22, 2025"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}/>
          <Article imageUrl={Article5} date={"July 22, 2025"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}/>
          
        </div>
      </div>
    </div>
  );
}

export default Blog