import { useEffect } from 'react';
import {io} from 'socket.io-client';

function App() {
  const socket = io('http://localhost:4000');

  useEffect(()=>{
    
  },[])
  return (
    <div>Chat Application</div>
  )
}

export default App