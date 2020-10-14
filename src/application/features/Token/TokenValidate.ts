import jwt from 'jsonwebtoken';

class TokenIsExpired {
  public exec = (token : string) => {
    try{ 
      jwt.verify(token, process.env.TOKEN_KEY!);
      return false;
    }catch(e){
      console.log(e);
      return true;
    }
  }
}

export default TokenIsExpired;