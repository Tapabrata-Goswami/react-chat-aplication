import { useEffect } from 'react';
import {io} from 'socket.io-client';

function App() {
  const socket = io('http://localhost:4000');

  useEffect(()=>{
    socket.on('connect',()=>{
      console.log("Connected, Id is : ",socket.id);
    });

    

  },[])
  return (
    <div>Chat Application</div>
  )
}

export default App