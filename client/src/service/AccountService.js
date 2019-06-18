import Service from './Service';
import BasicService from './BasicService';

class AccountService extends BasicService {
  constructor(){
    super('account');
  }

  getByPlayer = async () => {
    return await Service.getJSON(`${this.url}-player`);
  }

  getGames = async (accountId) => {
      return await Service.getJSON(`${this.url}/${accountId}/games`);
  }
}

export default AccountService;
