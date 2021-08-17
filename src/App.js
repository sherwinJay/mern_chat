import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase';
import LoginPage from './Pages/Login';
import Loading from './components/Loading';
import Home from './Pages/Home';
import ChatsPage from './Pages/Chats';
import MobileNav from './components/MobileNavMenu';

function App() {

  const [user, loading] = useAuthState(auth)
  const [conversations, setConversations] = useState([])
  const [rooms, setRooms] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // call when app is loading
  if(loading){ return <Loading/> }

  return (
    <div className="app">
      {
        !user ? (
          <LoginPage/>
        ) : (
          <div className="app-body">
            <Router>
              <Sidebar 
                rooms={rooms} 
                setRooms={setRooms} 
                conversations={conversations} 
                user={user}
              />
              <MobileNav 
                rooms={rooms} 
                setRooms={setRooms} 
                conversations={conversations} 
                user={user} 
                toggle={toggle} 
                isOpen={isOpen}
              />
              <Switch>
                <Route path="/rooms/:roomId">
                  <ChatsPage 
                    conversations={conversations} 
                    setConversations={setConversations}  
                    rooms={rooms} 
                    user={user} 
                    toggle={toggle}
                  />
                </Route>
                <Route 
                  exact path="/"
                >
                  <Home 
                    toggle={toggle}
                  />
                </Route>
              </Switch>
            </Router>
          </div> 
        )
      }
    </div>
  );
}

export default App;
