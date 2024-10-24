import { Client } from '@fleek-platform/gql-client-utils';

type UserClientOptions = {
  graphqlClient: Client;
};

export class UserClient {
  private graphqlClient: Client;

  constructor(options: UserClientOptions) {
    this.graphqlClient = options.graphqlClient;
  }

  public listPersonalAccessTokens = async () => {
    const response = await this.graphqlClient.query({
      personalAccessTokens: {
        data: {
          id: true,
          createdAt: true,
          name: true,
          maskedToken: true,
        }
      },
    });

    return response.personalAccessTokens.data;
  };

  public deletePersonalAccessToken = async ({ id }: { id: string }) => {
    const response = await this.graphqlClient.mutation({
      deletePersonalAccessToken: {
        __args: {
          where: {
            id,
          },
        },
        __scalar: true,
      },
    });

    return response.deletePersonalAccessToken;
  };
}
