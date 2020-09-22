class GetFormattedToken {
  public exec = (token : string) => {
    const tokenFormat = /^(Bearer){1}\s([a-zA-Z0-9.\-_<>;])*$/g;

    if(!token.match(tokenFormat))
      throw 'Token is not in the format correct';

    return token.split(' ')[1];
  }
}

export default GetFormattedToken;