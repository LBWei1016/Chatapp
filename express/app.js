var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const {joinUsers, removeUsers} = require('./users');

var port = 8000;

var userName = ""
var roomName = "";

//"express" expression
app.get('/page', function(req, res) {
    res.sendFile(__dirname + '/index.html');

    //usr-data are packed inside url of request
    userName = req.query.userName;
    roomName = req.query.roomName;
});


http.listen(port)

//After socket.io receives 'connection' event, everything starts.
io.on('connection', function(socket) {
    console.log('connected!');

    console.log('Someone joined');
    let newUser = joinUsers(socket.id, userName, roomName);

    //send data to web page "index.html"
    socket.emit('send data', {id: socket.id, userName: newUser.userName, 
        roomName: newUser.roomName});
    //thisRoom = newUser.roomName;

    //show new user's information
    console.log(newUser);

    //socket.io has its "Room" API
    socket.join(newUser.roomName);
    
    //send specific message information to paarticular room
    socket.on('chat message', (data) => {
        let thisRoom = data.room;
        io.to(thisRoom).emit('chat message', {data: data, id: socket.id});
    });

    //output disconnect information
    socket.on('disconnect', () => {
        const user = removeUsers(socket.id);
        console.log(user);

        if(user) {
            console.log(user[0].userName + " has left");
        } 
        console.log("disconnected");
    })
});

