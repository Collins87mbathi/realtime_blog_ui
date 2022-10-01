import React from 'react'
const IM = "http://localhost:3001/images/"
const Save = ({post}) => {
  return (
    <div className='save'>
     <div className="save-user">
        <div className="save-details">
            <h3>{post.title}</h3>
            <h5>{post.username}</h5>
            <p>{post.comments.length} comments</p>
            <hr/>
        </div>
        <img src={IM + post.postimg} className="save-img" alt="post"/>
     </div>
    </div>
  )
}

export default Save