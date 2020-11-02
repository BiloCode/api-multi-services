export interface CurriculumModelAdd {
  title : string;
  content : string;
  phone : string;
  email : string;
  userId : number;
  specialtyId : number;
}

export interface CurriculumModel extends CurriculumModelAdd {
  id : number;
  state : 'in-wait' | 'ok';
  createdAt : Date;
}