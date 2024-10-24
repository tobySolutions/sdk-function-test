import { AuthorizationError } from '@fleek-platform/errors';
import { Client, createClient } from '@fleek-platform/gql-client-utils';

import { getDefined } from '../../defined';
import { graphqlFetcher } from '../graphqlFetcher';
import { requireNodeEnv } from '../requireNodeEnv';
import { AccessTokenService } from './AccessTokenService';

type PersonalAccessTokenServiceOptions = {
  graphqlServiceApiUrl?: string;
  personalAccessToken: string;
  projectId?: string | undefined;
};

export class PersonalAccessTokenService extends AccessTokenService {
  private client: Client;
  private personalAccessToken: string;
  private projectId?: string;
  private accessTokenTimeout?: NodeJS.Timeout;
  private accessToken?: string;

  constructor({
    personalAccessToken,
    projectId,
    graphqlServiceApiUrl = getDefined('SDK__GRAPHQL_API_URL'),
  }: PersonalAccessTokenServiceOptions) {
    requireNodeEnv();

    if (!personalAccessToken) {
      throw new AuthorizationError();
    }

    super();
    this.personalAccessToken = personalAccessToken;
    this.projectId = projectId;
    this.client = createClient({
      fetcher: async (operation) =>
        graphqlFetcher({
          operation,
          headers: {},
          endpoint: graphqlServiceApiUrl,
        }),
    });
  }

  private setAccessToken = async ({ token, expiration = 60 * 8 * 1000 }: { token: string; expiration?: number }) => {
    this.accessToken = token;

    if (this.accessTokenTimeout) {
      clearTimeout(this.accessTokenTimeout);
    }

    // 8 min timeout
    this.accessTokenTimeout = setTimeout(() => {
      this.accessToken = undefined;
    }, expiration);
  };

  private loginWithPersonalAccessToken = async () => {
    const { loginWithPersonalAccessToken } = await this.client.mutation({
      loginWithPersonalAccessToken: {
        __args: {
           data: {
             personalAccessToken: this.personalAccessToken,
             projectId: this.projectId,
            },
          },          
        }
      });

    this.setAccessToken({ token: loginWithPersonalAccessToken });
  };

  public getAccessToken = async () => {
    if (!this.accessToken) {
      await this.loginWithPersonalAccessToken();
    }

    return this.accessToken!;
  };

  public close = () => {
    clearTimeout(this.accessTokenTimeout);
    this.accessToken = undefined;
  };
}
