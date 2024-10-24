import { seeds } from '@fleek-platform/tester';
import { describe, expect, vi } from 'vitest';

import { mockDatabasesAndGraphqlWithBrowserSdkForEachTest } from '../testTools/mockDatabasesAndGraphqlWithBrowserSdkForEachTest';
import { mockDatabasesAndGraphqlWithNodeSdkForEachTest } from '../testTools/mockDatabasesAndGraphqlWithNodeSdkForEachTest';

vi.mock('@fleek-platform/graphql/node_modules/axios', () => {
  const post = vi.fn().mockResolvedValue({ data: { id: 'k51qzi5uqu5dgsc1bvsuk1x84bptdvp8cupbnnbqxpxzd629gadpci3kpcm311' } });

  return { default: { post } };
});

vi.mock('@fleek-platform/graphql/node_modules/@fleek-platform/ipns', () => {
  const createW3NameAndEncryptKey = vi.fn().mockResolvedValue({
    name: 'test-name',
    key: 'C6pxShUFJkS5dSaXluN6O/tLqt5wpw5A88WCZiKRJ4ErD69dbe0qY7y6nBT5TMm/TyGw5ocelpnZeG6MM2V1gFBgDG/xranNsc/gj4npI3zvlGNbud3rxN3sXHKFwODgIN0rCZ2+L0DzhQaU6F/lei/XBjKsorTy89Oq/XFGARSoegDktPmku6ffIKtntTVjxQvBtU/kg2MjObeE95A1Cbbf8hlVSyOxEJWWPYq/IQ5k+3mgVaGIVPxfah9tbfbZ2E1s/patXiIhuiZO9bwfayS08juyACQ9xRDEBzr3CIHsKUmBPY3kGqBFmKHY+8SouKzHc9ir0EfZ4eJ6baDrL1GxauMS3zZCtsJQ8OvmQFrqmHZD0SilPtHNh4bziCkyK/hXeTGy3IZpRoIbpCKD8q5msFxQWSIDLmXicacdbJqAb8/Cpaxbrpvq3OKgNKlZNAFtPdRwk8HewWjyq61ovF0+wZzVmhBRJ2v0drFd89uUxyJPw1DZGpYlE21bj1ZTn0yuPaawy3ws6RpPTFU1D5AS05CAyJ/u7yqQDc+Cuusz/fC6u1YjPZUvCjQWUbj4sq9TpxtnP7SJoqKlBm8chCpbRcqUiIO5WiW1c+00A57c8IbPkpyHK/oW8qpolxK9Z+DwArQys9g2G0adc/18dMo76QZP17zweGtzlgyspRY=',
  });

  return { createW3NameAndEncryptKey, decryptKeyAndPublishW3Name: vi.fn() };
});

vi.mock('@fleek-platform/graphql/node_modules/w3name', () => {
  const parse = vi.fn().mockReturnValue({});

  const resolve = vi.fn().mockResolvedValue({ value: '/ipfs/QmRG4xcsmoZuXqKuPz3uVBgvo3GZ6k1kLZWhmvzuKtDr9s' });

  return { parse, resolve };
});

describe('[Node.js] IpnsClient', async () => {
  const { it } = mockDatabasesAndGraphqlWithNodeSdkForEachTest({ mockIpfs: false });

  it('should publish IPNS name', async (context) => {
    const response = await context.sdks.josh.ipns().publishSignedName({
      input:
        'CjQvaXBmcy9RbVBxckVISlRleDJDUGJxTlVMQ21iU0ZKVDNib0J3QUFmTWI1VWp2WHRLakVlEkB/s3F4iHVMyA9LOFizt5N4PHiI2APD15wsMa1RXGwmugThVpUjTw+5HHwFt16TI/8AKk/1p8+26hylxMxd3wAIGAAiHjIwMjMtMDgtMDVUMDk6NDk6MjguNDk5MDAwMDAwWigNMODyh77rhc0FQkCdgM1u1AAUsdf4pE7/kNYjl438/g6Ja48Tr2evFSRc6YSMgljaKX8PpQC0JDlZqF2jiKdHRUOaxLHArPo9MW0PSosBpWNUVEwbAAs0LrfB+WBlVmFsdWVYNC9pcGZzL1FtUHFyRUhKVGV4MkNQYnFOVUxDbWJTRkpUM2JvQndBQWZNYjVVanZYdEtqRWVoU2VxdWVuY2UNaFZhbGlkaXR5WB4yMDIzLTA4LTA1VDA5OjQ5OjI4LjQ5OTAwMDAwMFpsVmFsaWRpdHlUeXBlAA==',
      key: 'k51qzi5uqu5djd7wik4gj3evcbnx2okerdrh0swusu07mu2ak1v1r3y70e7k8o',
    });

    expect(response).toMatchInlineSnapshot('"k51qzi5uqu5dgsc1bvsuk1x84bptdvp8cupbnnbqxpxzd629gadpci3kpcm311"');
  });

  it('should get resolved IPNS name', async (context) => {
    const response = await context.sdks.josh.ipns().resolveName({ name: 'k51qzi5uqu5dh1uzd6wy6vak4ms3dijlzigfblbakzgk3ujaokqu4hj37owy7z' });

    expect(response).toMatchInlineSnapshot('"/ipfs/QmRG4xcsmoZuXqKuPz3uVBgvo3GZ6k1kLZWhmvzuKtDr9s"');
  });

  it('should publish IPNS record', async (context) => {
    const response = await context.sdks.josh
      .ipns()
      .publishRecord({ id: seeds.ipns.ipnsRecord.electronicCoEshop.id, hash: 'QmRG4xcsmoZuXqKuPz3uVBgvo3GZ6k1kLZWhmvzuKtDr9s' });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "ensRecords": Object {
          "data": Array [
            Object {
              "id": "8d3ad502-ec4d-489e-858e-d112656f3511",
            },
            Object {
              "id": "clm0mhccs000108ma34jn6ed3",
            },
          ],
        },
        "hash": "QmRG4xcsmoZuXqKuPz3uVBgvo3GZ6k1kLZWhmvzuKtDr9s",
        "id": "clgkj995t000108med7gb2w4v",
        "name": "k51qzi5uqu5dhrupvn0ru1c6el43rhimh95cuiwqy0ofo8bgomvq296b49v9r7",
      }
    `);
  });

  it('should create IPNS record', async (context) => {
    const response = await context.sdks.josh.ipns().createRecord();

    expect(response).toMatchInlineSnapshot(
      { id: expect.any(String) },
      `
      Object {
        "ensRecords": Object {
          "data": Array [],
        },
        "hash": null,
        "id": Any<String>,
        "name": "test-name",
      }
    `
    );
  });

  it('should create IPNS record for site', async (context) => {
    const response = await context.sdks.josh.ipns().createRecordForSite({ siteId: seeds.sites.site.electronicCoEshop.id });

    expect(response).toMatchInlineSnapshot(
      { id: expect.any(String) },
      `
      Object {
        "ensRecords": Object {
          "data": Array [],
        },
        "hash": "QmRoDVTGN563GNv6sXnXPhgdMC7qWyAopU4CuLWF1y7MG3",
        "id": Any<String>,
        "name": "test-name",
      }
    `
    );
  });

  it('should delete IPNS record', async (context) => {
    const response = await context.sdks.josh.ipns().deleteRecord({ id: seeds.ipns.ipnsRecord.electronicCoEshop.id });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "ensRecords": Object {
          "data": Array [],
        },
        "hash": "QmcvfRw5WDutRzvRNq2matcJWW2nKWFGDbqxaaTxnWksME",
        "id": "clgkj995t000108med7gb2w4v",
        "name": "k51qzi5uqu5dhrupvn0ru1c6el43rhimh95cuiwqy0ofo8bgomvq296b49v9r7",
      }
    `);
  });

  it('should list IPNS records', async (context) => {
    const response = await context.sdks.josh.ipns().listRecords();

    expect(response).toMatchInlineSnapshot(`
      Array [
        Object {
          "ensRecords": Object {
            "data": Array [
              Object {
                "id": "8d3ad502-ec4d-489e-858e-d112656f3511",
              },
              Object {
                "id": "clm0mhccs000108ma34jn6ed3",
              },
            ],
          },
          "hash": "QmcvfRw5WDutRzvRNq2matcJWW2nKWFGDbqxaaTxnWksME",
          "id": "clgkj995t000108med7gb2w4v",
          "name": "k51qzi5uqu5dhrupvn0ru1c6el43rhimh95cuiwqy0ofo8bgomvq296b49v9r7",
        },
        Object {
          "ensRecords": Object {
            "data": Array [
              Object {
                "id": "40767ba9-eb85-439b-9369-489459a9376b",
              },
            ],
          },
          "hash": "QmX7WyiLtbvmfbUzN2eJuvmDuGZSDjavuauwaJL4bFC5SJ",
          "id": "clgkj9ipf000208me9yzre1cn",
          "name": "k51qzi5uqu5dh2c8ec00yowiapopchxdvnwh6iy2xoxc51inldruqh4yvzgez5",
        },
        Object {
          "ensRecords": Object {
            "data": Array [
              Object {
                "id": "af470cc1-08d8-4d39-be6f-b0eebc0a6480",
              },
            ],
          },
          "hash": "QmW73w6jvat7zDpFkYHft8eB88LiU6fPyV9LUX9et7XRUy",
          "id": "clgkj9pfa000308meh73d8nff",
          "name": "k51qzi5uqu5dipwqop5kj5na30qlwqbyyn54g8y3jcm3sdc02t9tjlec2a46ci",
        },
      ]
    `);
  });

  it('should get IPNS record by name', async (context) => {
    const response = await context.sdks.josh.ipns().getRecord({ name: seeds.ipns.ipnsRecord.electronicCoEshop.name });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "ensRecords": Object {
          "data": Array [
            Object {
              "id": "8d3ad502-ec4d-489e-858e-d112656f3511",
            },
            Object {
              "id": "clm0mhccs000108ma34jn6ed3",
            },
          ],
        },
        "hash": "QmcvfRw5WDutRzvRNq2matcJWW2nKWFGDbqxaaTxnWksME",
        "id": "clgkj995t000108med7gb2w4v",
        "name": "k51qzi5uqu5dhrupvn0ru1c6el43rhimh95cuiwqy0ofo8bgomvq296b49v9r7",
      }
    `);
  });
});

describe('[Chromium] IpnsClient', async () => {
  const { it } = mockDatabasesAndGraphqlWithBrowserSdkForEachTest({ mockIpfs: false });

  it('should publish IPNS name', async (context) => {
    const response = await context.sdks.josh({
      callback: () =>
        window.sdk.ipns().publishSignedName({
          input:
            'CjQvaXBmcy9RbVBxckVISlRleDJDUGJxTlVMQ21iU0ZKVDNib0J3QUFmTWI1VWp2WHRLakVlEkB/s3F4iHVMyA9LOFizt5N4PHiI2APD15wsMa1RXGwmugThVpUjTw+5HHwFt16TI/8AKk/1p8+26hylxMxd3wAIGAAiHjIwMjMtMDgtMDVUMDk6NDk6MjguNDk5MDAwMDAwWigNMODyh77rhc0FQkCdgM1u1AAUsdf4pE7/kNYjl438/g6Ja48Tr2evFSRc6YSMgljaKX8PpQC0JDlZqF2jiKdHRUOaxLHArPo9MW0PSosBpWNUVEwbAAs0LrfB+WBlVmFsdWVYNC9pcGZzL1FtUHFyRUhKVGV4MkNQYnFOVUxDbWJTRkpUM2JvQndBQWZNYjVVanZYdEtqRWVoU2VxdWVuY2UNaFZhbGlkaXR5WB4yMDIzLTA4LTA1VDA5OjQ5OjI4LjQ5OTAwMDAwMFpsVmFsaWRpdHlUeXBlAA==',
          key: 'k51qzi5uqu5djd7wik4gj3evcbnx2okerdrh0swusu07mu2ak1v1r3y70e7k8o',
        }),
    });

    expect(response).toMatchInlineSnapshot('"k51qzi5uqu5dgsc1bvsuk1x84bptdvp8cupbnnbqxpxzd629gadpci3kpcm311"');
  });

  it('should get resolved IPNS name', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.ipns().resolveName({ name: 'k51qzi5uqu5dh1uzd6wy6vak4ms3dijlzigfblbakzgk3ujaokqu4hj37owy7z' }),
    });

    expect(response).toMatchInlineSnapshot('"/ipfs/QmRG4xcsmoZuXqKuPz3uVBgvo3GZ6k1kLZWhmvzuKtDr9s"');
  });

  it('should publish IPNS record', async (context) => {
    const response = await context.sdks.josh({
      callback: () =>
        window.sdk
          .ipns()
          .publishRecord({ id: seeds.ipns.ipnsRecord.electronicCoEshop.id, hash: 'QmRG4xcsmoZuXqKuPz3uVBgvo3GZ6k1kLZWhmvzuKtDr9s' }),
    });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "ensRecords": Object {
          "data": Array [
            Object {
              "id": "8d3ad502-ec4d-489e-858e-d112656f3511",
            },
            Object {
              "id": "clm0mhccs000108ma34jn6ed3",
            },
          ],
        },
        "hash": "QmRG4xcsmoZuXqKuPz3uVBgvo3GZ6k1kLZWhmvzuKtDr9s",
        "id": "clgkj995t000108med7gb2w4v",
        "name": "k51qzi5uqu5dhrupvn0ru1c6el43rhimh95cuiwqy0ofo8bgomvq296b49v9r7",
      }
    `);
  });

  it('should create IPNS record', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.ipns().createRecord(),
    });

    expect(response).toMatchInlineSnapshot(
      { id: expect.any(String) },
      `
      Object {
        "ensRecords": Object {
          "data": Array [],
        },
        "hash": null,
        "id": Any<String>,
        "name": "test-name",
      }
    `
    );
  });

  it('should create IPNS record for site', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.ipns().createRecordForSite({ siteId: window.seeds.sites.site.electronicCoEshop.id }),
    });

    expect(response).toMatchInlineSnapshot(
      { id: expect.any(String) },
      `
      Object {
        "ensRecords": Object {
          "data": Array [],
        },
        "hash": "QmRoDVTGN563GNv6sXnXPhgdMC7qWyAopU4CuLWF1y7MG3",
        "id": Any<String>,
        "name": "test-name",
      }
    `
    );
  });

  it('should delete IPNS record', async (context) => {
    const response = await context.sdks.josh({
      callback: () =>
        window.sdk.ipns().deleteRecord({
          id: window.seeds.ipns.ipnsRecord.electronicCoEshop.id,
        }),
    });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "ensRecords": Object {
          "data": Array [],
        },
        "hash": "QmcvfRw5WDutRzvRNq2matcJWW2nKWFGDbqxaaTxnWksME",
        "id": "clgkj995t000108med7gb2w4v",
        "name": "k51qzi5uqu5dhrupvn0ru1c6el43rhimh95cuiwqy0ofo8bgomvq296b49v9r7",
      }
    `);
  });

  it('should list IPNS records', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.ipns().listRecords(),
    });

    expect(response).toMatchInlineSnapshot(`
      Array [
        Object {
          "ensRecords": Object {
            "data": Array [
              Object {
                "id": "8d3ad502-ec4d-489e-858e-d112656f3511",
              },
              Object {
                "id": "clm0mhccs000108ma34jn6ed3",
              },
            ],
          },
          "hash": "QmcvfRw5WDutRzvRNq2matcJWW2nKWFGDbqxaaTxnWksME",
          "id": "clgkj995t000108med7gb2w4v",
          "name": "k51qzi5uqu5dhrupvn0ru1c6el43rhimh95cuiwqy0ofo8bgomvq296b49v9r7",
        },
        Object {
          "ensRecords": Object {
            "data": Array [
              Object {
                "id": "40767ba9-eb85-439b-9369-489459a9376b",
              },
            ],
          },
          "hash": "QmX7WyiLtbvmfbUzN2eJuvmDuGZSDjavuauwaJL4bFC5SJ",
          "id": "clgkj9ipf000208me9yzre1cn",
          "name": "k51qzi5uqu5dh2c8ec00yowiapopchxdvnwh6iy2xoxc51inldruqh4yvzgez5",
        },
        Object {
          "ensRecords": Object {
            "data": Array [
              Object {
                "id": "af470cc1-08d8-4d39-be6f-b0eebc0a6480",
              },
            ],
          },
          "hash": "QmW73w6jvat7zDpFkYHft8eB88LiU6fPyV9LUX9et7XRUy",
          "id": "clgkj9pfa000308meh73d8nff",
          "name": "k51qzi5uqu5dipwqop5kj5na30qlwqbyyn54g8y3jcm3sdc02t9tjlec2a46ci",
        },
      ]
    `);
  });

  it('should get IPNS record by name', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.ipns().getRecord({ name: window.seeds.ipns.ipnsRecord.electronicCoEshop.name }),
    });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "ensRecords": Object {
          "data": Array [
            Object {
              "id": "8d3ad502-ec4d-489e-858e-d112656f3511",
            },
            Object {
              "id": "clm0mhccs000108ma34jn6ed3",
            },
          ],
        },
        "hash": "QmcvfRw5WDutRzvRNq2matcJWW2nKWFGDbqxaaTxnWksME",
        "id": "clgkj995t000108med7gb2w4v",
        "name": "k51qzi5uqu5dhrupvn0ru1c6el43rhimh95cuiwqy0ofo8bgomvq296b49v9r7",
      }
    `);
  });
});
