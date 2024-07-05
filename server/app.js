import express from 'express';
import {createServer} from 'http';
import { Server } from 'socket.io';
const app = express();
const server = new createServer(app);
const io = new Server(server);

app.get('/',(req, res)=>{
    res.send("Hi, This is back-end of chat application");
});




server.listen(4000, ()=>{
    console.log(`Server running on http://localhost:4000`);
});

