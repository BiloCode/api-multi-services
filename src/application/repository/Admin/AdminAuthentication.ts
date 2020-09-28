import { Authentication } from '../../interfaces/Authentication'
import Admin from '../../../database/mysql/models/Admin';

class AdminAuthentication implements Authentication {
  public exec = async (username : string, password : string) => {
    const data = await Admin.findOne({
      where : { username, password }
    });

    if(!data) return null;

    return {
      username,
      createdAt : new Date()
    };
  }
}

export default AdminAuthentication;