import { Document } from "mongoose";

export interface IMessage extends Document {
  userId : number;
  message : string;
}