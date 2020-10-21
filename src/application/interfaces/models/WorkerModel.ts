import { WorkerState } from "../../types";

export interface WorkerModel {
  id : number;
  availability : WorkerState;
  basePrice : number;
  createdAt : Date;
  specialtyId : number;
  userId : number;
}