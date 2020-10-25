import { model, Schema , Types } from "mongoose";

const RoomSchema = new Schema({
  userWorkerId : {
    type : Number,
    required : true
  },
  userId : {
    type : Number,
    required : true
  },
  messageList : [
    {
      type : [Types.ObjectId],
      ref : 'message',
    }
  ]
}, {
  timestamps : {
    updatedAt : false
  }
});

export default model('room',RoomSchema);