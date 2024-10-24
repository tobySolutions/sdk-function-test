import { seeds } from '@fleek-platform/tester';
import { describe, expect, vi } from 'vitest';

import { mockDatabasesAndGraphqlWithBrowserSdkForEachTest } from '../testTools/mockDatabasesAndGraphqlWithBrowserSdkForEachTest';
import { mockDatabasesAndGraphqlWithNodeSdkForEachTest } from '../testTools/mockDatabasesAndGraphqlWithNodeSdkForEachTest';

vi.mock('@fleek-platform/graphql/node_modules/@aws-sdk/client-sfn', () => {
  const SFNClient = vi.fn();
  SFNClient.prototype.send = vi.fn().mockResolvedValue({});

  const StartExecutionCommand = vi.fn().mockResolvedValue({});

  return { SFNClient, StartExecutionCommand };
});

describe('[Node.js] PrivateGatewayClient', () => {
  const { it } = mockDatabasesAndGraphqlWithNodeSdkForEachTest({ mockIpfs: false });

  it('get private gateway by its id', async (context) => {
    const response = await context.sdks.josh.privateGateways().get({ id: seeds.storageIpfs.privateGateways.electronicCoEshop.id });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "createdAt": "2023-03-24T09:05:13.641Z",
        "id": "clhruz26u000108mbdb2zaft0",
        "name": "electronic.co eshop",
        "project": Object {
          "id": "clgkiwjd8000c08mefyco2eoo",
        },
        "slug": "blue-fox-two",
        "updatedAt": "2023-04-24T09:05:13.641Z",
        "zone": Object {
          "id": "cljfq6n2y000008lb4oy403bc",
        },
      }
    `);
  });

  it('get private gateway by its slug', async (context) => {
    const response = await context.sdks.josh
      .privateGateways()
      .getBySlug({ slug: seeds.storageIpfs.privateGateways.electronicCoEshop.slug });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "createdAt": "2023-03-24T09:05:13.641Z",
        "id": "clhruz26u000108mbdb2zaft0",
        "name": "electronic.co eshop",
        "project": Object {
          "id": "clgkiwjd8000c08mefyco2eoo",
        },
        "slug": "blue-fox-two",
        "updatedAt": "2023-04-24T09:05:13.641Z",
        "zone": Object {
          "id": "cljfq6n2y000008lb4oy403bc",
        },
      }
    `);
  });

  it('list private gateways', async (context) => {
    const response = await context.sdks.josh.privateGateways().list();

    expect(response).toMatchInlineSnapshot(`
      Array [
        Object {
          "createdAt": "2023-03-24T09:05:13.641Z",
          "id": "clhruz26u000108mbdb2zaft0",
          "name": "electronic.co eshop",
          "project": Object {
            "id": "clgkiwjd8000c08mefyco2eoo",
          },
          "slug": "blue-fox-two",
          "updatedAt": "2023-04-24T09:05:13.641Z",
          "zone": Object {
            "id": "cljfq6n2y000008lb4oy403bc",
          },
        },
        Object {
          "createdAt": "2023-04-25T09:05:13.641Z",
          "id": "clj76l893000108l2dsuegrz9",
          "name": "electronic.co photos",
          "project": Object {
            "id": "clgkiwjd8000c08mefyco2eoo",
          },
          "slug": "fish-blue-one",
          "updatedAt": "2023-04-25T11:05:13.641Z",
          "zone": Object {
            "id": "clj76kw6i000008l2ekmz6ahd",
          },
        },
      ]
    `);
  });

  it('create private gateway', async (context) => {
    const response = await context.sdks.josh
      .privateGateways()
      .create({ name: 'new-gateway', zoneId: seeds.domains.zone.electronicCoDocuments.id });

    expect(response).toMatchInlineSnapshot(
      { createdAt: expect.anything(), id: expect.any(String), updatedAt: expect.anything(), slug: expect.any(String) },
      `
      Object {
        "createdAt": Anything,
        "id": Any<String>,
        "name": "new-gateway",
        "project": Object {
          "id": "clgkiwjd8000c08mefyco2eoo",
        },
        "slug": Any<String>,
        "updatedAt": Anything,
        "zone": Object {
          "id": "cljfqzrcg000208jy6677aqv1",
        },
      }
    `
    );
  });

  it('delete private gateway', async (context) => {
    const response = await context.sdks.josh.privateGateways().delete({ id: seeds.storageIpfs.privateGateways.electronicCoPhotos.id });

    expect(response).toMatchInlineSnapshot(
      { updatedAt: expect.any(String) },
      `
      Object {
        "createdAt": "2023-04-25T09:05:13.641Z",
        "id": "clj76l893000108l2dsuegrz9",
        "name": "electronic.co photos",
        "project": Object {
          "id": "clgkiwjd8000c08mefyco2eoo",
        },
        "slug": "fish-blue-one",
        "updatedAt": Any<String>,
        "zone": Object {
          "id": "clj76kw6i000008l2ekmz6ahd",
        },
      }
    `
    );
  });

  it('update private gateway', async (context) => {
    const response = await context.sdks.josh
      .privateGateways()
      .update({ id: seeds.storageIpfs.privateGateways.electronicCoEshop.id, name: 'new electronic.co eshop' });

    expect(response).toMatchInlineSnapshot(
      { updatedAt: expect.anything() },
      `
      Object {
        "createdAt": "2023-03-24T09:05:13.641Z",
        "id": "clhruz26u000108mbdb2zaft0",
        "name": "new electronic.co eshop",
        "project": Object {
          "id": "clgkiwjd8000c08mefyco2eoo",
        },
        "slug": "blue-fox-two",
        "updatedAt": Anything,
        "zone": Object {
          "id": "cljfq6n2y000008lb4oy403bc",
        },
      }
    `
    );
  });
});

describe('[Chromium] PrivateGatewayClient', () => {
  const { it } = mockDatabasesAndGraphqlWithBrowserSdkForEachTest({ mockIpfs: false });

  it('get private gateway by its id', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.privateGateways().get({ id: window.seeds.storageIpfs.privateGateways.electronicCoEshop.id }),
    });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "createdAt": "2023-03-24T09:05:13.641Z",
        "id": "clhruz26u000108mbdb2zaft0",
        "name": "electronic.co eshop",
        "project": Object {
          "id": "clgkiwjd8000c08mefyco2eoo",
        },
        "slug": "blue-fox-two",
        "updatedAt": "2023-04-24T09:05:13.641Z",
        "zone": Object {
          "id": "cljfq6n2y000008lb4oy403bc",
        },
      }
    `);
  });

  it('get private gateway by its slug', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.privateGateways().getBySlug({ slug: window.seeds.storageIpfs.privateGateways.electronicCoEshop.slug }),
    });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "createdAt": "2023-03-24T09:05:13.641Z",
        "id": "clhruz26u000108mbdb2zaft0",
        "name": "electronic.co eshop",
        "project": Object {
          "id": "clgkiwjd8000c08mefyco2eoo",
        },
        "slug": "blue-fox-two",
        "updatedAt": "2023-04-24T09:05:13.641Z",
        "zone": Object {
          "id": "cljfq6n2y000008lb4oy403bc",
        },
      }
    `);
  });

  it('list private gateways', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.privateGateways().list(),
    });

    expect(response).toMatchInlineSnapshot(`
      Array [
        Object {
          "createdAt": "2023-03-24T09:05:13.641Z",
          "id": "clhruz26u000108mbdb2zaft0",
          "name": "electronic.co eshop",
          "project": Object {
            "id": "clgkiwjd8000c08mefyco2eoo",
          },
          "slug": "blue-fox-two",
          "updatedAt": "2023-04-24T09:05:13.641Z",
          "zone": Object {
            "id": "cljfq6n2y000008lb4oy403bc",
          },
        },
        Object {
          "createdAt": "2023-04-25T09:05:13.641Z",
          "id": "clj76l893000108l2dsuegrz9",
          "name": "electronic.co photos",
          "project": Object {
            "id": "clgkiwjd8000c08mefyco2eoo",
          },
          "slug": "fish-blue-one",
          "updatedAt": "2023-04-25T11:05:13.641Z",
          "zone": Object {
            "id": "clj76kw6i000008l2ekmz6ahd",
          },
        },
      ]
    `);
  });

  it('create private gateway', async (context) => {
    const response = await context.sdks.josh({
      callback: () =>
        window.sdk.privateGateways().create({ name: 'new-gateway', zoneId: window.seeds.domains.zone.electronicCoDocuments.id }),
    });

    expect(response).toMatchInlineSnapshot(
      { createdAt: expect.anything(), id: expect.any(String), slug: expect.any(String), updatedAt: expect.anything() },
      `
      Object {
        "createdAt": Anything,
        "id": Any<String>,
        "name": "new-gateway",
        "project": Object {
          "id": "clgkiwjd8000c08mefyco2eoo",
        },
        "slug": Any<String>,
        "updatedAt": Anything,
        "zone": Object {
          "id": "cljfqzrcg000208jy6677aqv1",
        },
      }
    `
    );
  });

  it('delete private gateway', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.privateGateways().delete({ id: window.seeds.storageIpfs.privateGateways.electronicCoPhotos.id }),
    });

    expect(response).toMatchInlineSnapshot(
      { updatedAt: expect.any(String) },
      `
      Object {
        "createdAt": "2023-04-25T09:05:13.641Z",
        "id": "clj76l893000108l2dsuegrz9",
        "name": "electronic.co photos",
        "project": Object {
          "id": "clgkiwjd8000c08mefyco2eoo",
        },
        "slug": "fish-blue-one",
        "updatedAt": Any<String>,
        "zone": Object {
          "id": "clj76kw6i000008l2ekmz6ahd",
        },
      }
    `
    );
  });

  it('update private gateway', async (context) => {
    const response = await context.sdks.josh({
      callback: () =>
        window.sdk
          .privateGateways()
          .update({ id: window.seeds.storageIpfs.privateGateways.electronicCoEshop.id, name: 'new electronic.co eshop' }),
    });

    expect(response).toMatchInlineSnapshot(
      { updatedAt: expect.anything() },
      `
      Object {
        "createdAt": "2023-03-24T09:05:13.641Z",
        "id": "clhruz26u000108mbdb2zaft0",
        "name": "new electronic.co eshop",
        "project": Object {
          "id": "clgkiwjd8000c08mefyco2eoo",
        },
        "slug": "blue-fox-two",
        "updatedAt": Anything,
        "zone": Object {
          "id": "cljfq6n2y000008lb4oy403bc",
        },
      }
    `
    );
  });
});
