import {
  Application as ApplicationWithRelations,
  ApplicationGenqlSelection,
  ApplicationWhitelistDomainGenqlSelection,
  Client,
} from '@fleek-platform/gql-client-utils';

export type Application = Omit<ApplicationWithRelations, '__typename' | 'whitelistDomains'> & {
  whitelistDomains: string[];
} & {
  whiteLabelDomains: string[];
};

type ApplicationsClientOptions = {
  graphqlClient: Client;
};

export type GetApplicationArgs = Pick<Application, 'id'>;

// Warning, whiteLabelDomains deprecated, the whitelistDomains is passed to whiteLabelDomains for retroactive support
export type CreateApplicationArgs = Pick<Application, 'name' | 'whitelistDomains'>;

// Warning, whiteLabelDomains deprecated, the whitelistDomains is passed to whiteLabelDomains for retroactive support
export type UpdateApplicationArgs = Pick<Application, 'id'> & Partial<Pick<Application, 'name' | 'whitelistDomains'>>;

export type DeleteApplicationArgs = Pick<Application, 'id'>;

export class ApplicationsClient {
  private graphqlClient: Client;

  private static WHITE_LIST_DOMAIN_MAPPED_PROPERTIES = {
    id: true,
    hostname: true,
  } satisfies ApplicationWhitelistDomainGenqlSelection;

  private static APPLICATION_MAPPED_PROPERTIES = {
    id: true,
    name: true,
    clientId: true,
    whitelistDomains: ApplicationsClient.WHITE_LIST_DOMAIN_MAPPED_PROPERTIES,
    whiteLabelDomains: ApplicationsClient.WHITE_LIST_DOMAIN_MAPPED_PROPERTIES,
    updatedAt: true,
    createdAt: true,
  } satisfies ApplicationGenqlSelection;

  constructor(options: ApplicationsClientOptions) {
    this.graphqlClient = options.graphqlClient;
  }

  public get = async ({ id }: GetApplicationArgs) => {
    const response = await this.graphqlClient.query({
      application: {
        __args: {
          where: {
            id,
          },
        },
        ...ApplicationsClient.APPLICATION_MAPPED_PROPERTIES,
      }
    });

    return response.application;
  };

  public list = async () => {
    const response = await this.graphqlClient.query({
      applications: { data: ApplicationsClient.APPLICATION_MAPPED_PROPERTIES },
    });

    return response.applications.data;
  };

  public create = async ({ name, whitelistDomains }: CreateApplicationArgs) => {
    const response = await this.graphqlClient.mutation({
      createApplication: {
        __args: {
          data: {
            name,
            whitelistDomains,
          // Warning: The whiteLabelDomains has been deprecated
          // providing ephemeral retroactivity
            whiteLabelDomains: [
              ...whitelistDomains,
            ],
          },
        },
        ...ApplicationsClient.APPLICATION_MAPPED_PROPERTIES,
      },
    });

    return response.createApplication;
  };

  public update = async ({ id, name, whitelistDomains }: UpdateApplicationArgs) => {
    const response = await this.graphqlClient.mutation({
      updateApplication: {
        __args: {
         where: { id },
         data: {
           name,
           whitelistDomains,
          // Warning: The whiteLabelDomains has been deprecated
          // providing ephemeral retroactivity
           whiteLabelDomains: whitelistDomains
             ? [...whitelistDomains]
             : [],
          },
        },
        ...ApplicationsClient.APPLICATION_MAPPED_PROPERTIES,
      },
    });

    return response.updateApplication;
  };

  public delete = async ({ id }: DeleteApplicationArgs) => {
    const response = await this.graphqlClient.mutation({
      deleteApplication: {
        __args: {
          where: {
            id,
          },
        },
        ...ApplicationsClient.APPLICATION_MAPPED_PROPERTIES,
      },
    });

    return response.deleteApplication;
  };
}
