import {React, useState ,useEffect, useRef } from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import './../../../styles/UserView.css'
import DigitalClock from '../../DigitalClock';
import back from './../../../back.jpg';
import PostCard from './PostCard';
function UserView(props) {
    const navigate = useNavigate();
    const {user} = useLocation().state;
    const [showClock , setShowClock] = useState(false);
    const [countrylistTag , setCountrylistTag] = useState(null);
    const [currentTime , setCurrentTime] = useState(0);
    const selectRef = useRef();
    
    useEffect(() => {
        let promise = [];
        promise.push(fetch('http://worldtimeapi.org/api/timezone').then(response => response.json()));
        
        Promise.all(promise).then(result => {
          let countriesData = result[0] , listTag = [];
          countriesData.forEach((country , index) => {
            listTag.push(<option key={index} value={country}>{country}</option>)
          });
          fetchCountryTime(countriesData[0]);
          setCountrylistTag(listTag);
          selectRef.current.addEventListener('change', function handleChange(event) {
            setShowClock(false);
            fetchCountryTime(event.target.value);
          });
        })
      }, []);
    const fetchCountryTime = (country)=>{
        fetch('http://worldtimeapi.org/api/timezone/'+country).then(response => response.json()).then(json=>{
            setCurrentTime(json.datetime);
            setShowClock(true);
        })
    }
    const navigateEvent = ()=>{
        navigate("/" )
    }
  return (
    <div className='user_view_container'>
        <div className='user_view_nav'>
            <span className='nav_item nav_item1 backBtn m20' onClick={navigateEvent}>
                {/* <img className='backIcon' src={back}></img> */}
                <span>Back</span>
            </span>
            <div className='nav_item nav_item2'>
                <select className='countryList' name='countryList' id='countryList' ref={selectRef}>
                    {countrylistTag}
                </select>
                <div>
                    { showClock ? <DigitalClock className='m20' time = {currentTime}></DigitalClock> : <></>
                    }
                </div>
                
            </div>
        </div>
        <div className='user_profile'>
            <h1 className='user_profile_header profile_card'>Profile Page</h1>
            <div className='user_section profile_card bR20'>
                <div className='user_name_header'>
                    <div className='fWB'>Name :</div>
                    <p className='user_name'> {user.name}</p>
                    <span className=''>
                        <p>{user.company.catchPhrase}</p>
                    </span>
                </div>
                <div className='user_address'>
                    <div className='fWB'>Address :</div>
                    <div className='address'>
                        <p>{user.address.street} , {user.address.suite} , {user.address.city}</p>
                    </div>
                    <span className=''>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </span>
                </div>

            </div>
            <div className='user_post_container profile_card'>
                {/* <div className='user_post_section'> */}
                    {
                        user.posts.map((post,ind)=>{
                            return <PostCard key={ind} post={post}></PostCard>
                        })
                    }
                {/* </div> */}
            </div>
        </div>
    </div>
  );
}

export default UserView;