export interface UserModelAdd {
  fullName : string;
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