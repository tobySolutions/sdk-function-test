import { AuthorizationError } from '@fleek-platform/errors';

import { AccessTokenService } from './AccessTokenService';

type StaticAccessTokenServiceOptions = {
  accessToken: string;
};

export class StaticAccessTokenService extends AccessTokenService {
  private accessToken: string;

  constructor({ accessToken }: StaticAccessTokenServiceOptions) {
    super();

    if (!accessToken) {
      throw new AuthorizationError();
    }

    this.accessToken = accessToken;
  }

  public getAccessToken = async () => this.accessToken!;
}
