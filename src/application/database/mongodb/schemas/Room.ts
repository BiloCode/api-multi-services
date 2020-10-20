import { model, Schema } from "mongoose";

const RoomSchema = new Schema({
  workerId : {
    type : Number,
    required : true
  },
  userId : {
    type : Number,
    required : true
  },
  messageList : {
    type : [Schema.Types.ObjectId],
    ref : 'message',
    default : []
  }
}, {
  timestamps : {
    updatedAt : false
  }
});

export default model('room',RoomSchema);