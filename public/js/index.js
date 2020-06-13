let socket = io();
socket.on('connect', function(){ 
    console.log("connected to server");

    socket.emit('createMessage',{
        from : "WDJ",
        text: "wats going on!"
    })

});

socket.on('disconnect', function() { 
    console.log("disconnected to server");
});


socket.on('newMessage',function(message){
    console.log("newMessage",message);
});