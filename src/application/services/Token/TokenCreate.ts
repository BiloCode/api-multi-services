import jwt from 'jsonwebtoken';
import { tokenKey } from '../../../config';

class TokenCreate {
  public run = (payload) : string => {
    const token = jwt.sign({ 
      data : payload}, 
      tokenKey,
      { expiresIn : '7d' }
    );

    return `Bearer ${token}`;
  }
}

export default TokenCreate;