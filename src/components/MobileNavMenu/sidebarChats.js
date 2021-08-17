import { Avatar } from "@material-ui/core"
import { active, sidebarChatRoom } from "./styles"
import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"

const SidebarChat = ({id, name, conversation, toggle}) => {

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
    <NavLink to={`/rooms/${id}`} className={sidebarChatRoom} activeClassName={active} onClick={toggle}>
      <Avatar src={lastMessage?.avatar}/>
      <div>
        <h3>{name}</h3>
        <p>{lastMessage !== null ? lastMessage.message : ''}</p>
      </div>
    </NavLink>
  )
}

export default SidebarChat
