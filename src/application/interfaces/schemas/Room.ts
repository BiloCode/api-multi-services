import { Document } from "mongoose";
import { IMessage } from "./Message";

export interface IRoom extends Document {
  userWorkerId : number;
  userId : number;
  messageList : IMessage['_id']
}