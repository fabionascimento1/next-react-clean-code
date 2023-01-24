import Controller from './Controller';

import { AuthGateway } from '../gateway/AuthGateway';
import LoginRequest from '../model/dto/request/LoginRequest';

class UserController extends Controller<AuthGateway> {
  constructor(
    gateway: AuthGateway,
  ) {
    super(gateway);
  }

  public async login(username: string, password: string): Promise<void> {
    if ([username, password].includes('')) {
      throw new Error('username and Password must not include white space.');
    }

    const response = await this.gateway.login(new LoginRequest(username, password));

    if (Math.floor(response.status / 100) === 2) {
      // this.storageDisptcher.set('accessToken', response.data?.accessToken);
    }

  }

  public async loadStorageToken() {
    //  const accessToken = await this.storageDisptcher.get('accessToken');

    /* if (accessToken) {
      this.authDispatcher.finishLogin(new LoginResponse(200, { accessToken: <string>accessToken }));
    } */
  }
}


export default UserController;
