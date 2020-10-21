import { model, Schema } from "mongoose";

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

export default model('message',MessageSchema);