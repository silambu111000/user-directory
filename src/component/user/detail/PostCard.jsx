import {React , useState , useEffect} from 'react';
import ViewPost from './ViewPost'; 

const PostCard=({post})=> {
  let [showPost , setShowPost] = useState(false);
  const hidePostEvent = ()=>{
    setShowPost(false)
  }
  const showPostEvent = ()=>{
    console.log("")
    setShowPost(true);
  }
  return (
    <>
    <div className='post_card bR20'>
        <div title={post.title} className=' p_item post_card_title'> <h2>{post.title}</h2> </div>
        <div className='p_item post_card_content'>{post.body}</div>
        <div className='p_item post_card_footer'>
          <div className='view_post_btn curDef' onClick={showPostEvent}>ViewPost</div>
        </div>
    </div>
    {
      showPost ? <ViewPost post={post} hidePostEvent={hidePostEvent}></ViewPost> : <></>
    }
    </>
  );
}
export default PostCard;
