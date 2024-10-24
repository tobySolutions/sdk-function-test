import { Plugin } from 'esbuild';
import { promises as fs } from 'fs';
import { join as joinPath, parse as parsePath } from 'path';

const resolvePathOrReturnOrginal = (dir: string, path: string) => {
  try {
    return require.resolve(path);
  } catch (e) {}

  return joinPath(dir, path);
};

export const replaceDynamicImportPlugin: Plugin = {
  name: 'replaceDynamicImport',
  setup: (build) => {
    build.onResolve({ filter: /.*/ }, async (args) => {
      const { dir, name } = parsePath(resolvePathOrReturnOrginal(args.resolveDir, args.path));
      const pathWithoutExtension = joinPath(dir, name);

      const nodeCandidatePath = `${pathWithoutExtension}.node.js`;
      const browserCandidatePath = `${pathWithoutExtension}.browser.js`;

      if (args.importer.endsWith('node_modules/ipfs-utils/src/http.js') && args.path === './http/fetch') {
        console.log('>', JSON.stringify(args), resolvePathOrReturnOrginal(args.resolveDir, args.path));
      }

      if (
        build.initialOptions.platform === 'node' &&
        (await fs
          .access(nodeCandidatePath)
          .then(() => true)
          .catch(() => false))
      ) {
        console.log('Replacing for node:', JSON.stringify(args), nodeCandidatePath, '\n\n');

        return { path: nodeCandidatePath };
      }

      if (
        build.initialOptions.platform === 'browser' &&
        (await fs
          .access(browserCandidatePath)
          .then(() => true)
          .catch(() => false))
      ) {
        console.log('Replacing for browser:', JSON.stringify(args), browserCandidatePath, '\n\n');

        return { path: browserCandidatePath };
      }

      return undefined;
    });

    // TODO: Remove onLoad hook once this module works with esbuild
    build.onLoad({ filter: /fr32-sha2-256-trunc254-padded-binary-tree-multihash/ }, async (_args) => {
      return { contents: `export {};` };
    });
  },
};
