import React from 'react'
import './Card.css'
import pic from '../../assets/name.png.jpg'

function MyCard({card}) {
  return (
   <>
   <div className={`mycontainer ${card?" ":"small-container"}`}>
        <div className="mycard">
          <img src={pic} alt=""/>
          <p className="mycard__name">Muhammad Mubeen</p>
          <div className="grid-container">
      
                <div className="grid-child-posts">
              156 Post
                </div>
                <div className="grid-child-followers">
              1012 Likes
                </div>
      
          </div>
          <ul className="social-icons">
            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a href="www.linkedin.com/in/muhammad-mubeen-ba2b0b260"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="https://github.com/mubeen56-web"><i className="fa-brands fa-github"></i></a></li>
          </ul>
        </div>
    </div>
   </>
  )
}

export default MyCard