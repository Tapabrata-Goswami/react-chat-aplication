import express from 'express';
import {createServer} from 'http';
import { Server } from 'socket.io';
const app = express();
const server = new createServer(app);
const io = new Server(server,{
    cors:{
        origin:'*',
        methods:["GET", "POST"]
    }
});

app.get('/',(req, res)=>{
    res.send("Hi, This is back-end of chat application");
});

io.on("connection",(socket)=>{
    console.log("User Connected : ", socket.id);
    
    
    socket.on("disconnect",()=>{
        console.log("User Disconnected :", socket.id);
    });
});




server.listen(4000, ()=>{
    console.log(`Server running on http://localhost:4000`);
});

