import { Avatar } from "@material-ui/core"
import { active, addChatBtn, sidebarChatRoom } from "./styles"
// import db from '../../firebase'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "../../axios"

const SidebarChat = ({id, name, conversation, addNewChat}) => {

  const { roomId } = useParams();
  const [lastMessage, setLastMessage] = useState(null)

  const getLastMessage = () => { 
    const reverseArray = []
      .concat(conversation)
      .reverse()
      .map((message,idx) => {
        if(idx===0){
          setLastMessage({
            avatar: message.user.photo,
            user: message.user.displayName,
            message: message.message,
            timestamp: message.timestamp
          })
        }
      });
  };

  useEffect(() => {
    getLastMessage()
  }, [conversation]);

  return (
    <NavLink to={`/rooms/${id}`} className={sidebarChatRoom} activeClassName={active}>
      <Avatar src={lastMessage?.avatar}/>
      <div>
        <h3>{name}</h3>
        <p>{lastMessage !== null ? lastMessage.message : ''}</p>
      </div>
    </NavLink>
  )
}

export default SidebarChat
