import React, { useState, useEffect, useRef } from 'react';

// import './../../../styles/UserView.css'
import './../../../styles/ViewPost.css';
function ViewPost({  post ,hidePostEvent}) {
    // let [showPost , setShowPost] = useState(show);
    let modalEle = useRef(); 
    useEffect(()=>{
        modalEle.current.style.display = 'block';
        window.onclick = function(event) {
            if (event.target == modalEle.current) {
                hidePostEvent();
                modalEle.current.style.display = "none";
            }
        }
    },[])   
    const hidePost = ()=>{
        modalEle.current.style.display = 'none';
        hidePostEvent();
    }
  return (
    <div id="postModal" className="post_modal" ref = {modalEle}>
        <div className="post_modal_content">
            <div className="fItem post_modal_header">
                <div className='post_header'>
                    <h2 className='header_title'>{post.title}</h2>
                    <span className="closeIcon" onClick={hidePost}>&times;</span>
                </div>
            </div>
            <div className="fItem post_modal_body" >
                <p>{post.body}</p>
            </div>
        </div>

    </div>
  );
}

export default ViewPost;
