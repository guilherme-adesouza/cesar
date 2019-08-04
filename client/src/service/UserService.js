import Service from './Service';
import BasicService from './BasicService';

class UserService extends BasicService {

  constructor(){
    super('user');
  }

  login = async(data) => {
    return await Service.postJSON('/api/login', data);
  };

  verifyAuth = async() => {
    const json =  await Service.getJSON('/api/verify-auth');
    return json.auth;
  };

  verifyMaster = async() => {
    const json =  await Service.getJSON('/api/verify-auth?checkMaster=true');
    return json.auth;
  };

  getUserData = async() => {
    const json =  await Service.getJSON('/api/verify-auth');
    return json.user;
  };

  logout = async(data) => {
    await Service.get('/api/logout');
  }
}

export default UserService;
