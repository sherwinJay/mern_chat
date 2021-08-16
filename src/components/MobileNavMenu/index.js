import axios from '../../axios';
import React, { useState , useEffect} from 'react'
import SidebarChat from './sidebarChats';
import { Button } from '@material-ui/core';
import Pusher from 'pusher-js';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Avatar } from '@material-ui/core'
import { addChatBtn, logo, logoutBtn, sidebarChatRoomContainer, sidebarContainer, sidebarHeader, sidebarSearchContainer, sidebarSearchInput, userContainer } from './styles';
import SearchIcon from "@material-ui/icons/Search"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CreateRoom from '../Modals/createRoom';
import { Link, useHistory } from 'react-router-dom';


const MobileNav = ({rooms, setRooms, conversations}) => {

  // const [rooms, setRooms] = useState([]);
  const [user] = useAuthState(auth);
  const [socket, setSocket] = useState(null);
  const [filterRooms, setFilterRooms] = useState('');
  const [showPopupMessage, setShowPopupMessage] = useState(false);
  const history = useHistory();
  const [isShow, setIsShow] =  useState(false);

  const logout = () => {
    auth.signOut()
    history.push('/')
  }

  const openModal = () =>{
    setShowPopupMessage(true);
  }

  useEffect(() => {
    const getChatRooms = async () => {
      await axios.get('./api/chatrooms')
        .then(response => setRooms(response.data));
    }

    getChatRooms()
  },[conversations]);

  useEffect(() => {
    const pusher = new Pusher('053fe91f8b1a9eacc9db', {
      cluster: 'ap1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newRooms) => {
      setRooms([...rooms, newRooms]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe('messages');
    }
  }, [rooms])

  return (
    <div className={sidebarContainer(isShow)}>
      <div className={sidebarHeader}>
        <div className={userContainer}>
          <Avatar src={user.photoURL} />
          <div>
            <h4>
              <Link to="/" className={logo}>iMessage</Link>
            </h4>
            <p>{user.displayName}</p>
          </div>
        </div>
        <div>
          <ExitToAppIcon 
            className={logoutBtn} 
            onClick={logout}
          />
        </div>
      </div>
      <div>
        <div className={sidebarSearchContainer}>
        <SearchIcon/>
        <input 
          onChange={e => setFilterRooms(e.target.value)}
          className={sidebarSearchInput} 
          placeholder="search in chats"
        />
        </div>
        <Button className={addChatBtn} onClick={openModal}>Add new chat</Button>
      </div>
      <div className={sidebarChatRoomContainer}>
        {
          rooms.length > 0 ? rooms.filter(room => (
            filterRooms.length > 0 ? room.chatName.includes(filterRooms) : rooms     
          )).map(({_id, chatName, conversation}) => (
            <SidebarChat key={_id} id={_id} name={chatName} conversation={conversation}/>
          )) : 'no rooms'
        }
      </div>
      <CreateRoom 
        showPopupMessage={showPopupMessage} 
        setShowPopupMessage={setShowPopupMessage}
      />
    </div>
  )
}

export default MobileNav