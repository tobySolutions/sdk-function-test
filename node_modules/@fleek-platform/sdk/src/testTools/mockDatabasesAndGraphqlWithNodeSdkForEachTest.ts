import { createYogaInstance } from '@fleek-platform/graphql/src/server';
import { mockDatabasesAndGraphqlForEachTest, seeds } from '@fleek-platform/tester';
import * as vitest from 'vitest';

import { FleekSdk, StaticAccessTokenService } from '../index';
import { inferAndCombineItContext } from './inferAndCombineItContext';
import { secrets } from './secrets';

type MockDatabasesAndGraphqlWithNodeSdkForEachTestArgs<T extends boolean> = {
  mockIpfs: T;
};

export const mockDatabasesAndGraphqlWithNodeSdkForEachTest = <T extends boolean>({
  mockIpfs,
}: MockDatabasesAndGraphqlWithNodeSdkForEachTestArgs<T>) => {
  const yoga = createYogaInstance({});

  const { it } = mockDatabasesAndGraphqlForEachTest({
    vitest,
    yoga,
    mockIpfs,
    sdkFactory: ({ url, accessToken, ipfsStorageApiUrl }) => {
      const accessTokenService = new StaticAccessTokenService({ accessToken });

      return new FleekSdk({ graphqlServiceApiUrl: url, accessTokenService, ipfsStorageApiUrl });
    },
    sdkConfigs: {
      josh: {
        auth: { userId: seeds.auth.user.josh.id, secret: secrets.SECRET_JWT_IDENTITY, projectId: seeds.auth.project.electronicCo.id },
      },
    },
  });

  return { it: inferAndCombineItContext(it) };
};
