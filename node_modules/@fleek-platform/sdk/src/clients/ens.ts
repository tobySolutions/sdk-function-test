import { Client, EnsRecord as EnsRecordWithRelations, EnsRecordGenqlSelection } from '@fleek-platform/gql-client-utils';

export type EnsRecord = Omit<EnsRecordWithRelations, 'site' | 'ipnsRecord'> & {
  site: Pick<EnsRecordWithRelations['site'], 'id'>;
  ipnsRecord: Pick<EnsRecordWithRelations['ipnsRecord'], 'id' | 'name' | 'hash'> & {
    id: string;
  };
};

type EnsClientOptions = {
  graphqlClient: Client;
};

export class EnsClient {
  private graphqlClient: Client;

  private static ENS_MAPPED_PROPERTIES: EnsRecordGenqlSelection = {
    id: true,
    name: true,
    updatedAt: true,
    createdAt: true,
    status: true,
    site: {
      id: true,
    },
    ipnsRecord: {
      name: true,
      id: true,
      hash: true,
    },
  };

  constructor(options: EnsClientOptions) {
    this.graphqlClient = options.graphqlClient;
  }

  public create = async ({ name, siteId, ipnsRecordId }: { name: string; siteId: string; ipnsRecordId: string }): Promise<EnsRecord> => {
    const response = await this.graphqlClient.mutation({
      createEnsRecord: {
        __args: {
         where: {
           ipnsRecordId,
           siteId,
         },
         data: {
           name,
          },
        },
        ...EnsClient.ENS_MAPPED_PROPERTIES,
      },
    });

    return response.createEnsRecord;
  };

  public get = async ({ id }: { id: string }): Promise<EnsRecord> => {
    const response = await this.graphqlClient.query({
      ensRecord: {
        __args: {
          where: {
            id,
          },
        },
        ...EnsClient.ENS_MAPPED_PROPERTIES,
      },
    });

    return response.ensRecord;
  };

  public getByName = async ({ name }: { name: string }): Promise<EnsRecord> => {
    const response = await this.graphqlClient.query({
      ensRecordByName: {
        __args: {
          where: {
            name,
          },
        },
        ...EnsClient.ENS_MAPPED_PROPERTIES,
      },
    });

    return response.ensRecordByName;
  };

  public verify = async ({ id }: { id: string }): Promise<EnsRecord> => {
    const response = await this.graphqlClient.mutation({
      verifyEnsRecord: {
        __args: {
         where: {
           id,
         },
        },
        ...EnsClient.ENS_MAPPED_PROPERTIES,
      },
    });

    return response.verifyEnsRecord;
  };

  public delete = async ({ id }: { id: string }): Promise<EnsRecord> => {
    const response = await this.graphqlClient.mutation({
      deleteEnsRecord: {
        __args: {
         where: {
           id,
         },
        },
        ...EnsClient.ENS_MAPPED_PROPERTIES,
      },
    });

    return response.deleteEnsRecord;
  };

  public list = async (): Promise<EnsRecord[]> => {
    const response = await this.graphqlClient.query({
      ensRecords: {
        data: {
          ...EnsClient.ENS_MAPPED_PROPERTIES,
        },
      },
    });

    return response.ensRecords.data;
  };

  public listByIpnsRecordId = async ({ ipnsRecordId }: { ipnsRecordId: string }): Promise<EnsRecord[]> => {
    const response = await this.graphqlClient.query({
      ensRecordsByIpnsId: {
        __args: {
          where: {
            ipnsRecordId,
          },
        },
        data: {
          ...EnsClient.ENS_MAPPED_PROPERTIES,
        },
      },
    });

    return response.ensRecordsByIpnsId.data;
  };
}
