import CreateRoom from "../application/repository/Room/CreateRoom";
import GetRoomByUsers from "../application/repository/Room/GetRoomByUsers";
import SendMessage from "../application/repository/Room/SendMessage";

export const startServer = server => {
  const io = require('socket.io')(server);

  io.on('connection', socket => {

    socket.on('join-room', async ({ users }) => {
      try {
        let room = await new CreateRoom().exec(users);
        if(!room) {
          room = await new GetRoomByUsers().exec(users);
        }

        socket.join(room!._id);
        socket.to(room!._id).emit('send-room-data', room!);
      }catch(e){
        console.log(e);
      }
    });

    socket.on('send-message', async ({ roomId , message }) => {
      try {
        const isSend = await new SendMessage().exec(roomId,message);
        
        if(isSend)
          socket.to(roomId).emit('send-message-success', message);
        else
          socket.to(roomId).emit('send-message-fail');
      }catch(e){
        console.log(e);
      }
    });

  });
}