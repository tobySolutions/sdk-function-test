import { describe, expect, vi } from 'vitest';

import { mockDatabasesAndGraphqlWithBrowserSdkForEachTest } from '../testTools/mockDatabasesAndGraphqlWithBrowserSdkForEachTest';
import { mockDatabasesAndGraphqlWithNodeSdkForEachTest } from '../testTools/mockDatabasesAndGraphqlWithNodeSdkForEachTest';

vi.mock('ipfs-http-client', async (originalImport) => {
  const original = await originalImport<typeof import('ipfs-http-client')>();

  return {
    ...original,
    globSource: vi.fn().mockReturnValue([
      { path: 'src/first.txt', content: Buffer.from('This is first file') },
      { path: 'src/second.txt', content: Buffer.from('This is second file') },
    ]),
  };
});

describe('[Node.js] IpfsClient', () => {
  const { it } = mockDatabasesAndGraphqlWithNodeSdkForEachTest({ mockIpfs: true });

  it('should add file to ipfs', async (context) => {
    const response = await context.sdks.josh.ipfs().add({ path: 'src/file.txt', content: Buffer.from('This is test file') });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "cid": Object {
          "code": 112,
          "hash": Uint8Array [
            18,
            32,
            17,
            164,
            244,
            100,
            62,
            112,
            16,
            210,
            70,
            89,
            250,
            243,
            250,
            100,
            175,
            137,
            31,
            201,
            214,
            164,
            207,
            196,
            37,
            52,
            0,
            254,
            110,
            90,
            233,
            39,
            26,
            242,
          ],
          "version": 0,
        },
        "path": "src/file.txt",
        "size": -1,
      }
    `);

    const [latestContent] = await context.mockIpfsServer.getAddedContent();

    expect(latestContent.path).toEqual('src/file.txt');
    expect(latestContent.content?.toString()).toEqual('This is test file');
  });

  it('should add all files to ipfs', async (context) => {
    const response = await context.sdks.josh.ipfs().addAll([
      { path: 'src/first.txt', content: Buffer.from('This is first file') },
      { path: 'src/second.txt', content: Buffer.from('This is second file') },
    ]);

    expect(response).toMatchInlineSnapshot(`
      Array [
        Object {
          "cid": Object {
            "code": 112,
            "hash": Uint8Array [
              18,
              32,
              17,
              164,
              244,
              100,
              62,
              112,
              16,
              210,
              70,
              89,
              250,
              243,
              250,
              100,
              175,
              137,
              31,
              201,
              214,
              164,
              208,
              174,
              10,
              58,
              116,
              67,
              112,
              51,
              219,
              97,
              154,
              242,
            ],
            "version": 0,
          },
          "path": "src/first.txt",
          "size": -1,
        },
        Object {
          "cid": Object {
            "code": 112,
            "hash": Uint8Array [
              18,
              32,
              17,
              164,
              244,
              100,
              62,
              112,
              16,
              210,
              70,
              89,
              250,
              243,
              250,
              100,
              175,
              137,
              31,
              201,
              214,
              164,
              209,
              151,
              239,
              64,
              231,
              136,
              114,
              12,
              205,
              156,
              26,
              242,
            ],
            "version": 0,
          },
          "path": "src/second.txt",
          "size": -1,
        },
      ]
    `);

    const [firstContent, secondContent] = await context.mockIpfsServer.getAddedContent();

    expect(firstContent.path).toEqual('src/first.txt');
    expect(firstContent.content?.toString()).toEqual('This is first file');

    expect(secondContent.path).toEqual('src/second.txt');
    expect(secondContent.content?.toString()).toEqual('This is second file');
  });

  it('should add files by path', async (context) => {
    const response = await context.sdks.josh.ipfs().addFromPath('./src');

    expect(response).toMatchInlineSnapshot(`
      Array [
        Object {
          "cid": Object {
            "code": 112,
            "hash": Uint8Array [
              18,
              32,
              17,
              164,
              244,
              100,
              62,
              112,
              16,
              210,
              70,
              89,
              250,
              243,
              250,
              100,
              175,
              137,
              31,
              201,
              214,
              164,
              210,
              129,
              212,
              71,
              90,
              205,
              115,
              229,
              191,
              214,
              154,
              242,
            ],
            "version": 0,
          },
          "path": "src/first.txt",
          "size": -1,
        },
        Object {
          "cid": Object {
            "code": 112,
            "hash": Uint8Array [
              18,
              32,
              17,
              164,
              244,
              100,
              62,
              112,
              16,
              210,
              70,
              89,
              250,
              243,
              250,
              100,
              175,
              137,
              31,
              201,
              214,
              164,
              211,
              107,
              185,
              77,
              206,
              18,
              117,
              190,
              178,
              17,
              26,
              242,
            ],
            "version": 0,
          },
          "path": "src/second.txt",
          "size": -1,
        },
      ]
    `);

    const [firstContent, secondContent] = await context.mockIpfsServer.getAddedContent();

    expect(firstContent.path).toEqual('src/first.txt');
    expect(firstContent.content?.toString()).toEqual('This is first file');

    expect(secondContent.path).toEqual('src/second.txt');
    expect(secondContent.content?.toString()).toEqual('This is second file');
  });
});

describe('[Chromium] IpfsClient', () => {
  const { it } = mockDatabasesAndGraphqlWithBrowserSdkForEachTest({ mockIpfs: true });

  it('should add file to ipfs', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.ipfs().add({ path: 'src/file.txt', content: new window.TextEncoder().encode('This is test file').buffer }),
    });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "cid": Object {
          "bytes": Object {
            "0": 18,
            "1": 32,
            "10": 70,
            "11": 89,
            "12": 250,
            "13": 243,
            "14": 250,
            "15": 100,
            "16": 175,
            "17": 137,
            "18": 31,
            "19": 201,
            "2": 17,
            "20": 214,
            "21": 164,
            "22": 212,
            "23": 85,
            "24": 158,
            "25": 84,
            "26": 65,
            "27": 87,
            "28": 119,
            "29": 151,
            "3": 164,
            "30": 164,
            "31": 75,
            "32": 154,
            "33": 242,
            "4": 244,
            "5": 100,
            "6": 62,
            "7": 112,
            "8": 16,
            "9": 210,
          },
          "code": 112,
          "multihash": Object {
            "bytes": Object {
              "0": 18,
              "1": 32,
              "10": 70,
              "11": 89,
              "12": 250,
              "13": 243,
              "14": 250,
              "15": 100,
              "16": 175,
              "17": 137,
              "18": 31,
              "19": 201,
              "2": 17,
              "20": 214,
              "21": 164,
              "22": 212,
              "23": 85,
              "24": 158,
              "25": 84,
              "26": 65,
              "27": 87,
              "28": 119,
              "29": 151,
              "3": 164,
              "30": 164,
              "31": 75,
              "32": 154,
              "33": 242,
              "4": 244,
              "5": 100,
              "6": 62,
              "7": 112,
              "8": 16,
              "9": 210,
            },
            "code": 18,
            "digest": Object {
              "0": 17,
              "1": 164,
              "10": 250,
              "11": 243,
              "12": 250,
              "13": 100,
              "14": 175,
              "15": 137,
              "16": 31,
              "17": 201,
              "18": 214,
              "19": 164,
              "2": 244,
              "20": 212,
              "21": 85,
              "22": 158,
              "23": 84,
              "24": 65,
              "25": 87,
              "26": 119,
              "27": 151,
              "28": 164,
              "29": 75,
              "3": 100,
              "30": 154,
              "31": 242,
              "4": 62,
              "5": 112,
              "6": 16,
              "7": 210,
              "8": 70,
              "9": 89,
            },
            "size": 32,
          },
          "version": 0,
        },
        "path": "src/file.txt",
        "size": -1,
      }
    `);

    const [latestContent] = await context.mockIpfsServer.getAddedContent();

    expect(latestContent.path).toEqual('src/file.txt');
    expect(latestContent.content?.toString()).toEqual('This is test file');
  });

  it('should add all files to ipfs', async (context) => {
    const response = await context.sdks.josh({
      callback: () =>
        window.sdk.ipfs().addAll([
          { path: 'src/first.txt', content: new window.TextEncoder().encode('This is first file').buffer },
          { path: 'src/second.txt', content: new window.TextEncoder().encode('This is second file').buffer },
        ]),
    });

    expect(response).toMatchInlineSnapshot(`
      Array [
        Object {
          "cid": Object {
            "bytes": Object {
              "0": 18,
              "1": 32,
              "10": 70,
              "11": 89,
              "12": 250,
              "13": 243,
              "14": 250,
              "15": 100,
              "16": 175,
              "17": 137,
              "18": 31,
              "19": 201,
              "2": 17,
              "20": 214,
              "21": 164,
              "22": 213,
              "23": 63,
              "24": 131,
              "25": 90,
              "26": 180,
              "27": 156,
              "28": 121,
              "29": 112,
              "3": 164,
              "30": 150,
              "31": 134,
              "32": 26,
              "33": 242,
              "4": 244,
              "5": 100,
              "6": 62,
              "7": 112,
              "8": 16,
              "9": 210,
            },
            "code": 112,
            "multihash": Object {
              "bytes": Object {
                "0": 18,
                "1": 32,
                "10": 70,
                "11": 89,
                "12": 250,
                "13": 243,
                "14": 250,
                "15": 100,
                "16": 175,
                "17": 137,
                "18": 31,
                "19": 201,
                "2": 17,
                "20": 214,
                "21": 164,
                "22": 213,
                "23": 63,
                "24": 131,
                "25": 90,
                "26": 180,
                "27": 156,
                "28": 121,
                "29": 112,
                "3": 164,
                "30": 150,
                "31": 134,
                "32": 26,
                "33": 242,
                "4": 244,
                "5": 100,
                "6": 62,
                "7": 112,
                "8": 16,
                "9": 210,
              },
              "code": 18,
              "digest": Object {
                "0": 17,
                "1": 164,
                "10": 250,
                "11": 243,
                "12": 250,
                "13": 100,
                "14": 175,
                "15": 137,
                "16": 31,
                "17": 201,
                "18": 214,
                "19": 164,
                "2": 244,
                "20": 213,
                "21": 63,
                "22": 131,
                "23": 90,
                "24": 180,
                "25": 156,
                "26": 121,
                "27": 112,
                "28": 150,
                "29": 134,
                "3": 100,
                "30": 26,
                "31": 242,
                "4": 62,
                "5": 112,
                "6": 16,
                "7": 210,
                "8": 70,
                "9": 89,
              },
              "size": 32,
            },
            "version": 0,
          },
          "path": "src/first.txt",
          "size": -1,
        },
        Object {
          "cid": Object {
            "bytes": Object {
              "0": 18,
              "1": 32,
              "10": 70,
              "11": 89,
              "12": 250,
              "13": 243,
              "14": 250,
              "15": 100,
              "16": 175,
              "17": 137,
              "18": 31,
              "19": 201,
              "2": 17,
              "20": 214,
              "21": 164,
              "22": 214,
              "23": 41,
              "24": 104,
              "25": 97,
              "26": 39,
              "27": 225,
              "28": 123,
              "29": 73,
              "3": 164,
              "30": 136,
              "31": 192,
              "32": 154,
              "33": 242,
              "4": 244,
              "5": 100,
              "6": 62,
              "7": 112,
              "8": 16,
              "9": 210,
            },
            "code": 112,
            "multihash": Object {
              "bytes": Object {
                "0": 18,
                "1": 32,
                "10": 70,
                "11": 89,
                "12": 250,
                "13": 243,
                "14": 250,
                "15": 100,
                "16": 175,
                "17": 137,
                "18": 31,
                "19": 201,
                "2": 17,
                "20": 214,
                "21": 164,
                "22": 214,
                "23": 41,
                "24": 104,
                "25": 97,
                "26": 39,
                "27": 225,
                "28": 123,
                "29": 73,
                "3": 164,
                "30": 136,
                "31": 192,
                "32": 154,
                "33": 242,
                "4": 244,
                "5": 100,
                "6": 62,
                "7": 112,
                "8": 16,
                "9": 210,
              },
              "code": 18,
              "digest": Object {
                "0": 17,
                "1": 164,
                "10": 250,
                "11": 243,
                "12": 250,
                "13": 100,
                "14": 175,
                "15": 137,
                "16": 31,
                "17": 201,
                "18": 214,
                "19": 164,
                "2": 244,
                "20": 214,
                "21": 41,
                "22": 104,
                "23": 97,
                "24": 39,
                "25": 225,
                "26": 123,
                "27": 73,
                "28": 136,
                "29": 192,
                "3": 100,
                "30": 154,
                "31": 242,
                "4": 62,
                "5": 112,
                "6": 16,
                "7": 210,
                "8": 70,
                "9": 89,
              },
              "size": 32,
            },
            "version": 0,
          },
          "path": "src/second.txt",
          "size": -1,
        },
      ]
    `);
    const [firstContent, secondContent] = await context.mockIpfsServer.getAddedContent();

    expect(firstContent.path).toEqual('src/first.txt');
    expect(firstContent.content?.toString()).toEqual('This is first file');

    expect(secondContent.path).toEqual('src/second.txt');
    expect(secondContent.content?.toString()).toEqual('This is second file');
  });

  it('should add files by path', async (context) => {
    const response = await context.sdks.josh({
      callback: () =>
        window.sdk
          .ipfs()
          .addFromPath('./src')
          .catch((error) => error.toString()),
    });

    expect(response).toMatchInlineSnapshot('"The functionality of this SDK feature is dependent on the Node.js runtime."');
  });
});
