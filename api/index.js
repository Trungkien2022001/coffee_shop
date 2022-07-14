
const express = require("express")
require('dotenv').config
const adminRoute = require('./routes/admin')
const PORT = 1234
const app = express()
const server = require('http').createServer(app);
const socketIo = require('socket.io')(server, {
    cors:{
        origin:"*",
    }
})

const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/', adminRoute)


socketIo.on("connection", (socket) =>{
    console.log("new client connected" , socket.id)
    socket.on("sendDataClient", (data)=>{
        socketIo.emit("sendDataServer", {data: data, id: socket.id});
    })
    socket.on('disconnect', ()=>{
        console.log("disconnected")
    })
}
)
server.listen(PORT,(req, res)=>{
    console.log(`App is listening on port ${PORT}`)
})

