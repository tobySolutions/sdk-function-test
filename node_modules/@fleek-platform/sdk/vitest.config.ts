import { vitestConfig } from '@fleek-platform/tester';
import { merge } from 'lodash';
import { defineConfig, UserConfig } from 'vitest/config';

export default defineConfig(
  merge(vitestConfig, {
    test: {
      setupFiles: ['vitest.setup.ts'],
      globalSetup: ['vitest.globalSetup.ts'],
      server: {
        deps: {
          // Because of https://github.com/vitest-dev/vitest/issues/2806
          inline: [/^(?!.*vitest).*$/],
        },
      },
    },
    resolve: {
      // Because vitest cannot mock modules if they are called via `require()`
      mainFields: ['module'],
    },
  } satisfies UserConfig)
);
