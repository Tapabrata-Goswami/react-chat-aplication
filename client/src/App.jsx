import { useEffect } from 'react';
import {io} from 'socket.io-client';

import login from './pages/login';

function App() {
  const socket = io('http://localhost:4000');

  useEffect(()=>{
    socket.on('connect',()=>{
      console.log("Connected, Id is : ",socket.id);
    });

    

  },[])
  
  return (
    <div>
      Chat Application
      <login />
    </div>
  )
}

export default App