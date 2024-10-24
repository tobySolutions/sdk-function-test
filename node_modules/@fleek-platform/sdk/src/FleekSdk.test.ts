import { describe, expect } from 'vitest';

import { mockDatabasesAndGraphqlWithBrowserSdkForEachTest } from './testTools/mockDatabasesAndGraphqlWithBrowserSdkForEachTest';
import { mockDatabasesAndGraphqlWithNodeSdkForEachTest } from './testTools/mockDatabasesAndGraphqlWithNodeSdkForEachTest';

describe('[Node.js] getVersion', () => {
  const { it } = mockDatabasesAndGraphqlWithNodeSdkForEachTest({ mockIpfs: false });

  it('should get current version info', async (context) => {
    const response = await context.sdks.josh.getVersion();

    expect(response).toMatchInlineSnapshot(`
      Object {
        "version": Object {
          "__typename": "Version",
          "commitHash": "0fabad88415cedb2c3c21548afa14a949a088954",
        },
      }
    `);
  });
});

describe('[Chromium] getVersion', () => {
  const { it } = mockDatabasesAndGraphqlWithBrowserSdkForEachTest({ mockIpfs: false });

  it('should get current version info', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.getVersion(),
    });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "version": Object {
          "__typename": "Version",
          "commitHash": "0fabad88415cedb2c3c21548afa14a949a088954",
        },
      }
    `);
  });
});
