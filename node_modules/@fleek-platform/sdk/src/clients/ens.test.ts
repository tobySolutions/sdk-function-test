import { seeds } from '@fleek-platform/tester';
import { describe, expect } from 'vitest';

import { mockDatabasesAndGraphqlWithBrowserSdkForEachTest } from '../testTools/mockDatabasesAndGraphqlWithBrowserSdkForEachTest';
import { mockDatabasesAndGraphqlWithNodeSdkForEachTest } from '../testTools/mockDatabasesAndGraphqlWithNodeSdkForEachTest';

describe('[Node.js] EnsClient', () => {
  const { it } = mockDatabasesAndGraphqlWithNodeSdkForEachTest({ mockIpfs: false });

  it('should create ENS record', async (context) => {
    const response = await context.sdks.josh.ens().create({
      name: 'test.eth',
      ipnsRecordId: seeds.ipns.ipnsRecord.electronicCoEshop.id,
      siteId: seeds.sites.site.electronicCoEshop.id,
    });

    expect(response).toMatchInlineSnapshot(
      { createdAt: expect.anything(), id: expect.any(String), updatedAt: expect.anything() },
      `
      Object {
        "createdAt": Anything,
        "id": Any<String>,
        "ipnsRecord": Object {
          "hash": "QmcvfRw5WDutRzvRNq2matcJWW2nKWFGDbqxaaTxnWksME",
          "id": "clgkj995t000108med7gb2w4v",
          "name": "k51qzi5uqu5dhrupvn0ru1c6el43rhimh95cuiwqy0ofo8bgomvq296b49v9r7",
        },
        "name": "test.eth",
        "site": Object {
          "id": "clgma7ilu000008jzdlwhb76a",
        },
        "status": "CREATED",
        "updatedAt": Anything,
      }
    `
    );
  });

  it('should get ENS record by id', async (context) => {
    const response = await context.sdks.josh.ens().get({
      id: seeds.ipns.ensRecord['ens.eth'].id,
    });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "createdAt": "2023-03-24T08:05:13.641Z",
        "id": "af470cc1-08d8-4d39-be6f-b0eebc0a6480",
        "ipnsRecord": Object {
          "hash": "QmW73w6jvat7zDpFkYHft8eB88LiU6fPyV9LUX9et7XRUy",
          "id": "clgkj9pfa000308meh73d8nff",
          "name": "k51qzi5uqu5dipwqop5kj5na30qlwqbyyn54g8y3jcm3sdc02t9tjlec2a46ci",
        },
        "name": "ens.eth",
        "site": Object {
          "id": "clgove94b000208mlhq685zgh",
        },
        "status": "ACTIVE",
        "updatedAt": "2023-03-24T08:05:13.641Z",
      }
    `);
  });

  it('should get ENS record by name', async (context) => {
    const response = await context.sdks.josh.ens().getByName({
      name: seeds.ipns.ensRecord['ens.eth'].name,
    });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "createdAt": "2023-03-24T08:05:13.641Z",
        "id": "af470cc1-08d8-4d39-be6f-b0eebc0a6480",
        "ipnsRecord": Object {
          "hash": "QmW73w6jvat7zDpFkYHft8eB88LiU6fPyV9LUX9et7XRUy",
          "id": "clgkj9pfa000308meh73d8nff",
          "name": "k51qzi5uqu5dipwqop5kj5na30qlwqbyyn54g8y3jcm3sdc02t9tjlec2a46ci",
        },
        "name": "ens.eth",
        "site": Object {
          "id": "clgove94b000208mlhq685zgh",
        },
        "status": "ACTIVE",
        "updatedAt": "2023-03-24T08:05:13.641Z",
      }
    `);
  });

  it('should verify ENS record', async (context) => {
    const response = await context.sdks.josh.ens().verify({ id: seeds.ipns.ensRecord['vitalik.eth'].id });

    expect(response).toMatchInlineSnapshot(
      { updatedAt: expect.anything() },
      `
      Object {
        "createdAt": "2023-03-24T08:05:13.641Z",
        "id": "40767ba9-eb85-439b-9369-489459a9376b",
        "ipnsRecord": Object {
          "hash": "QmX7WyiLtbvmfbUzN2eJuvmDuGZSDjavuauwaJL4bFC5SJ",
          "id": "clgkj9ipf000208me9yzre1cn",
          "name": "k51qzi5uqu5dh2c8ec00yowiapopchxdvnwh6iy2xoxc51inldruqh4yvzgez5",
        },
        "name": "vitalik.eth",
        "site": Object {
          "id": "clgma7mmh000108jzd13c50ol",
        },
        "status": "VERIFYING",
        "updatedAt": Anything,
      }
    `
    );
  });

  it('should delete ENS record', async (context) => {
    const response = await context.sdks.josh.ens().delete({ id: seeds.ipns.ensRecord['ens.eth'].id });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "createdAt": "2023-03-24T08:05:13.641Z",
        "id": "af470cc1-08d8-4d39-be6f-b0eebc0a6480",
        "ipnsRecord": Object {
          "hash": "QmW73w6jvat7zDpFkYHft8eB88LiU6fPyV9LUX9et7XRUy",
          "id": "clgkj9pfa000308meh73d8nff",
          "name": "k51qzi5uqu5dipwqop5kj5na30qlwqbyyn54g8y3jcm3sdc02t9tjlec2a46ci",
        },
        "name": "ens.eth",
        "site": Object {
          "id": "clgove94b000208mlhq685zgh",
        },
        "status": "ACTIVE",
        "updatedAt": "2023-03-24T08:05:13.641Z",
      }
    `);
  });

  it('should list ENS records', async (context) => {
    const response = await context.sdks.josh.ens().list();

    expect(response).toMatchInlineSnapshot(`
      Array [
        Object {
          "createdAt": "2023-03-24T08:05:13.641Z",
          "id": "40767ba9-eb85-439b-9369-489459a9376b",
          "ipnsRecord": Object {
            "hash": "QmX7WyiLtbvmfbUzN2eJuvmDuGZSDjavuauwaJL4bFC5SJ",
            "id": "clgkj9ipf000208me9yzre1cn",
            "name": "k51qzi5uqu5dh2c8ec00yowiapopchxdvnwh6iy2xoxc51inldruqh4yvzgez5",
          },
          "name": "vitalik.eth",
          "site": Object {
            "id": "clgma7mmh000108jzd13c50ol",
          },
          "status": "CREATED",
          "updatedAt": "2023-03-24T08:05:13.641Z",
        },
        Object {
          "createdAt": "2023-03-25T08:05:13.641Z",
          "id": "8d3ad502-ec4d-489e-858e-d112656f3511",
          "ipnsRecord": Object {
            "hash": "QmcvfRw5WDutRzvRNq2matcJWW2nKWFGDbqxaaTxnWksME",
            "id": "clgkj995t000108med7gb2w4v",
            "name": "k51qzi5uqu5dhrupvn0ru1c6el43rhimh95cuiwqy0ofo8bgomvq296b49v9r7",
          },
          "name": "dries.eth",
          "site": Object {
            "id": "clgma7ilu000008jzdlwhb76a",
          },
          "status": "VERIFYING",
          "updatedAt": "2023-03-25T08:05:13.641Z",
        },
        Object {
          "createdAt": "2023-03-24T08:05:13.641Z",
          "id": "af470cc1-08d8-4d39-be6f-b0eebc0a6480",
          "ipnsRecord": Object {
            "hash": "QmW73w6jvat7zDpFkYHft8eB88LiU6fPyV9LUX9et7XRUy",
            "id": "clgkj9pfa000308meh73d8nff",
            "name": "k51qzi5uqu5dipwqop5kj5na30qlwqbyyn54g8y3jcm3sdc02t9tjlec2a46ci",
          },
          "name": "ens.eth",
          "site": Object {
            "id": "clgove94b000208mlhq685zgh",
          },
          "status": "ACTIVE",
          "updatedAt": "2023-03-24T08:05:13.641Z",
        },
        Object {
          "createdAt": "2023-03-26T08:05:13.641Z",
          "id": "clm0mhccs000108ma34jn6ed3",
          "ipnsRecord": Object {
            "hash": "QmcvfRw5WDutRzvRNq2matcJWW2nKWFGDbqxaaTxnWksME",
            "id": "clgkj995t000108med7gb2w4v",
            "name": "k51qzi5uqu5dhrupvn0ru1c6el43rhimh95cuiwqy0ofo8bgomvq296b49v9r7",
          },
          "name": "smarttv.eth",
          "site": Object {
            "id": "clgma7ilu000008jzdlwhb76a",
          },
          "status": "ACTIVE",
          "updatedAt": "2023-03-26T08:05:13.641Z",
        },
      ]
    `);
  });

  it('should list ENS records by IPNS record id', async (context) => {
    const response = await context.sdks.josh.ens().listByIpnsRecordId({ ipnsRecordId: seeds.ipns.ipnsRecord.electronicCoBlog.id });

    expect(response).toMatchInlineSnapshot(`
      Array [
        Object {
          "createdAt": "2023-03-24T08:05:13.641Z",
          "id": "40767ba9-eb85-439b-9369-489459a9376b",
          "ipnsRecord": Object {
            "hash": "QmX7WyiLtbvmfbUzN2eJuvmDuGZSDjavuauwaJL4bFC5SJ",
            "id": "clgkj9ipf000208me9yzre1cn",
            "name": "k51qzi5uqu5dh2c8ec00yowiapopchxdvnwh6iy2xoxc51inldruqh4yvzgez5",
          },
          "name": "vitalik.eth",
          "site": Object {
            "id": "clgma7mmh000108jzd13c50ol",
          },
          "status": "CREATED",
          "updatedAt": "2023-03-24T08:05:13.641Z",
        },
      ]
    `);
  });
});

describe('[Chromium] EnsClient', () => {
  const { it } = mockDatabasesAndGraphqlWithBrowserSdkForEachTest({ mockIpfs: false });

  it('should create ENS record', async (context) => {
    const response = await context.sdks.josh({
      callback: () =>
        window.sdk.ens().create({
          name: 'test.eth',
          ipnsRecordId: window.seeds.ipns.ipnsRecord.electronicCoEshop.id,
          siteId: window.seeds.sites.site.electronicCoEshop.id,
        }),
    });

    expect(response).toMatchInlineSnapshot(
      { createdAt: expect.anything(), id: expect.any(String), updatedAt: expect.anything() },
      `
      Object {
        "createdAt": Anything,
        "id": Any<String>,
        "ipnsRecord": Object {
          "hash": "QmcvfRw5WDutRzvRNq2matcJWW2nKWFGDbqxaaTxnWksME",
          "id": "clgkj995t000108med7gb2w4v",
          "name": "k51qzi5uqu5dhrupvn0ru1c6el43rhimh95cuiwqy0ofo8bgomvq296b49v9r7",
        },
        "name": "test.eth",
        "site": Object {
          "id": "clgma7ilu000008jzdlwhb76a",
        },
        "status": "CREATED",
        "updatedAt": Anything,
      }
    `
    );
  });

  it('should get ENS record by id', async (context) => {
    const response = await context.sdks.josh({ callback: () => window.sdk.ens().get({ id: window.seeds.ipns.ensRecord['ens.eth'].id }) });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "createdAt": "2023-03-24T08:05:13.641Z",
        "id": "af470cc1-08d8-4d39-be6f-b0eebc0a6480",
        "ipnsRecord": Object {
          "hash": "QmW73w6jvat7zDpFkYHft8eB88LiU6fPyV9LUX9et7XRUy",
          "id": "clgkj9pfa000308meh73d8nff",
          "name": "k51qzi5uqu5dipwqop5kj5na30qlwqbyyn54g8y3jcm3sdc02t9tjlec2a46ci",
        },
        "name": "ens.eth",
        "site": Object {
          "id": "clgove94b000208mlhq685zgh",
        },
        "status": "ACTIVE",
        "updatedAt": "2023-03-24T08:05:13.641Z",
      }
    `);
  });

  it('should get ENS record by name', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.ens().getByName({ name: window.seeds.ipns.ensRecord['ens.eth'].name }),
    });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "createdAt": "2023-03-24T08:05:13.641Z",
        "id": "af470cc1-08d8-4d39-be6f-b0eebc0a6480",
        "ipnsRecord": Object {
          "hash": "QmW73w6jvat7zDpFkYHft8eB88LiU6fPyV9LUX9et7XRUy",
          "id": "clgkj9pfa000308meh73d8nff",
          "name": "k51qzi5uqu5dipwqop5kj5na30qlwqbyyn54g8y3jcm3sdc02t9tjlec2a46ci",
        },
        "name": "ens.eth",
        "site": Object {
          "id": "clgove94b000208mlhq685zgh",
        },
        "status": "ACTIVE",
        "updatedAt": "2023-03-24T08:05:13.641Z",
      }
    `);
  });

  it('should verify ENS record', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.ens().verify({ id: window.seeds.ipns.ensRecord['vitalik.eth'].id }),
    });

    expect(response).toMatchInlineSnapshot(
      { updatedAt: expect.anything() },
      `
      Object {
        "createdAt": "2023-03-24T08:05:13.641Z",
        "id": "40767ba9-eb85-439b-9369-489459a9376b",
        "ipnsRecord": Object {
          "hash": "QmX7WyiLtbvmfbUzN2eJuvmDuGZSDjavuauwaJL4bFC5SJ",
          "id": "clgkj9ipf000208me9yzre1cn",
          "name": "k51qzi5uqu5dh2c8ec00yowiapopchxdvnwh6iy2xoxc51inldruqh4yvzgez5",
        },
        "name": "vitalik.eth",
        "site": Object {
          "id": "clgma7mmh000108jzd13c50ol",
        },
        "status": "VERIFYING",
        "updatedAt": Anything,
      }
    `
    );
  });

  it('should delete ENS record', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.ens().delete({ id: window.seeds.ipns.ensRecord['ens.eth'].id }),
    });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "createdAt": "2023-03-24T08:05:13.641Z",
        "id": "af470cc1-08d8-4d39-be6f-b0eebc0a6480",
        "ipnsRecord": Object {
          "hash": "QmW73w6jvat7zDpFkYHft8eB88LiU6fPyV9LUX9et7XRUy",
          "id": "clgkj9pfa000308meh73d8nff",
          "name": "k51qzi5uqu5dipwqop5kj5na30qlwqbyyn54g8y3jcm3sdc02t9tjlec2a46ci",
        },
        "name": "ens.eth",
        "site": Object {
          "id": "clgove94b000208mlhq685zgh",
        },
        "status": "ACTIVE",
        "updatedAt": "2023-03-24T08:05:13.641Z",
      }
    `);
  });

  it('should list ENS records', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.ens().list(),
    });

    expect(response).toMatchInlineSnapshot(`
      Array [
        Object {
          "createdAt": "2023-03-24T08:05:13.641Z",
          "id": "40767ba9-eb85-439b-9369-489459a9376b",
          "ipnsRecord": Object {
            "hash": "QmX7WyiLtbvmfbUzN2eJuvmDuGZSDjavuauwaJL4bFC5SJ",
            "id": "clgkj9ipf000208me9yzre1cn",
            "name": "k51qzi5uqu5dh2c8ec00yowiapopchxdvnwh6iy2xoxc51inldruqh4yvzgez5",
          },
          "name": "vitalik.eth",
          "site": Object {
            "id": "clgma7mmh000108jzd13c50ol",
          },
          "status": "CREATED",
          "updatedAt": "2023-03-24T08:05:13.641Z",
        },
        Object {
          "createdAt": "2023-03-25T08:05:13.641Z",
          "id": "8d3ad502-ec4d-489e-858e-d112656f3511",
          "ipnsRecord": Object {
            "hash": "QmcvfRw5WDutRzvRNq2matcJWW2nKWFGDbqxaaTxnWksME",
            "id": "clgkj995t000108med7gb2w4v",
            "name": "k51qzi5uqu5dhrupvn0ru1c6el43rhimh95cuiwqy0ofo8bgomvq296b49v9r7",
          },
          "name": "dries.eth",
          "site": Object {
            "id": "clgma7ilu000008jzdlwhb76a",
          },
          "status": "VERIFYING",
          "updatedAt": "2023-03-25T08:05:13.641Z",
        },
        Object {
          "createdAt": "2023-03-24T08:05:13.641Z",
          "id": "af470cc1-08d8-4d39-be6f-b0eebc0a6480",
          "ipnsRecord": Object {
            "hash": "QmW73w6jvat7zDpFkYHft8eB88LiU6fPyV9LUX9et7XRUy",
            "id": "clgkj9pfa000308meh73d8nff",
            "name": "k51qzi5uqu5dipwqop5kj5na30qlwqbyyn54g8y3jcm3sdc02t9tjlec2a46ci",
          },
          "name": "ens.eth",
          "site": Object {
            "id": "clgove94b000208mlhq685zgh",
          },
          "status": "ACTIVE",
          "updatedAt": "2023-03-24T08:05:13.641Z",
        },
        Object {
          "createdAt": "2023-03-26T08:05:13.641Z",
          "id": "clm0mhccs000108ma34jn6ed3",
          "ipnsRecord": Object {
            "hash": "QmcvfRw5WDutRzvRNq2matcJWW2nKWFGDbqxaaTxnWksME",
            "id": "clgkj995t000108med7gb2w4v",
            "name": "k51qzi5uqu5dhrupvn0ru1c6el43rhimh95cuiwqy0ofo8bgomvq296b49v9r7",
          },
          "name": "smarttv.eth",
          "site": Object {
            "id": "clgma7ilu000008jzdlwhb76a",
          },
          "status": "ACTIVE",
          "updatedAt": "2023-03-26T08:05:13.641Z",
        },
      ]
    `);
  });

  it('should list ENS records by IPNS records id', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.ens().listByIpnsRecordId({ ipnsRecordId: window.seeds.ipns.ipnsRecord.electronicCoBlog.id }),
    });

    expect(response).toMatchInlineSnapshot(`
      Array [
        Object {
          "createdAt": "2023-03-24T08:05:13.641Z",
          "id": "40767ba9-eb85-439b-9369-489459a9376b",
          "ipnsRecord": Object {
            "hash": "QmX7WyiLtbvmfbUzN2eJuvmDuGZSDjavuauwaJL4bFC5SJ",
            "id": "clgkj9ipf000208me9yzre1cn",
            "name": "k51qzi5uqu5dh2c8ec00yowiapopchxdvnwh6iy2xoxc51inldruqh4yvzgez5",
          },
          "name": "vitalik.eth",
          "site": Object {
            "id": "clgma7mmh000108jzd13c50ol",
          },
          "status": "CREATED",
          "updatedAt": "2023-03-24T08:05:13.641Z",
        },
      ]
    `);
  });
});
