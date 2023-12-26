import {React , useState , useEffect} from 'react';
import UserCard from './UserCard';
import './../../../styles/UserList.css';

const UserList=()=> {
  // const [userList , setUserList] = useState(null);

  const [userCards , setUserCards] = useState(null);
  useEffect(() => {
    let promise = [];
    promise.push(fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()));
    promise.push(fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()));
    
    Promise.all(promise).then(result => {
      let userData = result[0] , postData = result[1];
      userData.forEach(usr => {
        usr.posts = postData.filter((postItem) =>{return postItem.userId == usr.id});
      });
      let userCardList = userData.map(usr=>{
        return <UserCard key={usr.id} user={usr}></UserCard>
      })
      // setUserList(userData);
      setUserCards(userCardList);
    })
  }, []);

  return (
    <div>
      <h2 className='userListHeader'>Directory</h2>
      <div className="userCardContainer">
        {userCards ? userCards : 'Loading...'}
      </div>
    </div>
  );
}
export default UserList;
