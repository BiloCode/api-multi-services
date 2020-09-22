import jwt from 'jsonwebtoken';
import { tokenKey } from '../../../config';

class TokenIsExpired {
  public exec = (token : string) => {
    try{ 
      jwt.verify(token, tokenKey);
      return false;
    }catch(e){
      console.log(e);
      return true;
    }
  }
}

export default TokenIsExpired;