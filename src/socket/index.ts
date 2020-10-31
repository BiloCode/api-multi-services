import CreateMessage from "../application/features/Message/CreateMessage";
import SendMessage from "../application/features/Room/SendMessage";

export const startServer = server => {
  const io = require('socket.io')(server);

  io.on('connection', socket => {

    socket.on('join-room', ({ roomId }) => {
      socket.join(roomId);
    });

    socket.on('send-message', async ({ userId , message , roomId }) => {
      try {
        const messageSave = await new CreateMessage().exec(message, userId);
        const isSendMessage = await new SendMessage().exec(roomId,messageSave?.id);
        
        if(isSendMessage)
          io.sockets.in(roomId).emit('send-message-success', messageSave);
        else
          io.sockets.in(roomId).emit('send-message-fail');
      }catch(e){
        console.log(e);
      }
    });

    socket.on('leave-room', ({ roomId }) => {
      socket.leave(roomId);
    })
  });
}