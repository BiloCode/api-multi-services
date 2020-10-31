import { model, Schema } from "mongoose";
import { IMessage } from "../../../interfaces/schemas/Message";

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

export default model<IMessage>('message',MessageSchema);