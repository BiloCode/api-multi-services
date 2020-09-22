export interface WorkerModel {
  id : number;
  availability : 'available' | 'not-available';
  location : string;
  basePrice : number;
  createdAt : Date;
  specialtyId : number;
  userId : number;
}