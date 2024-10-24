import { PrivateGatewayNotFoundError, PrivateGatewaysNotFoundError } from '@fleek-platform/errors';
import {
  Client,
  PrivateGateway as PrivateGatewayWithRelations,
  PrivateGatewayGenqlSelection,
  Project,
} from '@fleek-platform/gql-client-utils';

import { isPrivateGatewayResponseQuery, isPrivateGatewaysResponseQuery } from '../utils/graphql';

type PrivateGatewayClientOptions = {
  graphqlClient: Client;
};

export type GetPrivateGatewayArgs = { id: string };
export type CreatePrivateGatewayArgs = { name: string; zoneId: string };
export type DeletePrivateGatewayArgs = { id: string };
export type UpdatePrivateGatewayArgs = { id: string; name: string };
export type GetPrivateGatewayBySlugArgs = { slug: string };
export type PrivateGateway = Omit<PrivateGatewayWithRelations, 'project' | 'domains' | 'domainsPaginated' | 'primaryDomain'> & {
  project: Pick<Project, 'id'>;
};

export class PrivateGatewayClient {
  private graphqlClient: Client;

  private static PRIVATE_GATEWAY_MAPPED_PROPERTIES: PrivateGatewayGenqlSelection = {
    id: true,
    slug: true,
    primaryDomain: { id: true, __typename: true },
    name: true,
    project: { id: true, __typename: true },
    zone: { id: true, __typename: true },
    updatedAt: true,
    createdAt: true,
    __typename: true,
  };

  constructor(options: PrivateGatewayClientOptions) {
    this.graphqlClient = options.graphqlClient;
  }

  public get = async ({ id }: GetPrivateGatewayArgs) => {
    const response = await this.graphqlClient.query({
      privateGateway: {
        __args: {
          where: {
            id,
          },
        },
        ...PrivateGatewayClient.PRIVATE_GATEWAY_MAPPED_PROPERTIES,
      },
    });

    // TODO: The genql generator provides the `isPrivateGateway`
    // utility. But the concurrent `isPrivateGatewayWithRelations`
    // would throw a false negative. It's important to investigate
    // why the util provided by the generator doesn't work.
    // The reason is that the following custom util `isPrivateGatewayResponseQuery` requires manual updates on data field change
    if (!isPrivateGatewayResponseQuery(response.privateGateway)) {
      throw new PrivateGatewayNotFoundError({ privateGateway: { id } });
    }

    return response.privateGateway;
  };

  public getBySlug = async ({ slug }: GetPrivateGatewayBySlugArgs) => {
    const response = await this.graphqlClient.query({
      privateGatewayBySlug: {
        __args: {
          where: {
            slug,
          },
        },
        ...PrivateGatewayClient.PRIVATE_GATEWAY_MAPPED_PROPERTIES,
      },
    });

    if (!isPrivateGatewayResponseQuery(response.privateGatewayBySlug)) {
      throw new PrivateGatewayNotFoundError({ privateGateway: { slug } });
    }

    return response.privateGatewayBySlug;
  };

  public list = async () => {
    const response = await this.graphqlClient.query({
      privateGateways: {
        data: {
          ...PrivateGatewayClient.PRIVATE_GATEWAY_MAPPED_PROPERTIES,
        },
        __typename: true,
      },
    });

    if (!isPrivateGatewaysResponseQuery(response.privateGateways.data)) {
      throw new PrivateGatewaysNotFoundError({});
    }

    return response.privateGateways.data;
  };

  public create = async ({ name, zoneId }: CreatePrivateGatewayArgs) => {
    const response = await this.graphqlClient.mutation({
      createPrivateGateway: {
        __args: {
          where: {
            zoneId,
          },
          data: {
            name,
          },
        },
        ...PrivateGatewayClient.PRIVATE_GATEWAY_MAPPED_PROPERTIES,
      },
    });

    return response.createPrivateGateway;
  };

  public delete = async ({ id }: DeletePrivateGatewayArgs) => {
    const response = await this.graphqlClient.mutation({
      deletePrivateGateway: {
        __args: {
          where: {
            id,
          },
        },
        ...PrivateGatewayClient.PRIVATE_GATEWAY_MAPPED_PROPERTIES,
      },
    });

    return response.deletePrivateGateway;
  };

  public update = async ({ id, name }: UpdatePrivateGatewayArgs) => {
    const response = await this.graphqlClient.mutation({
      updatePrivateGateway: {
        __args: {
          where: {
            id,
          },
          data: {
            name,
          },
        },
        ...PrivateGatewayClient.PRIVATE_GATEWAY_MAPPED_PROPERTIES,
      },
    });

    return response.updatePrivateGateway;
  };
}
