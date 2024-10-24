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

describe('[Node.js] DomainsClient', () => {
  const { it } = mockDatabasesAndGraphqlWithNodeSdkForEachTest({ mockIpfs: false });

  it('should list domains', async (context) => {
    const response = await context.sdks.josh.domains().list();

    expect(response).toMatchInlineSnapshot(`
      Array [
        Object {
          "createdAt": "2023-03-24T09:05:13.641Z",
          "dnsConfigs": Array [
            Object {
              "createdAt": "2023-03-23T09:05:13.641Z",
              "id": "clgmg76ch000208mid5o30du0",
              "name": "hostname",
              "type": "CNAME",
              "updatedAt": "2023-03-23T09:05:13.641Z",
              "value": "clgmfj874000208lc2e9ccglf.b-cdn.net",
            },
            Object {
              "createdAt": "2023-03-23T10:05:13.641Z",
              "id": "clgmgbj4h000308mi8aai0pli",
              "name": "hostname",
              "type": "CNAME",
              "updatedAt": "2023-03-23T10:05:13.641Z",
              "value": "clgmfj874000208lc2e9ccglf.b-cdn.net",
            },
          ],
          "hostname": "electronic.co",
          "id": "clgmfj1pa000108lc0g5i7d32",
          "isVerified": true,
          "status": "ACTIVE",
          "updatedAt": "2023-03-24T09:05:13.641Z",
          "zone": Object {
            "id": "clgmfj874000208lc2e9ccglf",
          },
        },
        Object {
          "createdAt": "2023-03-24T10:05:13.641Z",
          "dnsConfigs": Array [],
          "hostname": "eshop-electronic.co",
          "id": "clgmfj874000208lc2e9ccglf",
          "isVerified": false,
          "status": "VERIFYING_FAILED",
          "updatedAt": "2023-03-24T10:05:13.641Z",
          "zone": Object {
            "id": "clgmfj874000208lc2e9ccglf",
          },
        },
        Object {
          "createdAt": "2023-03-28T10:05:13.641Z",
          "dnsConfigs": Array [],
          "hostname": "blog-electornic.co",
          "id": "clgnslqvg000108l6hg5ea3u0",
          "isVerified": false,
          "status": "CREATING",
          "updatedAt": "2023-03-28T10:05:13.641Z",
          "zone": Object {
            "id": "clgow7wob000508jog5gfanj9",
          },
        },
        Object {
          "createdAt": "2023-03-24T10:05:13.641Z",
          "dnsConfigs": Array [],
          "hostname": "static.eshop-electronic.co",
          "id": "clmhwwted000108mnajduel68",
          "isVerified": true,
          "status": "ACTIVE",
          "updatedAt": "2023-03-24T10:05:13.641Z",
          "zone": Object {
            "id": "cljfq6n2y000008lb4oy403bc",
          },
        },
        Object {
          "createdAt": "2023-02-28T10:05:13.641Z",
          "dnsConfigs": Array [
            Object {
              "createdAt": "2023-02-28T10:04:33.641Z",
              "id": "cln2226gc000208la1egogfn3",
              "name": "hostname",
              "type": "CNAME",
              "updatedAt": "2023-02-28T10:04:33.641Z",
              "value": "cljfqzrcg000208jy6677aqv1.fleekcdn.xyz",
            },
          ],
          "hostname": "documents-electronic.co",
          "id": "cln21wwwa000008la7e0kbvd7",
          "isVerified": false,
          "status": "CREATED",
          "updatedAt": "2023-02-28T10:05:13.641Z",
          "zone": Object {
            "id": "cljfqzrcg000208jy6677aqv1",
          },
        },
      ]
    `);
  });

  it('should get domain by its id', async (context) => {
    const response = await context.sdks.josh.domains().get({ domainId: seeds.domains.domain.electronicCoPrimary.id });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "createdAt": "2023-03-24T09:05:13.641Z",
        "dnsConfigs": Array [
          Object {
            "createdAt": "2023-03-23T09:05:13.641Z",
            "id": "clgmg76ch000208mid5o30du0",
            "name": "hostname",
            "type": "CNAME",
            "updatedAt": "2023-03-23T09:05:13.641Z",
            "value": "clgmfj874000208lc2e9ccglf.b-cdn.net",
          },
          Object {
            "createdAt": "2023-03-23T10:05:13.641Z",
            "id": "clgmgbj4h000308mi8aai0pli",
            "name": "hostname",
            "type": "CNAME",
            "updatedAt": "2023-03-23T10:05:13.641Z",
            "value": "clgmfj874000208lc2e9ccglf.b-cdn.net",
          },
        ],
        "hostname": "electronic.co",
        "id": "clgmfj1pa000108lc0g5i7d32",
        "isVerified": true,
        "status": "ACTIVE",
        "updatedAt": "2023-03-24T09:05:13.641Z",
        "zone": Object {
          "id": "clgmfj874000208lc2e9ccglf",
        },
      }
    `);
  });

  it('should get domains by its hostname', async (context) => {
    const response = await context.sdks.josh.domains().getByHostname({ hostname: seeds.domains.domain.electronicCoPrimary.hostname });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "createdAt": "2023-03-24T09:05:13.641Z",
        "dnsConfigs": Array [
          Object {
            "createdAt": "2023-03-23T09:05:13.641Z",
            "id": "clgmg76ch000208mid5o30du0",
            "name": "hostname",
            "type": "CNAME",
            "updatedAt": "2023-03-23T09:05:13.641Z",
            "value": "clgmfj874000208lc2e9ccglf.b-cdn.net",
          },
          Object {
            "createdAt": "2023-03-23T10:05:13.641Z",
            "id": "clgmgbj4h000308mi8aai0pli",
            "name": "hostname",
            "type": "CNAME",
            "updatedAt": "2023-03-23T10:05:13.641Z",
            "value": "clgmfj874000208lc2e9ccglf.b-cdn.net",
          },
        ],
        "hostname": "electronic.co",
        "id": "clgmfj1pa000108lc0g5i7d32",
        "isVerified": true,
        "status": "ACTIVE",
        "updatedAt": "2023-03-24T09:05:13.641Z",
        "zone": Object {
          "id": "clgmfj874000208lc2e9ccglf",
        },
      }
    `);
  });

  it('should list domains by thier zone id', async (context) => {
    const response = await context.sdks.josh.domains().listByZoneId({ zoneId: seeds.domains.zone.electronicCoEshop.id });

    expect(response).toMatchInlineSnapshot(`
      Array [
        Object {
          "createdAt": "2023-03-24T09:05:13.641Z",
          "dnsConfigs": Array [
            Object {
              "createdAt": "2023-03-23T09:05:13.641Z",
              "id": "clgmg76ch000208mid5o30du0",
              "name": "hostname",
              "type": "CNAME",
              "updatedAt": "2023-03-23T09:05:13.641Z",
              "value": "clgmfj874000208lc2e9ccglf.b-cdn.net",
            },
            Object {
              "createdAt": "2023-03-23T10:05:13.641Z",
              "id": "clgmgbj4h000308mi8aai0pli",
              "name": "hostname",
              "type": "CNAME",
              "updatedAt": "2023-03-23T10:05:13.641Z",
              "value": "clgmfj874000208lc2e9ccglf.b-cdn.net",
            },
          ],
          "hostname": "electronic.co",
          "id": "clgmfj1pa000108lc0g5i7d32",
          "isVerified": true,
          "status": "ACTIVE",
          "updatedAt": "2023-03-24T09:05:13.641Z",
          "zone": Object {
            "id": "clgmfj874000208lc2e9ccglf",
          },
        },
        Object {
          "createdAt": "2023-03-24T10:05:13.641Z",
          "dnsConfigs": Array [],
          "hostname": "eshop-electronic.co",
          "id": "clgmfj874000208lc2e9ccglf",
          "isVerified": false,
          "status": "VERIFYING_FAILED",
          "updatedAt": "2023-03-24T10:05:13.641Z",
          "zone": Object {
            "id": "clgmfj874000208lc2e9ccglf",
          },
        },
      ]
    `);
  });

  it('should create domain', async (context) => {
    const response = await context.sdks.josh
      .domains()
      .createDomain({ hostname: 'super-eshop.xyz', zoneId: seeds.domains.zone.electronicCoEshop.id });

    expect(response).toMatchInlineSnapshot(
      { createdAt: expect.anything(), id: expect.any(String), updatedAt: expect.anything() },
      `
      Object {
        "createdAt": Anything,
        "dnsConfigs": Array [],
        "hostname": "super-eshop.xyz",
        "id": Any<String>,
        "isVerified": false,
        "status": "CREATING",
        "updatedAt": Anything,
        "zone": Object {
          "id": "clgmfj874000208lc2e9ccglf",
        },
      }
    `
    );
  });

  it('should delete domain', async (context) => {
    const response = await context.sdks.josh.domains().deleteDomain({ domainId: seeds.domains.domain.electronicCoPrimary.id });

    expect(response).toMatchInlineSnapshot(
      { updatedAt: expect.anything() },
      `
      Object {
        "createdAt": "2023-03-24T09:05:13.641Z",
        "dnsConfigs": Array [
          Object {
            "createdAt": "2023-03-23T09:05:13.641Z",
            "id": "clgmg76ch000208mid5o30du0",
            "name": "hostname",
            "type": "CNAME",
            "updatedAt": "2023-03-23T09:05:13.641Z",
            "value": "clgmfj874000208lc2e9ccglf.b-cdn.net",
          },
          Object {
            "createdAt": "2023-03-23T10:05:13.641Z",
            "id": "clgmgbj4h000308mi8aai0pli",
            "name": "hostname",
            "type": "CNAME",
            "updatedAt": "2023-03-23T10:05:13.641Z",
            "value": "clgmfj874000208lc2e9ccglf.b-cdn.net",
          },
        ],
        "hostname": "electronic.co",
        "id": "clgmfj1pa000108lc0g5i7d32",
        "isVerified": true,
        "status": "DELETING",
        "updatedAt": Anything,
        "zone": Object {
          "id": "clgmfj874000208lc2e9ccglf",
        },
      }
    `
    );
  });

  it('should verify domain', async (context) => {
    const response = await context.sdks.josh.domains().verifyDomain({ domainId: seeds.domains.domain.electronicCoEshop.id });

    expect(response).toMatchInlineSnapshot(
      { updatedAt: expect.anything() },
      `
      Object {
        "createdAt": "2023-03-24T10:05:13.641Z",
        "dnsConfigs": Array [],
        "hostname": "eshop-electronic.co",
        "id": "clgmfj874000208lc2e9ccglf",
        "isVerified": false,
        "status": "VERIFYING",
        "updatedAt": Anything,
        "zone": Object {
          "id": "clgmfj874000208lc2e9ccglf",
        },
      }
    `
    );
  });

  it('should list zones', async (context) => {
    const response = await context.sdks.josh.domains().listZones();

    expect(response).toMatchInlineSnapshot(`
      Array [
        Object {
          "createdAt": "2022-12-24T09:04:13.641Z",
          "id": "clgmfj874000208lc2e9ccglf",
          "originUrl": "https://ipfs.io/ipfs/QmXYsy8xLYRaDbgDNeSthWSNneKM13Vb1FHV8LC4DghHy2",
          "status": "CREATED",
          "type": "SITE",
          "updatedAt": "2022-12-24T09:04:13.641Z",
        },
        Object {
          "createdAt": "2022-12-28T10:04:13.641Z",
          "id": "clgow7wob000508jog5gfanj9",
          "originUrl": "https://bafybeifyvm5aa2z35jnpehvg3hfflazesjfma53yekmhz7dckqn4buvr7q.ipfs.gateway-ipfs.fleeksandbox.xyz",
          "status": "CREATED",
          "type": "SITE",
          "updatedAt": "2022-12-28T10:04:13.641Z",
        },
        Object {
          "createdAt": "2022-04-25T09:04:13.641Z",
          "id": "clj76kw6i000008l2ekmz6ahd",
          "originUrl": "https://bafybeib5qbrx6xdrdvuxt2wsvfsrwwvu42bfh6pycm677qjkl66heelc2e.ipfs.gateway-ipfs.fleeksandbox.xyz",
          "status": "CREATED",
          "type": "PRIVATE_GATEWAY",
          "updatedAt": "2022-04-25T10:04:13.641Z",
        },
        Object {
          "createdAt": "2022-12-30T11:04:13.641Z",
          "id": "clje357cc000108jse08c2t6m",
          "originUrl": "https://ipfs.io/ipfs/QmdG8HaQAYccz22zLgJ33trzu8g6wjF6e48YbBEZhbz342",
          "status": "CREATING_FAILED",
          "type": "SITE",
          "updatedAt": "2022-12-30T11:04:13.641Z",
        },
        Object {
          "createdAt": "2022-12-24T09:04:13.641Z",
          "id": "cljfq6n2y000008lb4oy403bc",
          "originUrl": "https://dedicated-gateway-ipfs.fleeksandbox.xyz",
          "status": "CREATED",
          "type": "PRIVATE_GATEWAY",
          "updatedAt": "2022-12-24T09:04:13.641Z",
        },
        Object {
          "createdAt": "2023-02-28T10:04:13.641Z",
          "id": "cljfqzrcg000208jy6677aqv1",
          "originUrl": "https://dedicated-gateway-ipfs.fleeksandbox.xyz",
          "status": "CREATED",
          "type": "PRIVATE_GATEWAY",
          "updatedAt": "2023-02-28T10:04:13.641Z",
        },
        Object {
          "createdAt": "2023-02-28T11:04:13.641Z",
          "id": "clmj6b1e9000108mc0pwd6hgd",
          "originUrl": "https://dedicated-gateway-ipfs.fleeksandbox.xyz",
          "status": "CREATED",
          "type": "PRIVATE_GATEWAY",
          "updatedAt": "2023-02-28T11:04:13.641Z",
        },
      ]
    `);
  });

  it('should get zone by its id', async (context) => {
    const response = await context.sdks.josh.domains().getZone({ id: seeds.domains.zone.electronicCoEshop.id });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "createdAt": "2022-12-24T09:04:13.641Z",
        "id": "clgmfj874000208lc2e9ccglf",
        "originUrl": "https://ipfs.io/ipfs/QmXYsy8xLYRaDbgDNeSthWSNneKM13Vb1FHV8LC4DghHy2",
        "status": "CREATED",
        "type": "SITE",
        "updatedAt": "2022-12-24T09:04:13.641Z",
      }
    `);
  });

  it('should create zone for site', async (context) => {
    const response = await context.sdks.josh.domains().createZoneForSite({ siteId: seeds.sites.site.electronicCoEshop.id });

    expect(response).toMatchInlineSnapshot(
      { createdAt: expect.anything(), id: expect.any(String), updatedAt: expect.anything() },
      `
      Object {
        "createdAt": Anything,
        "id": Any<String>,
        "originUrl": "https://bafybeibtme5hmkjxsryerf6pihhfbhifwnsz7gmhnfqglg2r326m4glzva.ipfs.gateway-ipfs.fleek.xyz",
        "status": "CREATING",
        "type": "SITE",
        "updatedAt": Anything,
      }
    `
    );
  });

  it('should create zone for private gateway', async (context) => {
    const response = await context.sdks.josh.domains().createZoneForPrivateGateway();

    expect(response).toMatchInlineSnapshot(
      { createdAt: expect.anything(), id: expect.any(String), updatedAt: expect.anything() },
      `
      Object {
        "createdAt": Anything,
        "id": Any<String>,
        "originUrl": "https://dedicated-gateway.fleek.xyz",
        "status": "CREATING",
        "type": "PRIVATE_GATEWAY",
        "updatedAt": Anything,
      }
    `
    );
  });

  it('should delete zone', async (context) => {
    const response = await context.sdks.josh.domains().deleteZone({ id: seeds.domains.zone.electronicCoVideos.id });

    expect(response).toMatchInlineSnapshot(
      { updatedAt: expect.anything() },
      `
      Object {
        "createdAt": "2022-12-30T11:04:13.641Z",
        "id": "clje357cc000108jse08c2t6m",
        "originUrl": "https://ipfs.io/ipfs/QmdG8HaQAYccz22zLgJ33trzu8g6wjF6e48YbBEZhbz342",
        "status": "DELETING",
        "type": "SITE",
        "updatedAt": Anything,
      }
    `
    );
  });
});

describe('[Chromium] DomainsClient', () => {
  const { it } = mockDatabasesAndGraphqlWithBrowserSdkForEachTest({ mockIpfs: false });

  it('should list domains', async (context) => {
    const response = await context.sdks.josh({ callback: () => window.sdk.domains().list() });

    expect(response).toMatchInlineSnapshot(`
      Array [
        Object {
          "createdAt": "2023-03-24T09:05:13.641Z",
          "dnsConfigs": Array [
            Object {
              "createdAt": "2023-03-23T09:05:13.641Z",
              "id": "clgmg76ch000208mid5o30du0",
              "name": "hostname",
              "type": "CNAME",
              "updatedAt": "2023-03-23T09:05:13.641Z",
              "value": "clgmfj874000208lc2e9ccglf.b-cdn.net",
            },
            Object {
              "createdAt": "2023-03-23T10:05:13.641Z",
              "id": "clgmgbj4h000308mi8aai0pli",
              "name": "hostname",
              "type": "CNAME",
              "updatedAt": "2023-03-23T10:05:13.641Z",
              "value": "clgmfj874000208lc2e9ccglf.b-cdn.net",
            },
          ],
          "hostname": "electronic.co",
          "id": "clgmfj1pa000108lc0g5i7d32",
          "isVerified": true,
          "status": "ACTIVE",
          "updatedAt": "2023-03-24T09:05:13.641Z",
          "zone": Object {
            "id": "clgmfj874000208lc2e9ccglf",
          },
        },
        Object {
          "createdAt": "2023-03-24T10:05:13.641Z",
          "dnsConfigs": Array [],
          "hostname": "eshop-electronic.co",
          "id": "clgmfj874000208lc2e9ccglf",
          "isVerified": false,
          "status": "VERIFYING_FAILED",
          "updatedAt": "2023-03-24T10:05:13.641Z",
          "zone": Object {
            "id": "clgmfj874000208lc2e9ccglf",
          },
        },
        Object {
          "createdAt": "2023-03-28T10:05:13.641Z",
          "dnsConfigs": Array [],
          "hostname": "blog-electornic.co",
          "id": "clgnslqvg000108l6hg5ea3u0",
          "isVerified": false,
          "status": "CREATING",
          "updatedAt": "2023-03-28T10:05:13.641Z",
          "zone": Object {
            "id": "clgow7wob000508jog5gfanj9",
          },
        },
        Object {
          "createdAt": "2023-03-24T10:05:13.641Z",
          "dnsConfigs": Array [],
          "hostname": "static.eshop-electronic.co",
          "id": "clmhwwted000108mnajduel68",
          "isVerified": true,
          "status": "ACTIVE",
          "updatedAt": "2023-03-24T10:05:13.641Z",
          "zone": Object {
            "id": "cljfq6n2y000008lb4oy403bc",
          },
        },
        Object {
          "createdAt": "2023-02-28T10:05:13.641Z",
          "dnsConfigs": Array [
            Object {
              "createdAt": "2023-02-28T10:04:33.641Z",
              "id": "cln2226gc000208la1egogfn3",
              "name": "hostname",
              "type": "CNAME",
              "updatedAt": "2023-02-28T10:04:33.641Z",
              "value": "cljfqzrcg000208jy6677aqv1.fleekcdn.xyz",
            },
          ],
          "hostname": "documents-electronic.co",
          "id": "cln21wwwa000008la7e0kbvd7",
          "isVerified": false,
          "status": "CREATED",
          "updatedAt": "2023-02-28T10:05:13.641Z",
          "zone": Object {
            "id": "cljfqzrcg000208jy6677aqv1",
          },
        },
      ]
    `);
  });

  it('should get domain by its id', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.domains().get({ domainId: window.seeds.domains.domain.electronicCoPrimary.id }),
    });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "createdAt": "2023-03-24T09:05:13.641Z",
        "dnsConfigs": Array [
          Object {
            "createdAt": "2023-03-23T09:05:13.641Z",
            "id": "clgmg76ch000208mid5o30du0",
            "name": "hostname",
            "type": "CNAME",
            "updatedAt": "2023-03-23T09:05:13.641Z",
            "value": "clgmfj874000208lc2e9ccglf.b-cdn.net",
          },
          Object {
            "createdAt": "2023-03-23T10:05:13.641Z",
            "id": "clgmgbj4h000308mi8aai0pli",
            "name": "hostname",
            "type": "CNAME",
            "updatedAt": "2023-03-23T10:05:13.641Z",
            "value": "clgmfj874000208lc2e9ccglf.b-cdn.net",
          },
        ],
        "hostname": "electronic.co",
        "id": "clgmfj1pa000108lc0g5i7d32",
        "isVerified": true,
        "status": "ACTIVE",
        "updatedAt": "2023-03-24T09:05:13.641Z",
        "zone": Object {
          "id": "clgmfj874000208lc2e9ccglf",
        },
      }
    `);
  });

  it('should get domain by its hostname', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.domains().getByHostname({ hostname: window.seeds.domains.domain.electronicCoPrimary.hostname }),
    });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "createdAt": "2023-03-24T09:05:13.641Z",
        "dnsConfigs": Array [
          Object {
            "createdAt": "2023-03-23T09:05:13.641Z",
            "id": "clgmg76ch000208mid5o30du0",
            "name": "hostname",
            "type": "CNAME",
            "updatedAt": "2023-03-23T09:05:13.641Z",
            "value": "clgmfj874000208lc2e9ccglf.b-cdn.net",
          },
          Object {
            "createdAt": "2023-03-23T10:05:13.641Z",
            "id": "clgmgbj4h000308mi8aai0pli",
            "name": "hostname",
            "type": "CNAME",
            "updatedAt": "2023-03-23T10:05:13.641Z",
            "value": "clgmfj874000208lc2e9ccglf.b-cdn.net",
          },
        ],
        "hostname": "electronic.co",
        "id": "clgmfj1pa000108lc0g5i7d32",
        "isVerified": true,
        "status": "ACTIVE",
        "updatedAt": "2023-03-24T09:05:13.641Z",
        "zone": Object {
          "id": "clgmfj874000208lc2e9ccglf",
        },
      }
    `);
  });

  it('should list domains by their zone id', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.domains().listByZoneId({ zoneId: window.seeds.domains.zone.electronicCoEshop.id }),
    });

    expect(response).toMatchInlineSnapshot(`
      Array [
        Object {
          "createdAt": "2023-03-24T09:05:13.641Z",
          "dnsConfigs": Array [
            Object {
              "createdAt": "2023-03-23T09:05:13.641Z",
              "id": "clgmg76ch000208mid5o30du0",
              "name": "hostname",
              "type": "CNAME",
              "updatedAt": "2023-03-23T09:05:13.641Z",
              "value": "clgmfj874000208lc2e9ccglf.b-cdn.net",
            },
            Object {
              "createdAt": "2023-03-23T10:05:13.641Z",
              "id": "clgmgbj4h000308mi8aai0pli",
              "name": "hostname",
              "type": "CNAME",
              "updatedAt": "2023-03-23T10:05:13.641Z",
              "value": "clgmfj874000208lc2e9ccglf.b-cdn.net",
            },
          ],
          "hostname": "electronic.co",
          "id": "clgmfj1pa000108lc0g5i7d32",
          "isVerified": true,
          "status": "ACTIVE",
          "updatedAt": "2023-03-24T09:05:13.641Z",
          "zone": Object {
            "id": "clgmfj874000208lc2e9ccglf",
          },
        },
        Object {
          "createdAt": "2023-03-24T10:05:13.641Z",
          "dnsConfigs": Array [],
          "hostname": "eshop-electronic.co",
          "id": "clgmfj874000208lc2e9ccglf",
          "isVerified": false,
          "status": "VERIFYING_FAILED",
          "updatedAt": "2023-03-24T10:05:13.641Z",
          "zone": Object {
            "id": "clgmfj874000208lc2e9ccglf",
          },
        },
      ]
    `);
  });

  it('should create domain', async (context) => {
    const response = await context.sdks.josh({
      callback: () =>
        window.sdk.domains().createDomain({ hostname: 'super-eshop.xyz', zoneId: window.seeds.domains.zone.electronicCoEshop.id }),
    });

    expect(response).toMatchInlineSnapshot(
      { createdAt: expect.anything(), id: expect.any(String), updatedAt: expect.anything() },
      `
      Object {
        "createdAt": Anything,
        "dnsConfigs": Array [],
        "hostname": "super-eshop.xyz",
        "id": Any<String>,
        "isVerified": false,
        "status": "CREATING",
        "updatedAt": Anything,
        "zone": Object {
          "id": "clgmfj874000208lc2e9ccglf",
        },
      }
    `
    );
  });

  it('should delete domain', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.domains().deleteDomain({ domainId: window.seeds.domains.domain.electronicCoPrimary.id }),
    });

    expect(response).toMatchInlineSnapshot(
      { updatedAt: expect.anything() },
      `
      Object {
        "createdAt": "2023-03-24T09:05:13.641Z",
        "dnsConfigs": Array [
          Object {
            "createdAt": "2023-03-23T09:05:13.641Z",
            "id": "clgmg76ch000208mid5o30du0",
            "name": "hostname",
            "type": "CNAME",
            "updatedAt": "2023-03-23T09:05:13.641Z",
            "value": "clgmfj874000208lc2e9ccglf.b-cdn.net",
          },
          Object {
            "createdAt": "2023-03-23T10:05:13.641Z",
            "id": "clgmgbj4h000308mi8aai0pli",
            "name": "hostname",
            "type": "CNAME",
            "updatedAt": "2023-03-23T10:05:13.641Z",
            "value": "clgmfj874000208lc2e9ccglf.b-cdn.net",
          },
        ],
        "hostname": "electronic.co",
        "id": "clgmfj1pa000108lc0g5i7d32",
        "isVerified": true,
        "status": "DELETING",
        "updatedAt": Anything,
        "zone": Object {
          "id": "clgmfj874000208lc2e9ccglf",
        },
      }
    `
    );
  });

  it('should verify domain', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.domains().verifyDomain({ domainId: window.seeds.domains.domain.electronicCoEshop.id }),
    });

    expect(response).toMatchInlineSnapshot(
      { updatedAt: expect.anything() },
      `
      Object {
        "createdAt": "2023-03-24T10:05:13.641Z",
        "dnsConfigs": Array [],
        "hostname": "eshop-electronic.co",
        "id": "clgmfj874000208lc2e9ccglf",
        "isVerified": false,
        "status": "VERIFYING",
        "updatedAt": Anything,
        "zone": Object {
          "id": "clgmfj874000208lc2e9ccglf",
        },
      }
    `
    );
  });

  it('should list zones', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.domains().listZones(),
    });

    expect(response).toMatchInlineSnapshot(`
      Array [
        Object {
          "createdAt": "2022-12-24T09:04:13.641Z",
          "id": "clgmfj874000208lc2e9ccglf",
          "originUrl": "https://ipfs.io/ipfs/QmXYsy8xLYRaDbgDNeSthWSNneKM13Vb1FHV8LC4DghHy2",
          "status": "CREATED",
          "type": "SITE",
          "updatedAt": "2022-12-24T09:04:13.641Z",
        },
        Object {
          "createdAt": "2022-12-28T10:04:13.641Z",
          "id": "clgow7wob000508jog5gfanj9",
          "originUrl": "https://bafybeifyvm5aa2z35jnpehvg3hfflazesjfma53yekmhz7dckqn4buvr7q.ipfs.gateway-ipfs.fleeksandbox.xyz",
          "status": "CREATED",
          "type": "SITE",
          "updatedAt": "2022-12-28T10:04:13.641Z",
        },
        Object {
          "createdAt": "2022-04-25T09:04:13.641Z",
          "id": "clj76kw6i000008l2ekmz6ahd",
          "originUrl": "https://bafybeib5qbrx6xdrdvuxt2wsvfsrwwvu42bfh6pycm677qjkl66heelc2e.ipfs.gateway-ipfs.fleeksandbox.xyz",
          "status": "CREATED",
          "type": "PRIVATE_GATEWAY",
          "updatedAt": "2022-04-25T10:04:13.641Z",
        },
        Object {
          "createdAt": "2022-12-30T11:04:13.641Z",
          "id": "clje357cc000108jse08c2t6m",
          "originUrl": "https://ipfs.io/ipfs/QmdG8HaQAYccz22zLgJ33trzu8g6wjF6e48YbBEZhbz342",
          "status": "CREATING_FAILED",
          "type": "SITE",
          "updatedAt": "2022-12-30T11:04:13.641Z",
        },
        Object {
          "createdAt": "2022-12-24T09:04:13.641Z",
          "id": "cljfq6n2y000008lb4oy403bc",
          "originUrl": "https://dedicated-gateway-ipfs.fleeksandbox.xyz",
          "status": "CREATED",
          "type": "PRIVATE_GATEWAY",
          "updatedAt": "2022-12-24T09:04:13.641Z",
        },
        Object {
          "createdAt": "2023-02-28T10:04:13.641Z",
          "id": "cljfqzrcg000208jy6677aqv1",
          "originUrl": "https://dedicated-gateway-ipfs.fleeksandbox.xyz",
          "status": "CREATED",
          "type": "PRIVATE_GATEWAY",
          "updatedAt": "2023-02-28T10:04:13.641Z",
        },
        Object {
          "createdAt": "2023-02-28T11:04:13.641Z",
          "id": "clmj6b1e9000108mc0pwd6hgd",
          "originUrl": "https://dedicated-gateway-ipfs.fleeksandbox.xyz",
          "status": "CREATED",
          "type": "PRIVATE_GATEWAY",
          "updatedAt": "2023-02-28T11:04:13.641Z",
        },
      ]
    `);
  });

  it('should get zone by its it', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.domains().getZone({ id: window.seeds.domains.zone.electronicCoEshop.id }),
    });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "createdAt": "2022-12-24T09:04:13.641Z",
        "id": "clgmfj874000208lc2e9ccglf",
        "originUrl": "https://ipfs.io/ipfs/QmXYsy8xLYRaDbgDNeSthWSNneKM13Vb1FHV8LC4DghHy2",
        "status": "CREATED",
        "type": "SITE",
        "updatedAt": "2022-12-24T09:04:13.641Z",
      }
    `);
  });

  it('should create zone for site', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.domains().createZoneForSite({ siteId: window.seeds.sites.site.electronicCoEshop.id }),
    });

    expect(response).toMatchInlineSnapshot(
      { createdAt: expect.anything(), id: expect.any(String), updatedAt: expect.anything() },
      `
      Object {
        "createdAt": Anything,
        "id": Any<String>,
        "originUrl": "https://bafybeibtme5hmkjxsryerf6pihhfbhifwnsz7gmhnfqglg2r326m4glzva.ipfs.gateway-ipfs.fleek.xyz",
        "status": "CREATING",
        "type": "SITE",
        "updatedAt": Anything,
      }
    `
    );
  });

  it('should create zone for private gateway', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.domains().createZoneForPrivateGateway(),
    });

    expect(response).toMatchInlineSnapshot(
      { createdAt: expect.anything(), id: expect.any(String), updatedAt: expect.anything() },
      `
      Object {
        "createdAt": Anything,
        "id": Any<String>,
        "originUrl": "https://dedicated-gateway.fleek.xyz",
        "status": "CREATING",
        "type": "PRIVATE_GATEWAY",
        "updatedAt": Anything,
      }
    `
    );
  });

  it('should delete zone', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.domains().deleteZone({ id: window.seeds.domains.zone.electronicCoVideos.id }),
    });

    expect(response).toMatchInlineSnapshot(
      { updatedAt: expect.anything() },
      `
      Object {
        "createdAt": "2022-12-30T11:04:13.641Z",
        "id": "clje357cc000108jse08c2t6m",
        "originUrl": "https://ipfs.io/ipfs/QmdG8HaQAYccz22zLgJ33trzu8g6wjF6e48YbBEZhbz342",
        "status": "DELETING",
        "type": "SITE",
        "updatedAt": Anything,
      }
    `
    );
  });
});
