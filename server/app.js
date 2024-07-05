import express from 'express';
import {createServer} from 'http';
import { Server } from 'socket.io';
const app = express();

const server = new createServer(app);

const io = Server(server);

