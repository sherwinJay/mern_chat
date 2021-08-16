import { InsertEmoticon } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import { chatFooter } from './styles';
import axios from '../../axios';
import moment from 'moment';

const ChatFooter = ({user, message, setMessage, roomId, scrollToBottom}) => {

  const submitMessage = (e) => {
    e.preventDefault();
    console.log('submit message function ');

    axios.post(`/api/chatrooms/conversations?id=${roomId}`,{
      message: message,
      timestamp: moment().format('LT, MMM D, Y'),
      user: {
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
          photo: user.photoURL
      }
    });

    // clear message
    setMessage('');

    // scroll to bottom
    // bottomMessage.current.scrollIntoView({behavior: 'smooth'})
    scrollToBottom();
  }

  return (
    <div className={chatFooter}>
      <InsertEmoticon/>
      <form>
        <input 
          onChange={ e => setMessage(e.target.value)}
          type="text" 
          value={message}
          placeholder="type something"
        />
        <input
          onClick={submitMessage}
          type="submit"
          placeholder="send message"
          hidden
        />
      </form>
      <MicIcon/>
    </div>
  )
}

export default ChatFooter
