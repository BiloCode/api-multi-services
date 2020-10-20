import CreateMessage from "../application/features/Message/CreateMessage";
import CreateRoom from "../application/features/Room/CreateRoom";
import GetRoomByUsers from "../application/features/Room/GetRoomByUsers";
import SendMessage from "../application/features/Room/SendMessage";

export const startServer = server => {
  const io = require('socket.io')(server);

  io.on('connection', socket => {

    socket.on('join-room', async ({ workerId, userId }) => {
      try {
        let room = await new GetRoomByUsers().exec(workerId, userId);
        if(!room) {
          room = await new CreateRoom().exec(workerId, userId);
        }

        socket.join(room!._id);
        socket.to(room!._id).emit('send-room-data', room!);
      }catch(e){
        console.log(e);
      }
    });

    socket.on('send-message', async ({ userId , message , roomId }) => {
      try {
        const messageSave = await new CreateMessage().exec(message, userId);
        const isSendMessage = await new SendMessage().exec(roomId,messageSave?.id);
        
        if(isSendMessage)
          socket.to(roomId).emit('send-message-success', { message, userId });
        else
          socket.to(roomId).emit('send-message-fail');
      }catch(e){
        console.log(e);
      }
    });

  });
}