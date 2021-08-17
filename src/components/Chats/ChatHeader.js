import { Avatar } from "@material-ui/core"
import { chatHeader, chatMenu } from './styles';
import MenuIcon from '@material-ui/icons/Menu';

const ChatHeader = ({chatName, toggle}) => {
  return (
    <div className={chatHeader}>
      <Avatar/>
      <div>
        <h3>{chatName}</h3>
        {/* <p>last message</p> */}
      </div>
      <span className={chatMenu}>
        <MenuIcon onClick={toggle} />
      </span>
    </div>
  )
}

export default ChatHeader
