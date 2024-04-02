const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.routes");
const { bugRouter } = require("./routes/bug.routes");
const http = require('http');
const socketIo = require('socket.io');

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/bgs', bugRouter);

const server = http.createServer(app);
const io = socketIo(server);

// Modify user model and routes as needed for authentication

io.on('connection', (socket) => {
    console.log('New client connected');

    // Join a room based on the user's ID
    socket.on('join', (userId) => {
        socket.join(userId);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });

    // Listen for messages from a specific sender and send to a specific receiver
    socket.on('privateMessage', ({ senderId, receiverId, message }) => {
        io.to(receiverId).emit('privateMessage', { senderId, message });
    });
});


server.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("Connected to db");
        console.log("Server is running at ");
    } catch (error) {
        console.log(error);
    }
});
