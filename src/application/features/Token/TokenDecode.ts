import jwt from 'jsonwebtoken';

class TokenDecode {
  public exec = (token : string) => {
    return jwt.decode(token,{ json : true })!;
  }
}

export default TokenDecode;