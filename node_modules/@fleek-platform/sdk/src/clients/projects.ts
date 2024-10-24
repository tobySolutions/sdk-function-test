import { Client, Project as ProjectWithRelations, ProjectGenqlSelection } from '@fleek-platform/gql-client-utils';
import { File } from '@web-std/file';

type ProjectsClientOptions = {
  graphqlClient: Client;
};

type CreateProjectArgs = { name: string };

type UpdateProjectArgs = {
  where: { id: string };
  data: { name?: string; avatar?: typeof File['prototype']; backupStorageOnArweave?: boolean; backupStorageOnFilecoin?: boolean };
};

type GetProjectArgs = { id: string };

export type Project = Omit<ProjectWithRelations, 'currentUserMembership' | 'memberships' | 'membershipsPaginated'>;

export class ProjectsClient {
  private graphqlClient: Client;

  private static PROJECT_MAPPED_PROPERTIES: ProjectGenqlSelection = {
    id: true,
    name: true,
    avatar: true,
    backupStorageOnArweave: true,
    backupStorageOnFilecoin: true,
    createdAt: true,
  };

  constructor(options: ProjectsClientOptions) {
    this.graphqlClient = options.graphqlClient;
  }

  public create = async ({ name }: CreateProjectArgs): Promise<Project> => {
    const response = await this.graphqlClient.mutation({
      createProject: {
        __args: {
          data: {
            name,
          },
        },
        ...ProjectsClient.PROJECT_MAPPED_PROPERTIES,
      },
    });

    return response.createProject;
  };

  public update = async ({ where, data }: UpdateProjectArgs): Promise<Project> => {
    const response = await this.graphqlClient.mutation({
      updateProject: {
        __args: {
          where,
          data,
        },
        ...ProjectsClient.PROJECT_MAPPED_PROPERTIES,
      },
    });

    return response.updateProject;
  };

  public get = async ({ id }: GetProjectArgs): Promise<Project> => {
    const response = await this.graphqlClient.query({
      project: {
        __args: {
          where: {
            id,
          },
        },
        ...ProjectsClient.PROJECT_MAPPED_PROPERTIES,
      }
    });

    return response.project;
  };

  public list = async (): Promise<Project[]> => {
    const response = await this.graphqlClient.query({ projects: { data: ProjectsClient.PROJECT_MAPPED_PROPERTIES } });

    return response.projects.data;
  };
}
