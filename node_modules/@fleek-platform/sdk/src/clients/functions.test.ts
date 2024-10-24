import { seeds } from '@fleek-platform/tester';
import { describe, expect, vi } from 'vitest';

import { mockDatabasesAndGraphqlWithBrowserSdkForEachTest } from '../testTools/mockDatabasesAndGraphqlWithBrowserSdkForEachTest';
import { mockDatabasesAndGraphqlWithNodeSdkForEachTest } from '../testTools/mockDatabasesAndGraphqlWithNodeSdkForEachTest';

vi.mock('@fleek-platform/graphql/node_modules/@fleek-platform/utils-text', () => ({
  generateSlug: vi.fn().mockReturnValue('crooked-bland-jackal'),
}));

describe('[Node.js] FunctionsClient', () => {
  const { it } = mockDatabasesAndGraphqlWithNodeSdkForEachTest({ mockIpfs: false });

  it('should get function by its name', async (context) => {
    const response = await context.sdks.josh.functions().get({ name: seeds.fleekFunctions.fleekFunction.electronicCoEshop.id });

    expect(response).toMatchInlineSnapshot();
  });

  it('list functions', async (context) => {
    const response = await context.sdks.josh.functions().list();

    expect(response).toMatchInlineSnapshot();
  });

  it('should create function', async (context) => {
    const response = await context.sdks.josh.functions().create({
      name: 'new-function',
    });

    expect(response).toMatchInlineSnapshot({ id: expect.any(String) });
  });

  it('should delete function', async (context) => {
    const response = await context.sdks.josh.functions().delete({
      id: seeds.fleekFunctions.fleekFunction.electronicCoVideos.id,
    });

    expect(response).toMatchInlineSnapshot();
  });

  describe('[Chromium] FunctionsClient', () => {
    const { it } = mockDatabasesAndGraphqlWithBrowserSdkForEachTest({ mockIpfs: false });

    it('should get function by its id', async (context) => {
      const response = await context.sdks.josh({
        callback: () => window.sdk.functions().get({ name: window.seeds.fleekFunctions.fleekFunction.electronicCoEshop.name }),
      });

      expect(response).toMatchInlineSnapshot();
    });

    it('should list functions', async (context) => {
      const response = await context.sdks.josh({
        callback: () => window.sdk.functions().list(),
      });

      expect(response).toMatchInlineSnapshot();
    });

    it('should create function', async (context) => {
      const response = await context.sdks.josh({
        callback: () => window.sdk.functions().create({ name: 'new-function' }),
      });

      expect(response).toMatchInlineSnapshot({ id: expect.any(String) });
    });

    it('should delete function', async (context) => {
      const response = await context.sdks.josh({
        callback: () => window.sdk.functions().delete({ id: window.seeds.fleekFunctions.fleekFunction.electronicCoVideos.id }),
      });

      expect(response).toMatchInlineSnapshot();
    });
  });
});
