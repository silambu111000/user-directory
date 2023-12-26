import {React} from 'react';
import { useNavigate } from 'react-router-dom';
function UserCard({user}) {

    // const transtionHandler = ()=>{
    // }
  const navigate = useNavigate();

  const navigateEvent = (user)=>{
    navigate("/user/"+user.id , { state : {user :user} })
    // navigate("/user/"+user.id ,  {user :user } )
  }
  return (
    <div className="userCard" onClick={()=>navigateEvent(user)}>
      <div className="userCardleft">
        <p >Name: {user.name}</p>
      </div>
      <div className="userCardRight">
        <p>Posts: {user.posts.length}</p>
      </div>
    </div>
  );
}

export default UserCard;