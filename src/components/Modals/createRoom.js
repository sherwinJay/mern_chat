import { useState } from "react";
import { closeBtn, createRoomContainer, createRoomForm } from "./styles"
import CancelIcon from '@material-ui/icons/Cancel';
import axios from '../../axios';


const CreateRoom = ({showPopupMessage, setShowPopupMessage}) => {

  const [createRoom, setCreateRoom] = useState('');

  const closeModal = () => {
    setShowPopupMessage(false);
    setCreateRoom('');
  }

  const createChat = (e) => {
    e.preventDefault();
    // do stuff here
    axios.post('/api/chatrooms',{
      chatName: createRoom
    });

    closeModal();
  }

  return (
    <div className={createRoomContainer(showPopupMessage)}>
      <div className={createRoomForm}>
        <p>Please enter name for chat room</p>
        <CancelIcon onClick={ closeModal } className={closeBtn}/>
        <form onSubmit={createChat}>
          <input 
            type="text" 
            onChange={e => setCreateRoom(e.target.value)}
            value={createRoom}
            placeholder="room name..."
          />
          <input 
            type="submit" 
            hidden
          />
        </form>
      </div>
    </div>
  )
}

export default CreateRoom
