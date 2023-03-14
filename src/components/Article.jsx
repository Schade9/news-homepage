import React from 'react'
import image from '../assets/image-web-3-desktop.jpg'

function Article() {
  return (
    <article>
        <div className="article-image">
            <img src={image} alt="imagessc" />
        </div>
        <div className="sub-article">
            <div className="title">
                <h1>The Bright Future of Web 3.0</h1>
            </div>
            <div className="description">
                <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                <button>READ MORE</button>
            </div>
        </div>
    </article>
  )
}

export default Article
