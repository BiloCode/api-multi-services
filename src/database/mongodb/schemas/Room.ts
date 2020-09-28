import { model, Schema } from "mongoose";
import { IRoom } from "../../../application/interfaces/schemas/Room";

const MessageSchema = new Schema({
  message : {
    type : Number,
    required : true
  },
  userId : {
    type : Number,
    required : true
  }
},{
  timestamps : {
    updatedAt : false
  }
});

const RoomSchema = new Schema({
  users : {
    type : [Number,Number],
    required : true
  },
  messages : {
    type : [MessageSchema],
    default : []
  }
}, {
  timestamps : {
    updatedAt : false
  }
});

export default model<IRoom>('room',RoomSchema);