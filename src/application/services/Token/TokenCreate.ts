import jwt from 'jsonwebtoken';

class TokenCreate {
  public run = (payload) : string => {
    const token = jwt.sign({ 
      data : payload}, 
      process.env.TOKEN_KEY!,
      { expiresIn : '7d' }
    );

    return `Bearer ${token}`;
  }
}

export default TokenCreate;