import Service from './Service';
import BasicService from './BasicService';

class UserService extends BasicService {

  constructor(){
    super('player');
  }

  static login = async(data) => {
    return await Service.postJSON('/api/login', data);
  }

  static verifyAuth = async() => {
    const json =  await Service.getJSON('/api/verify-auth');
    return json.auth;
  }

  static verifyMaster = async() => {
    const json =  await Service.getJSON('/api/verify-auth?checkMaster=true');
    return json.auth;
  }

  static logout = async(data) => {
    await Service.get('/api/logout');
  }
}

export default UserService;
