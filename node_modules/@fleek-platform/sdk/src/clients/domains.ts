import { DomainNotFoundError, DomainsNotFoundError } from '@fleek-platform/errors';
import {
  Client,
  Domain as DomainWithRelations,
  DomainGenqlSelection,
  Zone as ZoneWithRelations,
  ZoneGenqlSelection,
} from '@fleek-platform/gql-client-utils';

import { isDomainResponseQuery, isDomainsResponseQuery } from '../utils/graphql';

type DomainsClientOptions = {
  graphqlClient: Client;
};

export type Domain = Pick<
  DomainWithRelations,
  'id' | 'zone' | 'hostname' | 'isVerified' | 'updatedAt' | 'createdAt' | 'dnsConfigs' | 'status'
>;

export type Zone = Pick<ZoneWithRelations, 'id' | 'originUrl' | 'createdAt' | 'updatedAt' | 'type' | 'status'>;

export class DomainsClient {
  private graphqlClient: Client;

  private static DOMAIN_MAPPED_PROPERTIES: DomainGenqlSelection = {
    id: true,
    zone: { id: true, __typename: true },
    hostname: true,
    isVerified: true,
    updatedAt: true,
    createdAt: true,
    dnsConfigs: { id: true, type: true, name: true, value: true, createdAt: true, updatedAt: true, __typename: true },
    status: true,
    __typename: true,
  };

  private static ZONE_MAPPED_PROPERTIES: ZoneGenqlSelection = {
    id: true,
    originUrl: true,
    createdAt: true,
    updatedAt: true,
    type: true,
    status: true,
    __typename: true,
  };

  constructor(options: DomainsClientOptions) {
    this.graphqlClient = options.graphqlClient;
  }

  // TODO: Check which is the right type
  // Promise<DomainsWithAggregation["data"]> fails for some reason
  public list = async () => {
    const response = await this.graphqlClient.query({
      domains: {
        data: {
          ...DomainsClient.DOMAIN_MAPPED_PROPERTIES,
        },
        __typename: true,
      },
    });

    // TODO: The genql provides `isDomain`
    // But found that for the concurrent `isDomainWithAggregation`
    // used in other parts of the source, would not be
    // correctly computed. Thus, provide a costum utility method
    // to safe-guard. Although, when type/fields change these
    // have to be computed manually. So, would be best to
    // investigate what caused the change.
    if (!isDomainsResponseQuery(response.domains?.data)) {
      throw new DomainsNotFoundError();
    }

    return response.domains.data;
  };

  public get = async ({ domainId }: { domainId: string }) => {
    const response = await this.graphqlClient.query({
      domain: {
        __args: {
          where: {
            id: domainId,
          },
        },
        ...DomainsClient.DOMAIN_MAPPED_PROPERTIES,
      },
    });

    if (!isDomainResponseQuery(response.domain)) {
      throw new DomainNotFoundError({ domain: { id: domainId } });
    }

    return response.domain;
  };

  public getByHostname = async ({ hostname }: { hostname: string }): Promise<DomainWithRelations> => {
    const response = await this.graphqlClient.query({
      domainByHostname: {
        __args: {
          where: {
            hostname,
          },
        },
        ...DomainsClient.DOMAIN_MAPPED_PROPERTIES,
      },
    });

    if (!isDomainResponseQuery(response.domainByHostname)) {
      throw new DomainNotFoundError({ domain: { hostname } });
    }

    return response.domainByHostname;
  };

  public listByZoneId = async ({ zoneId }: { zoneId: string }) => {
    const response = await this.graphqlClient.query({
      domainsByZoneId: {
        __args: {
          where: {
            zoneId,
          },
        },
        data: {
          ...DomainsClient.DOMAIN_MAPPED_PROPERTIES,
        },
        __typename: true,
      },
    });

    if (!isDomainsResponseQuery(response.domainsByZoneId?.data)) {
      throw new DomainsNotFoundError();
    }

    return response.domainsByZoneId.data;
  };

  public createDomain = async ({ zoneId, hostname }: { zoneId: string; hostname: string }) => {
    const response = await this.graphqlClient.mutation({
      createDomain: {
        __args: {
          where: {
            zoneId,
          },
          data: {
            hostname,
          },
        },
        // TODO: The `DOMAIN_MAPPED_PROPERTIES` when used here
        // seem to break the query. Thus, using `__scalar` true.
        // Ideally, check what cause need for this change.
        __scalar: true,
      },
    });

    return response.createDomain;
  };

  public deleteDomain = async ({ domainId }: { domainId: string }) => {
    const response = await this.graphqlClient.mutation({
      deleteDomain: {
        __args: {
          where: {
            id: domainId,
          },
        },
        ...DomainsClient.DOMAIN_MAPPED_PROPERTIES,
      },
    });

    return response.deleteDomain;
  };

  public verifyDomain = async ({ domainId }: { domainId: string }) => {
    const response = await this.graphqlClient.mutation({
      verifyDomain: {
        __args: {
          where: {
            id: domainId,
          },
        },
        ...DomainsClient.DOMAIN_MAPPED_PROPERTIES,
      },
    });

    return response.verifyDomain;
  };

  public listZones = async (): Promise<Zone[]> => {
    const response = await this.graphqlClient.query({ zones: { data: DomainsClient.ZONE_MAPPED_PROPERTIES } });

    return response.zones.data;
  };

  public getZone = async ({ id }: { id: string }): Promise<Zone> => {
    const response = await this.graphqlClient.query({
      zone: {
        __args: {
          where: {
            id,
          },
        },
        ...DomainsClient.ZONE_MAPPED_PROPERTIES,
      },
    });

    return response.zone;
  };

  public createZoneForSite = async ({ siteId }: { siteId: string }): Promise<Zone> => {
    const response = await this.graphqlClient.mutation({
      createZoneForSite: {
        __args: {
          where: {
            siteId,
          },
        },
        // TODO: Investigate why the previous fields
        // would now throw> Error: type `Zone` does not have a field `zone`
        // ...DomainsClient.DOMAIN_MAPPED_PROPERTIES,
        __scalar: true,
      },
    });

    return response.createZoneForSite;
  };

  public createZoneForPrivateGateway = async (): Promise<Zone> => {
    const response = await this.graphqlClient.mutation({ createZoneForPrivateGateway: DomainsClient.ZONE_MAPPED_PROPERTIES });

    return response.createZoneForPrivateGateway;
  };

  public deleteZone = async ({ id }: { id: string }): Promise<Zone> => {
    const response = await this.graphqlClient.mutation({
      deleteZone: {
        __args: {
          where: {
            id,
          },
        },
        ...DomainsClient.ZONE_MAPPED_PROPERTIES,
      },
    });

    return response.deleteZone;
  };
}
