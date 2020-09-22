import { WorkDetailState } from "../../types";

export interface WorkDetailModel {
  id : number;
  price : number;
  state : WorkDetailState;
  description : string;
  createdAt : Date;
  updatedAt : Date;
  workerId : number;
  userId : number;
}