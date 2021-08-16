import { Avatar } from "@material-ui/core"
import { chatHeader } from './styles';

const ChatHeader = ({chatName}) => {
  return (
    <div className={chatHeader}>
      <Avatar/>
      <div>
        <h3>{chatName}</h3>
        {/* <p>last message</p> */}
      </div>
    </div>
  )
}

export default ChatHeader
