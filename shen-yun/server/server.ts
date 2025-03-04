import { Server, Socket } from 'socket.io';

const io = new Server({
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    }
});

io.on('connection', (socket) => {
    console.log('a user connected');
    
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('message', (msg) => {
        console.log('message: ' + msg);
        io.emit('message', msg);
    });
});

const PORT = process.env.PORT || 3001;
io.listen(Number(PORT));
console.log(`WebSocket server running on port ${PORT}`);