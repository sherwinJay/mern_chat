import { chatMessage, chatTimestamp, chatUsername } from "./styles"

const ChatMessages = ({ id, name, message, timestamp, userId, currentUser }) => {
  return (
    <p className={`${chatMessage(userId === currentUser)}`}>
      <span className={chatUsername}>{name}</span>
        {message}
      <span className={chatTimestamp}>
        {
          // moment(message.timestamp?.toDate().getTime()).format('LT')
         timestamp
        }
      </span>
    </p>
  )
}

export default ChatMessages
