import { WorkDetailState } from "../../types";

export interface WorkDetailModel {
  id : number;
  price : number;
  state : WorkDetailState;
  title : string;
  description : string;
  createdAt : Date;
  updatedAt : Date;
  workerId : number;
  userId : number;
  finished : Date;
}