import { SiteCreationFailedError, SiteDeploymentNotFoundError, SiteNotFoundError, SitesNotFoundError } from '@fleek-platform/errors';
import {
  Client,
  Deployment as DeploymentWithRelations,
  DeploymentGenqlSelection,
  Domain as DomainWithRelations,
  Site as SiteWithRelations,
  SiteGenqlSelection,
} from '@fleek-platform/gql-client-utils';

import { isDeploymentResponseQuery, isSiteResponseQuery, isSitesResponseQuery } from '../utils/graphql';

export type Deployment = Pick<DeploymentWithRelations, 'id' | 'status' | 'storageType' | 'siteId' | 'cid' | 'updatedAt' | 'createdAt'>;

export type Site = Pick<SiteWithRelations, 'id' | 'name' | 'slug'> & {
  ipnsRecords: Pick<SiteWithRelations['ipnsRecords'][number], 'id'>[];
  domains: Pick<SiteWithRelations['domains'][number], 'id' | 'hostname'>[];
  zones: Pick<SiteWithRelations['zones'][number], 'id' | 'status'>[];
  deployments: Deployment[];
  primaryDomain?: Pick<DomainWithRelations, 'id' | 'hostname'>;
};

type SitesClientOptions = {
  graphqlClient: Client;
};

export type GetSiteArgs = Pick<Site, 'id'>;
export type GetBySlugArgs = Pick<Site, 'slug'>;
export type CreateSiteArgs = Pick<Site, 'name'>;
export type DeleteSiteArgs = Pick<Site, 'id'>;
export type CreateCustomIpfsDeploymentArgs = Required<Pick<DeploymentWithRelations, 'siteId' | 'cid'>>;
export type GetDeploymentArgs = Pick<DeploymentWithRelations, 'id'>;

export class SitesClient {
  private graphqlClient: Client;

  private static DEPLOYMENT_MAPPED_PROPERTIES = {
    id: true,
    status: true,
    storageType: true,
    siteId: true,
    cid: true,
    updatedAt: true,
    createdAt: true,
    __typename: true,
  } satisfies DeploymentGenqlSelection;

  private static SITE_MAPPED_PROPERTIES = {
    id: true,
    name: true,
    slug: true,
    domains: { id: true, hostname: true, __typename: true },
    zones: { id: true, status: true, __typename: true },
    primaryDomain: { id: true, hostname: true, __typename: true },
    ipnsRecords: { id: true, __typename: true },
    deployments: SitesClient.DEPLOYMENT_MAPPED_PROPERTIES,
    __typename: true,
  } satisfies SiteGenqlSelection;

  constructor(options: SitesClientOptions) {
    this.graphqlClient = options.graphqlClient;
  }

  public get = async ({ id }: GetSiteArgs): Promise<Site> => {
    const response = await this.graphqlClient.query({
      site: {
        __args: {
          where: {
            id,
          },
        },
        ...SitesClient.SITE_MAPPED_PROPERTIES,
      },
    });

    if (!isSiteResponseQuery(response.site)) {
      throw new SiteNotFoundError({ site: { id } });
    }

    return this.adapt(response.site);
  };

  public getBySlug = async ({ slug }: GetBySlugArgs): Promise<Site> => {
    const response = await this.graphqlClient.query({
      siteBySlug: {
        __args: {
          where: {
            slug,
          },
        },
        ...SitesClient.SITE_MAPPED_PROPERTIES,
      },
    });

    if (!isSiteResponseQuery(response.siteBySlug)) {
      throw new SiteNotFoundError({ site: { slug } });
    }

    return this.adapt(response.siteBySlug);
  };

  public list = async (): Promise<Site[]> => {
    const response = await this.graphqlClient.query({
      sites: {
        __args: {
          where: {},
        },
        data: {
          ...SitesClient.SITE_MAPPED_PROPERTIES,
        },
        __typename: true,
      },
    });

    if (!isSitesResponseQuery(response.sites.data)) {
      throw new SitesNotFoundError();
    }

    return response.sites.data.map(this.adapt);
  };

  public create = async ({ name }: CreateSiteArgs): Promise<Site> => {
    const response = await this.graphqlClient.mutation({
      createSite: {
        __args: {
          data: {
            name,
          },
        },
        ...SitesClient.SITE_MAPPED_PROPERTIES,
      },
    });

    if (!isSiteResponseQuery(response.createSite)) {
      throw new SiteCreationFailedError();
    }

    return this.adapt(response.createSite);
  };

  public delete = async ({ id }: DeleteSiteArgs): Promise<Site> => {
    const response = await this.graphqlClient.mutation({
      deleteSite: {
        __args: {
          where: {
            id,
          },
        },
        ...SitesClient.SITE_MAPPED_PROPERTIES,
      },
    });

    if (!isSiteResponseQuery(response.deleteSite)) {
      throw new SiteNotFoundError({ site: { id } });
    }

    return this.adapt(response.deleteSite);
  };

  public createCustomIpfsDeployment = async ({ siteId, cid }: CreateCustomIpfsDeploymentArgs): Promise<Deployment> => {
    const response = await this.graphqlClient.mutation({
      createCustomIpfsDeployment: {
        __args: {
          data: {
            siteId,
            cid,
          },
        },
        ...SitesClient.DEPLOYMENT_MAPPED_PROPERTIES,
      },
    });

    return response.createCustomIpfsDeployment;
  };

  public getDeployment = async ({ id }: GetDeploymentArgs): Promise<Deployment> => {
    const response = await this.graphqlClient.query({
      deployment: {
        __args: {
          where: {
            id,
          },
        },
        ...SitesClient.DEPLOYMENT_MAPPED_PROPERTIES,
      },
    });

    // TODO: The `isDeploymentsWithAggregation` at time of
    // writing version, would not compute this correctly
    // How many other methods using the generated utilities?
    if (!isDeploymentResponseQuery(response.deployment)) {
      throw new SiteDeploymentNotFoundError({ deployment: { id } });
    }

    return response.deployment;
  };

  private adapt(site: SiteWithRelations): Site {
    return {
      id: site.id,
      name: site.name,
      slug: site.slug,
      ipnsRecords: site.ipnsRecords,
      domains: site.domains,
      zones: site.zones,
      deployments: site.deployments,
    };
  }
}
