import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://mern-chat-imessage.herokuapp.com'
});

export default instance;