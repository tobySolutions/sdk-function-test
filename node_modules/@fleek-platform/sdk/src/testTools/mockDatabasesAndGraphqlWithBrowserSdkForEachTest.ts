/* eslint-disable @typescript-eslint/no-explicit-any */
import { createYogaInstance } from '@fleek-platform/graphql/src/server';
import { mockBrowserEnvironmentForEachTest, mockDatabasesAndGraphqlForEachTest, seeds } from '@fleek-platform/tester';
import { Decimal } from 'decimal.js';
import { mapValues } from 'lodash';
import * as vitest from 'vitest';

import type { FleekSdk, StaticAccessTokenService } from '../index';
import { inferAndCombineItContext } from './inferAndCombineItContext';
import { secrets } from './secrets';

type RunInBrowserArgs<T> = { callback: () => Promise<T> };

declare global {
  // eslint-disable-next-line fleek-custom/no-interface
  interface Window {
    FleekSdk: typeof FleekSdk;
    StaticAccessTokenService: typeof StaticAccessTokenService;
    sdk: FleekSdk;
    seeds: typeof seeds;
    Decimal: typeof Decimal;
    mapValues: typeof mapValues;
  }
}

type MockDatabasesAndGraphqlWithBrowserSdkForEachTestArgs<T extends boolean> = {
  mockIpfs: T;
};

export const mockDatabasesAndGraphqlWithBrowserSdkForEachTest = <T extends boolean>({
  mockIpfs,
}: MockDatabasesAndGraphqlWithBrowserSdkForEachTestArgs<T>) => {
  const { it: itWithBrowser } = mockBrowserEnvironmentForEachTest({ vitest });

  const yoga = createYogaInstance({});

  const { it: itWithMockSdk } = mockDatabasesAndGraphqlForEachTest({
    originalIt: itWithBrowser,
    vitest,
    yoga,
    mockIpfs,
    sdkFactory: async ({ originalContext, url, accessToken, ipfsStorageApiUrl }) => {
      await originalContext.page.goto('http://localhost:8081');

      return async <T>({ callback }: RunInBrowserArgs<T>): Promise<T> => {
        await originalContext.page.evaluate(
          (pageContextArgs) => {
            const accessTokenService = new window.StaticAccessTokenService({ accessToken: pageContextArgs.accessToken });
            window.sdk = new window.FleekSdk({
              graphqlServiceApiUrl: pageContextArgs.url,
              accessTokenService,
              ipfsStorageApiUrl: pageContextArgs.ipfsStorageApiUrl,
            });

            type ParseSeedsArgs = Record<string, any>;

            const parseSeeds = (object: ParseSeedsArgs): Record<string, any> => {
              return window.mapValues(object, (value) => {
                if (!!value && Object.getPrototypeOf(value) === Object.prototype) {
                  return parseSeeds(value);
                }

                if (typeof value === 'string' && value.startsWith('__Decimal__')) {
                  return new window.Decimal(value.slice(11));
                }

                return value;
              });
            };

            window.seeds = parseSeeds(pageContextArgs.seeds) as typeof seeds;
          },
          { url, accessToken, seeds: serializeSeeds(seeds), ipfsStorageApiUrl }
        );

        return originalContext.page.evaluate(callback);
      };
    },
    sdkConfigs: {
      josh: {
        auth: { userId: seeds.auth.user.josh.id, secret: secrets.SECRET_JWT_IDENTITY, projectId: seeds.auth.project.electronicCo.id },
      },
    },
  });

  return { it: inferAndCombineItContext(itWithBrowser, itWithMockSdk) };
};

type SerializeSeedsArgs = Record<string, any>;

const serializeSeeds = (object: SerializeSeedsArgs): Record<string, any> => {
  return mapValues(object, (value) => {
    if (!!value && Object.getPrototypeOf(value) === Object.prototype) {
      return serializeSeeds(value);
    }

    if (Object.prototype.toString.call(value) === '[object Decimal]') {
      return `__Decimal__${value.toString()}`;
    }

    return value;
  });
};
