import { seeds } from '@fleek-platform/tester';
import { File } from '@web-std/file';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { beforeEach, describe, expect, vi } from 'vitest';

import { mockDatabasesAndGraphqlWithBrowserSdkForEachTest } from '../testTools/mockDatabasesAndGraphqlWithBrowserSdkForEachTest';
import { mockDatabasesAndGraphqlWithNodeSdkForEachTest } from '../testTools/mockDatabasesAndGraphqlWithNodeSdkForEachTest';

const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJjaWQiOiJRbVFncVVtM1dHVWJEaTFvN0hKREU3NzJGVG9YcTE1WHlOZFg5VnpRaUFCTVlUIiwiZXhwIjoxNzA3OTc0MzQ4fQ.RsVFXMOUvqVoHpl_NJcIYkNGox4vbDa62m47FdYlEmU';

vi.hoisted(() => {
  vi.resetModules();
});

vi.mock('@fleek-platform/utils-ipfs', async () => {
  const actual = await vi.importActual<typeof import('@fleek-platform/utils-ipfs')>('@fleek-platform/utils-ipfs');

  const getIpfsGatewayAssetsUrl = vi.fn().mockImplementation(() => {
    return Promise.resolve(`https://secret-asset-url/cid?token=${TOKEN}`);
  });

  return {
    ...actual,
    getIpfsGatewayAssetsUrl,
  };
});

vi.mock('@fleek-platform/graphql/node_modules/axios', () => {
  const request = vi.fn().mockResolvedValue({ status: 200, data: { Hash: 'QmSNXuHrJHQm7A3en8yb4zdvpXgCc1UEW7gQUHS9vdgXF1' } });

  return { default: { request } };
});

vi.mock('@fleek-platform/graphql/node_modules/@aws-sdk/client-sfn', () => {
  const SFNClient = vi.fn();
  SFNClient.prototype.send = vi.fn().mockResolvedValue({});

  const StartExecutionCommand = vi.fn().mockResolvedValue({});

  return { SFNClient, StartExecutionCommand };
});

describe('[Node.js] ProjectsClient', () => {
  const { it } = mockDatabasesAndGraphqlWithNodeSdkForEachTest({ mockIpfs: false });

  beforeEach(() => {
    vi.stubEnv('ASSETS_URL', 'secret-asset-url');
  });

  it('should create project', async (context) => {
    const response = await context.sdks.josh.projects().create({ name: 'new-project' });

    expect(response).toMatchInlineSnapshot(
      { createdAt: expect.anything(), id: expect.any(String) },
      `
      Object {
        "avatar": null,
        "backupStorageOnArweave": false,
        "backupStorageOnFilecoin": true,
        "createdAt": Anything,
        "id": Any<String>,
        "name": "new-project",
      }
    `
    );
  });

  it('should update project', async (context) => {
    const testImage = await readFile(join(__dirname, '../../assets/test-image.png'));

    const response = await context.sdks.josh.projects().update({
      where: { id: seeds.auth.project.electronicCo.id },
      data: { name: 'renamed-project', avatar: new File([testImage], 'logo'), backupStorageOnArweave: true, backupStorageOnFilecoin: true },
    });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "updateProject": Object {
          "avatar": "https://secret-asset-url/cid?token=eyJhbGciOiJIUzI1NiJ9.eyJjaWQiOiJRbVFncVVtM1dHVWJEaTFvN0hKREU3NzJGVG9YcTE1WHlOZFg5VnpRaUFCTVlUIiwiZXhwIjoxNzA3OTc0MzQ4fQ.RsVFXMOUvqVoHpl_NJcIYkNGox4vbDa62m47FdYlEmU",
          "backupStorageOnArweave": true,
          "backupStorageOnFilecoin": true,
          "createdAt": "2023-03-23T08:05:13.641Z",
          "id": "clgkiwjd8000c08mefyco2eoo",
          "name": "renamed-project",
        },
      }
    `);
  });

  it('should get project', async (context) => {
    const response = await context.sdks.josh.projects().get({ id: seeds.auth.project.electronicCo.id });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "avatar": null,
        "backupStorageOnArweave": false,
        "backupStorageOnFilecoin": false,
        "createdAt": "2023-03-23T08:05:13.641Z",
        "id": "clgkiwjd8000c08mefyco2eoo",
        "name": "electronicCo",
      }
    `);
  });

  it('should list projects', async (context) => {
    const response = await context.sdks.josh.projects().list();

    expect(response).toMatchInlineSnapshot(`
      Array [
        Object {
          "avatar": null,
          "backupStorageOnArweave": false,
          "backupStorageOnFilecoin": false,
          "createdAt": "2023-03-23T08:05:13.641Z",
          "id": "clgkiwjd8000c08mefyco2eoo",
          "name": "electronicCo",
        },
        Object {
          "avatar": null,
          "backupStorageOnArweave": false,
          "backupStorageOnFilecoin": false,
          "createdAt": "2023-03-30T08:05:13.641Z",
          "id": "clgukvjww000108kw2h8n09nx",
          "name": "electronicLtd",
        },
      ]
    `);
  });
});

describe('[Chromium] ProjectsClient', () => {
  const { it } = mockDatabasesAndGraphqlWithBrowserSdkForEachTest({ mockIpfs: false });

  it('should create project', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.projects().create({ name: 'new-project' }),
    });

    expect(response).toMatchInlineSnapshot(
      { createdAt: expect.anything(), id: expect.any(String) },
      `
      Object {
        "avatar": null,
        "backupStorageOnArweave": false,
        "backupStorageOnFilecoin": true,
        "createdAt": Anything,
        "id": Any<String>,
        "name": "new-project",
      }
    `
    );
  });

  it('should update project', async (context) => {
    await context.page.setInputFiles('#fileUpload', [join(__dirname, '../../assets/test-image.png')]);

    const response = await context.sdks.josh({
      callback: () => {
        const avatar = (document.getElementById('fileUpload') as HTMLInputElement).files![0];

        return window.sdk.projects().update({
          where: { id: window.seeds.auth.project.electronicCo.id },
          data: { name: 'renamed-project', avatar, backupStorageOnArweave: true, backupStorageOnFilecoin: true },
        });
      },
    });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "updateProject": Object {
          "avatar": "https://secret-asset-url/cid?token=eyJhbGciOiJIUzI1NiJ9.eyJjaWQiOiJRbVFncVVtM1dHVWJEaTFvN0hKREU3NzJGVG9YcTE1WHlOZFg5VnpRaUFCTVlUIiwiZXhwIjoxNzA3OTc0MzQ4fQ.RsVFXMOUvqVoHpl_NJcIYkNGox4vbDa62m47FdYlEmU",
          "backupStorageOnArweave": true,
          "backupStorageOnFilecoin": true,
          "createdAt": "2023-03-23T08:05:13.641Z",
          "id": "clgkiwjd8000c08mefyco2eoo",
          "name": "renamed-project",
        },
      }
    `);
  });

  it('should get project', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.projects().get({ id: window.seeds.auth.project.electronicCo.id }),
    });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "avatar": null,
        "backupStorageOnArweave": false,
        "backupStorageOnFilecoin": false,
        "createdAt": "2023-03-23T08:05:13.641Z",
        "id": "clgkiwjd8000c08mefyco2eoo",
        "name": "electronicCo",
      }
    `);
  });

  it('should list projects', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.projects().list(),
    });

    expect(response).toMatchInlineSnapshot(`
      Array [
        Object {
          "avatar": null,
          "backupStorageOnArweave": false,
          "backupStorageOnFilecoin": false,
          "createdAt": "2023-03-23T08:05:13.641Z",
          "id": "clgkiwjd8000c08mefyco2eoo",
          "name": "electronicCo",
        },
        Object {
          "avatar": null,
          "backupStorageOnArweave": false,
          "backupStorageOnFilecoin": false,
          "createdAt": "2023-03-30T08:05:13.641Z",
          "id": "clgukvjww000108kw2h8n09nx",
          "name": "electronicLtd",
        },
      ]
    `);
  });
});
