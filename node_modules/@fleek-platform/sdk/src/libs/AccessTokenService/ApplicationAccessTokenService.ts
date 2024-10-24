import { constants, decodeAccessToken } from '@fleek-platform/auth';
import fetch from 'cross-fetch';
import { DateTime } from 'luxon';

import { getDefined } from '../../defined';
import { AccessTokenService } from './AccessTokenService';

type ApplicationAccessTokenServiceOptions = {
  clientId: string;
  authAppsServiceUrl?: string;
  origin?: string;
};

export class ApplicationAccessTokenService extends AccessTokenService {
  private authAppsServiceUrl: string;
  private clientId: string;
  private accessToken?: string;
  private origin?: string;

  constructor({
    clientId,
    authAppsServiceUrl = getDefined('SDK__AUTH_APPS_URL'),
    origin = window.location.origin,
  }: ApplicationAccessTokenServiceOptions) {
    super();
    this.clientId = clientId;
    this.authAppsServiceUrl = authAppsServiceUrl;
    this.origin = origin;
  }

  private refreshAccessToken = async () => {
    const params = [constants.CLIENT_ID_QUERY_STRING_FIELD_NAME, this.clientId].join('=');
    const url = `${this.authAppsServiceUrl}/token?${params}`;
    const headers = new Headers();

    if (this.origin) {
      headers.set('Origin', this.origin);
    }
    
    const response = await fetch(url, {
        method: 'GET',
        headers,
      },
    );

    this.accessToken = await response.text();
  };

  public getAccessToken = async () => {
    if (!this.accessToken) {
      await this.refreshAccessToken();

      return this.accessToken!;
    }

    const payload = decodeAccessToken({ token: this.accessToken });

    if (payload.exp < DateTime.now().toSeconds()) {
      await this.refreshAccessToken();
    }

    return this.accessToken;
  };
}
