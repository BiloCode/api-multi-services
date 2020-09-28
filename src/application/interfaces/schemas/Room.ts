import { Document } from 'mongoose';

interface IMessage {
  message : string;
  userId : number;
}

export interface IRoom extends Document {
  users : [number,number];
  messages : IMessage[];
}