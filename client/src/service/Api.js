import AccountService from './AccountService';
import FileService from './FileService';
import GameService from './GameService';
import GenreService from './GenreService';
import PlatformService from './PlatformService';
import RaceService from './RaceService';
import RaceTypeService from './RaceTypeService';
import UserService from './UserService';

class Api {
  static Account = new AccountService();
  static File = new FileService();
  static Game = new GameService();
  static Genre = new GenreService();
  static Platform = new PlatformService();
  static Race = new RaceService();
  static RaceType = new RaceTypeService();
  static User = new UserService();
}

export default Api;
