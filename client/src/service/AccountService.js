import Service from './Service';
import BasicService from './BasicService';

class AccountService extends BasicService {
  constructor(){
    super('account');
  }
}

export default AccountService;
