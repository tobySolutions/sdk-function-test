import { seeds } from '@fleek-platform/tester';
import { describe, expect, vi } from 'vitest';

import { mockDatabasesAndGraphqlWithBrowserSdkForEachTest } from '../testTools/mockDatabasesAndGraphqlWithBrowserSdkForEachTest';
import { mockDatabasesAndGraphqlWithNodeSdkForEachTest } from '../testTools/mockDatabasesAndGraphqlWithNodeSdkForEachTest';

vi.mock('@fleek-platform/graphql/node_modules/@fleek-platform/utils-text', () => ({
  generateSlug: vi.fn().mockReturnValue('crooked-bland-jackal'),
}));

vi.mock('@fleek-platform/graphql/node_modules/@aws-sdk/client-sfn', () => {
  const SFNClient = vi.fn();
  SFNClient.prototype.send = vi.fn().mockResolvedValue({});

  const StartExecutionCommand = vi.fn().mockResolvedValue({});

  return { SFNClient, StartExecutionCommand };
});

describe('[Node.js] SitesClient', () => {
  const { it } = mockDatabasesAndGraphqlWithNodeSdkForEachTest({ mockIpfs: false });

  it('should get site by its id', async (context) => {
    const response = await context.sdks.josh.sites().get({ id: seeds.sites.site.electronicCoEshop.id });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "deployments": Array [
          Object {
            "cid": "QmRoDVTGN563GNv6sXnXPhgdMC7qWyAopU4CuLWF1y7MG3",
            "createdAt": "2023-03-24T10:05:13.641Z",
            "id": "clgmajwf7000208mo67lnhgu0",
            "siteId": "clgma7ilu000008jzdlwhb76a",
            "status": "BUILD_IN_PROGRESS",
            "storageType": "IPFS",
            "updatedAt": "2023-03-24T10:05:13.641Z",
          },
          Object {
            "cid": "QmamXAD3x4WR7YCqPrBh22EUVYs9rhnUEG69Q97bJ1XrKu",
            "createdAt": "2023-03-24T09:05:13.641Z",
            "id": "clgmajsoo000108moef7f1yt0",
            "siteId": "clgma7ilu000008jzdlwhb76a",
            "status": "RELEASE_COMPLETED",
            "storageType": "IPFS",
            "updatedAt": "2023-03-24T09:05:13.641Z",
          },
        ],
        "id": "clgma7ilu000008jzdlwhb76a",
        "ipnsRecords": Array [
          Object {
            "id": "clgkj995t000108med7gb2w4v",
          },
        ],
        "name": "electronic-co-shop",
        "primaryDomain": Object {
          "hostname": "electronic.co",
          "id": "clgmfj1pa000108lc0g5i7d32",
        },
        "slug": "blue-green-yellow",
        "zones": Array [
          Object {
            "id": "clgmfj874000208lc2e9ccglf",
          },
          Object {
            "id": "cljfq6n2y000008lb4oy403bc",
          },
        ],
      }
    `);
  });

  it('should get site by its slug', async (context) => {
    const response = await context.sdks.josh.sites().getBySlug({ slug: seeds.sites.site.electronicCoEshop.slug });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "deployments": Array [
          Object {
            "cid": "QmRoDVTGN563GNv6sXnXPhgdMC7qWyAopU4CuLWF1y7MG3",
            "createdAt": "2023-03-24T10:05:13.641Z",
            "id": "clgmajwf7000208mo67lnhgu0",
            "siteId": "clgma7ilu000008jzdlwhb76a",
            "status": "BUILD_IN_PROGRESS",
            "storageType": "IPFS",
            "updatedAt": "2023-03-24T10:05:13.641Z",
          },
          Object {
            "cid": "QmamXAD3x4WR7YCqPrBh22EUVYs9rhnUEG69Q97bJ1XrKu",
            "createdAt": "2023-03-24T09:05:13.641Z",
            "id": "clgmajsoo000108moef7f1yt0",
            "siteId": "clgma7ilu000008jzdlwhb76a",
            "status": "RELEASE_COMPLETED",
            "storageType": "IPFS",
            "updatedAt": "2023-03-24T09:05:13.641Z",
          },
        ],
        "id": "clgma7ilu000008jzdlwhb76a",
        "ipnsRecords": Array [
          Object {
            "id": "clgkj995t000108med7gb2w4v",
          },
        ],
        "name": "electronic-co-shop",
        "primaryDomain": Object {
          "hostname": "electronic.co",
          "id": "clgmfj1pa000108lc0g5i7d32",
        },
        "slug": "blue-green-yellow",
        "zones": Array [
          Object {
            "id": "clgmfj874000208lc2e9ccglf",
          },
          Object {
            "id": "cljfq6n2y000008lb4oy403bc",
          },
        ],
      }
    `);
  });

  it('list sites', async (context) => {
    const response = await context.sdks.josh.sites().list();

    expect(response).toMatchInlineSnapshot(`
      Array [
        Object {
          "deployments": Array [
            Object {
              "cid": "QmRoDVTGN563GNv6sXnXPhgdMC7qWyAopU4CuLWF1y7MG3",
              "createdAt": "2023-03-24T10:05:13.641Z",
              "id": "clgmajwf7000208mo67lnhgu0",
              "siteId": "clgma7ilu000008jzdlwhb76a",
              "status": "BUILD_IN_PROGRESS",
              "storageType": "IPFS",
              "updatedAt": "2023-03-24T10:05:13.641Z",
            },
            Object {
              "cid": "QmamXAD3x4WR7YCqPrBh22EUVYs9rhnUEG69Q97bJ1XrKu",
              "createdAt": "2023-03-24T09:05:13.641Z",
              "id": "clgmajsoo000108moef7f1yt0",
              "siteId": "clgma7ilu000008jzdlwhb76a",
              "status": "RELEASE_COMPLETED",
              "storageType": "IPFS",
              "updatedAt": "2023-03-24T09:05:13.641Z",
            },
          ],
          "id": "clgma7ilu000008jzdlwhb76a",
          "ipnsRecords": Array [
            Object {
              "id": "clgkj995t000108med7gb2w4v",
            },
          ],
          "name": "electronic-co-shop",
          "primaryDomain": Object {
            "hostname": "electronic.co",
            "id": "clgmfj1pa000108lc0g5i7d32",
          },
          "slug": "blue-green-yellow",
          "zones": Array [
            Object {
              "id": "clgmfj874000208lc2e9ccglf",
            },
            Object {
              "id": "cljfq6n2y000008lb4oy403bc",
            },
          ],
        },
        Object {
          "deployments": Array [
            Object {
              "cid": "QmamXAD3x4WR7YCqPrBh22EUVYs9rhnUEG69Q97bJ1XrKu",
              "createdAt": "2023-03-25T10:05:13.641Z",
              "id": "clgmak57r000408mo9wd65hpf",
              "siteId": "clgma7mmh000108jzd13c50ol",
              "status": "RELEASE_COMPLETED",
              "storageType": "IPFS",
              "updatedAt": "2023-03-25T10:05:13.641Z",
            },
            Object {
              "cid": null,
              "createdAt": "2023-03-25T09:05:13.641Z",
              "id": "clgmak03f000308modn0j7ltq",
              "siteId": "clgma7mmh000108jzd13c50ol",
              "status": "RELEASE_FAILED",
              "storageType": "IPFS",
              "updatedAt": "2023-03-25T09:05:13.641Z",
            },
          ],
          "id": "clgma7mmh000108jzd13c50ol",
          "ipnsRecords": Array [
            Object {
              "id": "clgkj9ipf000208me9yzre1cn",
            },
          ],
          "name": "electronic-co-blog",
          "primaryDomain": null,
          "slug": "white-black-silver",
          "zones": Array [
            Object {
              "id": "clgow7wob000508jog5gfanj9",
            },
          ],
        },
        Object {
          "deployments": Array [],
          "id": "clje32iwx000008js9rjb5uoo",
          "ipnsRecords": Array [],
          "name": "electronic-co-videos",
          "primaryDomain": null,
          "slug": "green-gold-silver",
          "zones": Array [
            Object {
              "id": "clje357cc000108jse08c2t6m",
            },
          ],
        },
        Object {
          "deployments": Array [
            Object {
              "cid": "bafybeifcesfwifuhcshuobdgw6kod4jzinu4u4v2lzjzdmps3ndaydrsri",
              "createdAt": "2023-08-21T19:00:51.038Z",
              "id": "clmz7kxj60003mk08eg5wmtqh",
              "siteId": "clmkp5nn50000mm08yq7hierx",
              "status": "RELEASE_COMPLETED",
              "storageType": "IPFS",
              "updatedAt": "2023-08-21T19:04:04.569Z",
            },
          ],
          "id": "clmkp5nn50000mm08yq7hierx",
          "ipnsRecords": Array [],
          "name": "electronicCoLanding",
          "primaryDomain": null,
          "slug": "red-green-blue",
          "zones": Array [],
        },
      ]
    `);
  });

  it('should create site', async (context) => {
    const response = await context.sdks.josh.sites().create({
      name: 'new-site',
    });

    expect(response).toMatchInlineSnapshot(
      { id: expect.any(String) },
      `
      Object {
        "deployments": Array [],
        "id": Any<String>,
        "ipnsRecords": Array [],
        "name": "new-site",
        "primaryDomain": null,
        "slug": "crooked-bland-jackal",
        "zones": Array [],
      }
    `
    );
  });

  it('should delete site', async (context) => {
    const response = await context.sdks.josh.sites().delete({
      id: seeds.sites.site.electronicCoVideos.id,
    });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "deployments": Array [],
        "id": "clje32iwx000008js9rjb5uoo",
        "ipnsRecords": Array [],
        "name": "electronic-co-videos",
        "primaryDomain": null,
        "slug": "green-gold-silver",
        "zones": Array [
          Object {
            "id": "clje357cc000108jse08c2t6m",
          },
        ],
      }
    `);
  });

  it('should create custom ipfs deployment', async (context) => {
    const response = await context.sdks.josh.sites().createCustomIpfsDeployment({
      siteId: seeds.sites.site.electronicCoBlog.id,
      cid: 'QmcZhtEFcTJfa1UPhVgHNp5i2YzjzB4tckaMnyVd5SgSqs',
    });

    expect(response).toMatchInlineSnapshot(
      { createdAt: expect.anything(), id: expect.any(String), updatedAt: expect.anything() },
      `
      Object {
        "cid": "bafybeigtlpa4nljtqlhagceubl3xidofy6iriovqr55ex7pqnpq5eq5fxy",
        "createdAt": Anything,
        "id": Any<String>,
        "siteId": "clgma7mmh000108jzd13c50ol",
        "status": "UPLOAD_COMPLETED",
        "storageType": "IPFS",
        "updatedAt": Anything,
      }
    `
    );
  });

  it('get deployment by its id', async (context) => {
    const response = await context.sdks.josh.sites().getDeployment({ id: seeds.sites.deployment.electronicCoEshopV2.id });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "cid": "QmRoDVTGN563GNv6sXnXPhgdMC7qWyAopU4CuLWF1y7MG3",
        "createdAt": "2023-03-24T10:05:13.641Z",
        "id": "clgmajwf7000208mo67lnhgu0",
        "siteId": "clgma7ilu000008jzdlwhb76a",
        "status": "BUILD_IN_PROGRESS",
        "storageType": "IPFS",
        "updatedAt": "2023-03-24T10:05:13.641Z",
      }
    `);
  });
});

describe('[Chromium] SitesClient', () => {
  const { it } = mockDatabasesAndGraphqlWithBrowserSdkForEachTest({ mockIpfs: false });

  it('should get site by its id', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.sites().get({ id: window.seeds.sites.site.electronicCoEshop.id }),
    });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "deployments": Array [
          Object {
            "cid": "QmRoDVTGN563GNv6sXnXPhgdMC7qWyAopU4CuLWF1y7MG3",
            "createdAt": "2023-03-24T10:05:13.641Z",
            "id": "clgmajwf7000208mo67lnhgu0",
            "siteId": "clgma7ilu000008jzdlwhb76a",
            "status": "BUILD_IN_PROGRESS",
            "storageType": "IPFS",
            "updatedAt": "2023-03-24T10:05:13.641Z",
          },
          Object {
            "cid": "QmamXAD3x4WR7YCqPrBh22EUVYs9rhnUEG69Q97bJ1XrKu",
            "createdAt": "2023-03-24T09:05:13.641Z",
            "id": "clgmajsoo000108moef7f1yt0",
            "siteId": "clgma7ilu000008jzdlwhb76a",
            "status": "RELEASE_COMPLETED",
            "storageType": "IPFS",
            "updatedAt": "2023-03-24T09:05:13.641Z",
          },
        ],
        "id": "clgma7ilu000008jzdlwhb76a",
        "ipnsRecords": Array [
          Object {
            "id": "clgkj995t000108med7gb2w4v",
          },
        ],
        "name": "electronic-co-shop",
        "primaryDomain": Object {
          "hostname": "electronic.co",
          "id": "clgmfj1pa000108lc0g5i7d32",
        },
        "slug": "blue-green-yellow",
        "zones": Array [
          Object {
            "id": "clgmfj874000208lc2e9ccglf",
          },
          Object {
            "id": "cljfq6n2y000008lb4oy403bc",
          },
        ],
      }
    `);
  });

  it('should get site by its slug', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.sites().getBySlug({ slug: window.seeds.sites.site.electronicCoEshop.slug }),
    });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "deployments": Array [
          Object {
            "cid": "QmRoDVTGN563GNv6sXnXPhgdMC7qWyAopU4CuLWF1y7MG3",
            "createdAt": "2023-03-24T10:05:13.641Z",
            "id": "clgmajwf7000208mo67lnhgu0",
            "siteId": "clgma7ilu000008jzdlwhb76a",
            "status": "BUILD_IN_PROGRESS",
            "storageType": "IPFS",
            "updatedAt": "2023-03-24T10:05:13.641Z",
          },
          Object {
            "cid": "QmamXAD3x4WR7YCqPrBh22EUVYs9rhnUEG69Q97bJ1XrKu",
            "createdAt": "2023-03-24T09:05:13.641Z",
            "id": "clgmajsoo000108moef7f1yt0",
            "siteId": "clgma7ilu000008jzdlwhb76a",
            "status": "RELEASE_COMPLETED",
            "storageType": "IPFS",
            "updatedAt": "2023-03-24T09:05:13.641Z",
          },
        ],
        "id": "clgma7ilu000008jzdlwhb76a",
        "ipnsRecords": Array [
          Object {
            "id": "clgkj995t000108med7gb2w4v",
          },
        ],
        "name": "electronic-co-shop",
        "primaryDomain": Object {
          "hostname": "electronic.co",
          "id": "clgmfj1pa000108lc0g5i7d32",
        },
        "slug": "blue-green-yellow",
        "zones": Array [
          Object {
            "id": "clgmfj874000208lc2e9ccglf",
          },
          Object {
            "id": "cljfq6n2y000008lb4oy403bc",
          },
        ],
      }
    `);
  });

  it('should list sites', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.sites().list(),
    });

    expect(response).toMatchInlineSnapshot(`
      Array [
        Object {
          "deployments": Array [
            Object {
              "cid": "QmRoDVTGN563GNv6sXnXPhgdMC7qWyAopU4CuLWF1y7MG3",
              "createdAt": "2023-03-24T10:05:13.641Z",
              "id": "clgmajwf7000208mo67lnhgu0",
              "siteId": "clgma7ilu000008jzdlwhb76a",
              "status": "BUILD_IN_PROGRESS",
              "storageType": "IPFS",
              "updatedAt": "2023-03-24T10:05:13.641Z",
            },
            Object {
              "cid": "QmamXAD3x4WR7YCqPrBh22EUVYs9rhnUEG69Q97bJ1XrKu",
              "createdAt": "2023-03-24T09:05:13.641Z",
              "id": "clgmajsoo000108moef7f1yt0",
              "siteId": "clgma7ilu000008jzdlwhb76a",
              "status": "RELEASE_COMPLETED",
              "storageType": "IPFS",
              "updatedAt": "2023-03-24T09:05:13.641Z",
            },
          ],
          "id": "clgma7ilu000008jzdlwhb76a",
          "ipnsRecords": Array [
            Object {
              "id": "clgkj995t000108med7gb2w4v",
            },
          ],
          "name": "electronic-co-shop",
          "primaryDomain": Object {
            "hostname": "electronic.co",
            "id": "clgmfj1pa000108lc0g5i7d32",
          },
          "slug": "blue-green-yellow",
          "zones": Array [
            Object {
              "id": "clgmfj874000208lc2e9ccglf",
            },
            Object {
              "id": "cljfq6n2y000008lb4oy403bc",
            },
          ],
        },
        Object {
          "deployments": Array [
            Object {
              "cid": "QmamXAD3x4WR7YCqPrBh22EUVYs9rhnUEG69Q97bJ1XrKu",
              "createdAt": "2023-03-25T10:05:13.641Z",
              "id": "clgmak57r000408mo9wd65hpf",
              "siteId": "clgma7mmh000108jzd13c50ol",
              "status": "RELEASE_COMPLETED",
              "storageType": "IPFS",
              "updatedAt": "2023-03-25T10:05:13.641Z",
            },
            Object {
              "cid": null,
              "createdAt": "2023-03-25T09:05:13.641Z",
              "id": "clgmak03f000308modn0j7ltq",
              "siteId": "clgma7mmh000108jzd13c50ol",
              "status": "RELEASE_FAILED",
              "storageType": "IPFS",
              "updatedAt": "2023-03-25T09:05:13.641Z",
            },
          ],
          "id": "clgma7mmh000108jzd13c50ol",
          "ipnsRecords": Array [
            Object {
              "id": "clgkj9ipf000208me9yzre1cn",
            },
          ],
          "name": "electronic-co-blog",
          "primaryDomain": null,
          "slug": "white-black-silver",
          "zones": Array [
            Object {
              "id": "clgow7wob000508jog5gfanj9",
            },
          ],
        },
        Object {
          "deployments": Array [],
          "id": "clje32iwx000008js9rjb5uoo",
          "ipnsRecords": Array [],
          "name": "electronic-co-videos",
          "primaryDomain": null,
          "slug": "green-gold-silver",
          "zones": Array [
            Object {
              "id": "clje357cc000108jse08c2t6m",
            },
          ],
        },
        Object {
          "deployments": Array [
            Object {
              "cid": "bafybeifcesfwifuhcshuobdgw6kod4jzinu4u4v2lzjzdmps3ndaydrsri",
              "createdAt": "2023-08-21T19:00:51.038Z",
              "id": "clmz7kxj60003mk08eg5wmtqh",
              "siteId": "clmkp5nn50000mm08yq7hierx",
              "status": "RELEASE_COMPLETED",
              "storageType": "IPFS",
              "updatedAt": "2023-08-21T19:04:04.569Z",
            },
          ],
          "id": "clmkp5nn50000mm08yq7hierx",
          "ipnsRecords": Array [],
          "name": "electronicCoLanding",
          "primaryDomain": null,
          "slug": "red-green-blue",
          "zones": Array [],
        },
      ]
    `);
  });

  it('should create site', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.sites().create({ name: 'new-site' }),
    });

    expect(response).toMatchInlineSnapshot(
      { id: expect.any(String) },
      `
      Object {
        "deployments": Array [],
        "id": Any<String>,
        "ipnsRecords": Array [],
        "name": "new-site",
        "primaryDomain": null,
        "slug": "crooked-bland-jackal",
        "zones": Array [],
      }
    `
    );
  });

  it('should delete site', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.sites().delete({ id: window.seeds.sites.site.electronicCoVideos.id }),
    });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "deployments": Array [],
        "id": "clje32iwx000008js9rjb5uoo",
        "ipnsRecords": Array [],
        "name": "electronic-co-videos",
        "primaryDomain": null,
        "slug": "green-gold-silver",
        "zones": Array [
          Object {
            "id": "clje357cc000108jse08c2t6m",
          },
        ],
      }
    `);
  });

  it('should create custom ipfs deployment', async (context) => {
    const response = await context.sdks.josh({
      callback: () =>
        window.sdk.sites().createCustomIpfsDeployment({
          siteId: window.seeds.sites.site.electronicCoBlog.id,
          cid: 'QmcZhtEFcTJfa1UPhVgHNp5i2YzjzB4tckaMnyVd5SgSqs',
        }),
    });

    expect(response).toMatchInlineSnapshot(
      { createdAt: expect.anything(), id: expect.any(String), updatedAt: expect.anything() },
      `
      Object {
        "cid": "bafybeigtlpa4nljtqlhagceubl3xidofy6iriovqr55ex7pqnpq5eq5fxy",
        "createdAt": Anything,
        "id": Any<String>,
        "siteId": "clgma7mmh000108jzd13c50ol",
        "status": "UPLOAD_COMPLETED",
        "storageType": "IPFS",
        "updatedAt": Anything,
      }
    `
    );

    it('get deployment by its id', async (context) => {
      const response = await context.sdks.josh({
        callback: () =>
          window.sdk.sites().getDeployment({
            id: window.seeds.sites.deployment.electronicCoEshopV2.id,
          }),
      });

      expect(response).toMatchInlineSnapshot();
    });
  });

  it('should get deployment', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.sites().getDeployment({ id: window.seeds.sites.deployment.electronicCoEshopV2.id }),
    });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "cid": "QmRoDVTGN563GNv6sXnXPhgdMC7qWyAopU4CuLWF1y7MG3",
        "createdAt": "2023-03-24T10:05:13.641Z",
        "id": "clgmajwf7000208mo67lnhgu0",
        "siteId": "clgma7ilu000008jzdlwhb76a",
        "status": "BUILD_IN_PROGRESS",
        "storageType": "IPFS",
        "updatedAt": "2023-03-24T10:05:13.641Z",
      }
    `);
  });
});
