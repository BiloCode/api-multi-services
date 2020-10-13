import { model, Schema } from "mongoose";
import arrayUniquePlugin from 'mongoose-unique-array';
import { IRoom } from "../../../interfaces/schemas/Room";

const MessageSchema = new Schema({
  message : {
    type : String,
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
    unique : true,
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

RoomSchema.plugin(arrayUniquePlugin);

export default model<IRoom>('room',RoomSchema);