import { Client, IpnsRecord as IpnsRecordWithRelations,
  IpnsRecordGenqlSelection } from '@fleek-platform/gql-client-utils';

type IpnsClientOptions = {
  graphqlClient: Client;
};

export type PublishRecordArgs = {
  id: string;
  hash: string;
};

export type ResolveNameArgs = {
  name: string;
};

export type CreateRecordForSiteArgs = {
  siteId: string;
};

export type DeleteRecordArgs = {
  id: string;
};

export type GetRecordArgs = {
  name: string;
};

export type PublishSignedNameArgs = {
  input: string;
  key: string;
};

export type IpnsRecord = Pick<IpnsRecordWithRelations, 'id' | 'name' | 'hash'> & {
  ensRecords: Pick<IpnsRecordWithRelations['ensRecords'][number], 'id'>[];
};

export class IpnsClient {
  private graphqlClient: Client;

  private static RECORD_MAPPED_PROPERTIES = {
    id: true,
    name: true,
    hash: true,
    ensRecords: { id: true },
  } satisfies IpnsRecordGenqlSelection;

  constructor(options: IpnsClientOptions) {
    this.graphqlClient = options.graphqlClient;
  }

  public publishSignedName = async ({ key, input }: PublishSignedNameArgs) => {
    const response = await this.graphqlClient.mutation({
      publishSignedIpnsName: {
        __args: {
          data: {
            input,
            key,
          },
        },
      },
    });

    return response.publishSignedIpnsName;
  };

  public resolveName = async ({ name }: ResolveNameArgs) => {
    const response = await this.graphqlClient.query({
      resolveIpnsName: {
        __args: {
          where: {
            name,
          },          
        },
      },
    });

    return response.resolveIpnsName;
  };

  public publishRecord = async ({ hash, id }: PublishRecordArgs): Promise<IpnsRecord> => {
    const response = await this.graphqlClient.mutation({
      publishIpnsRecord: {
        __args: {
          where: {
            id,
          },
          data: {
            hash,
          },
        },
        ...IpnsClient.RECORD_MAPPED_PROPERTIES,
      },
    });

    return response.publishIpnsRecord;
  };

  public createRecord = async (): Promise<IpnsRecord> => {
    const response = await this.graphqlClient.mutation({
      createIpnsRecord: IpnsClient.RECORD_MAPPED_PROPERTIES,
    });

    return response.createIpnsRecord;
  };

  public createRecordForSite = async ({ siteId }: CreateRecordForSiteArgs): Promise<IpnsRecord> => {
    const response = await this.graphqlClient.mutation({
      createIpnsRecordForSite: {
        __args: {
          where: {
            siteId,
          },
        },
        ...IpnsClient.RECORD_MAPPED_PROPERTIES,
      },
    });

    return response.createIpnsRecordForSite;
  };

  public deleteRecord = async ({ id }: DeleteRecordArgs): Promise<IpnsRecord> => {
    const response = await this.graphqlClient.mutation({
      deleteIpnsRecord: {
        __args: {
          where: {
            id,
          },
        },
        ...IpnsClient.RECORD_MAPPED_PROPERTIES,
      },
    });

    return response.deleteIpnsRecord;
  };

  public listRecords = async (): Promise<IpnsRecord[]> => {
    const response = await this.graphqlClient.query({
      ipnsRecords: { data: IpnsClient.RECORD_MAPPED_PROPERTIES },
    });

    return response.ipnsRecords.data;
  };

  public getRecord = async ({ name }: GetRecordArgs): Promise<IpnsRecord> => {
    const response = await this.graphqlClient.query({
      ipnsRecord: {
        __args: {
          where: {
            name,
          },
        },
        ...IpnsClient.RECORD_MAPPED_PROPERTIES,
      }
    });

    return response.ipnsRecord;
  };
}
