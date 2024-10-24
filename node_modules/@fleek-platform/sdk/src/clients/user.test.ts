import { seeds } from '@fleek-platform/tester';
import { describe, expect } from 'vitest';

import { mockDatabasesAndGraphqlWithBrowserSdkForEachTest } from '../testTools/mockDatabasesAndGraphqlWithBrowserSdkForEachTest';
import { mockDatabasesAndGraphqlWithNodeSdkForEachTest } from '../testTools/mockDatabasesAndGraphqlWithNodeSdkForEachTest';

describe('[Node.js] UserClient', () => {
  const { it } = mockDatabasesAndGraphqlWithNodeSdkForEachTest({ mockIpfs: false });

  it('should list personal access tokens', async (context) => {
    const response = await context.sdks.josh.user().listPersonalAccessTokens();

    expect(response).toMatchInlineSnapshot(`
      Array [
        Object {
          "createdAt": "2023-03-21T08:05:13.641Z",
          "id": "clgkiwxl9000e08meh1z64f5l",
          "maskedToken": "pat_*******SuB",
          "name": "mobile",
        },
      ]
    `);
  });

  it('should delete personal access token', async (context) => {
    const response = await context.sdks.josh.user().deletePersonalAccessToken({ id: seeds.auth.personalAccessToken.joshOwnedToken.id });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "__typename": "PersonalAccessToken",
        "createdAt": "2023-03-21T08:05:13.641Z",
        "id": "clgkiwxl9000e08meh1z64f5l",
        "maskedToken": "pat_*******SuB",
        "name": "mobile",
        "updatedAt": "2023-03-21T08:05:13.641Z",
      }
    `);
  });
});

describe('[Chromium] UserClient', () => {
  const { it } = mockDatabasesAndGraphqlWithBrowserSdkForEachTest({ mockIpfs: false });

  it('should list personal access tokens', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.user().listPersonalAccessTokens(),
    });

    expect(response).toMatchInlineSnapshot(`
      Array [
        Object {
          "createdAt": "2023-03-21T08:05:13.641Z",
          "id": "clgkiwxl9000e08meh1z64f5l",
          "maskedToken": "pat_*******SuB",
          "name": "mobile",
        },
      ]
    `);
  });

  it('should delete personal access token', async (context) => {
    const response = await context.sdks.josh({
      callback: () => window.sdk.user().deletePersonalAccessToken({ id: window.seeds.auth.personalAccessToken.joshOwnedToken.id }),
    });

    expect(response).toMatchInlineSnapshot(`
      Object {
        "__typename": "PersonalAccessToken",
        "createdAt": "2023-03-21T08:05:13.641Z",
        "id": "clgkiwxl9000e08meh1z64f5l",
        "maskedToken": "pat_*******SuB",
        "name": "mobile",
        "updatedAt": "2023-03-21T08:05:13.641Z",
      }
    `);
  });
});
