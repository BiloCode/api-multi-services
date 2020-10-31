import { model, Schema , Types } from "mongoose";
import { IRoom } from "../../../interfaces/schemas/Room";

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

export default model<IRoom>('room',RoomSchema);