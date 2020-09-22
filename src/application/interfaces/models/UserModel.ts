export interface UserModelAdd {
  name : string;
  lastname : string;
  username : string;
  password : string;
  districtId : number;
}

export interface UserModel extends UserModelAdd{
  id : number;
  profileImage : string;
  description : string;
  createdAt : Date;
  updatedAt : Date;
}