import axios from '../../axios';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { chatBody, chatContainer } from './styles';
import Pusher from 'pusher-js';
import ChatHeader from '../../components/Chats/ChatHeader';
import ChatFooter from '../../components/Chats/ChatFooter';
import ChatMessages from '../../components/Chats/ChatMessages';


const ChatsPage = ({conversations, setConversations, rooms, user}) => {

  const { roomId } = useParams();
  const [message, setMessage] = useState('');
  const [currentRoom, setCurrentRoom] = useState([]) ;
  const bottomMessage = useRef();
  const scrollToBottom = () => bottomMessage.current.scrollIntoView({behavior: 'smooth'});
  const getCurrentRoom = () => setCurrentRoom(rooms.filter(room => room._id === roomId));

  useEffect(() => {

    const getMessages = async () => {
      await axios.get(`/api/chatrooms/room?id=${roomId}`)
        .then(response => setConversations(response.data?.conversation));

      await scrollToBottom();
    }

    getMessages();
    getCurrentRoom();


  }, [roomId])

  useEffect(() => {
    const pusher = new Pusher('053fe91f8b1a9eacc9db', {
      cluster: 'ap1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('updated', (newMessage) => {
      // modify the object property name, mongoose update the length by default 
      const propertyName = conversations.length > 0 ? `conversation.${conversations.length}` : 'conversation';
      const modifiedMessageData = newMessage.messageDetails[propertyName];
      // check if no conversation, 
      // first conversation throws an array, others are object because of mongoose update
      const newConversation = conversations.length > 0 ? modifiedMessageData : modifiedMessageData[0]

      setConversations([...conversations, newConversation]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe('messages');
    }
  }, [conversations])

  return (
    // make chatHeader Component
    <div className={chatContainer}>

      <ChatHeader chatName={currentRoom[0]?.chatName} />

      <div className={chatBody}>
        {
          conversations.length > 0 ? conversations.map(message => (
            <ChatMessages
              key={message?._id} 
              id={message?._id} 
              message={message?.message} 
              name={message?.user?.displayName} 
              timestamp={message?.timestamp}
              userId={message?.user?.uid}
              currentUser={user.uid}
            />
          )) : ''
        }
        <div ref={bottomMessage}></div>
      </div>

      <ChatFooter
        user={user}
        message={message}
        setMessage={setMessage}
        roomId={roomId}
        scrollToBottom={scrollToBottom}
      />
    </div>
  )
}

export default ChatsPage
