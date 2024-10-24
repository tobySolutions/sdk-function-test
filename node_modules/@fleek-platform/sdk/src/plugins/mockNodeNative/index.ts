import { Plugin } from 'esbuild';
import { existsSync } from 'fs';
import { builtinModules } from 'module';
import { dirname, join } from 'path';

type NodeNativeModules = typeof builtinModules;
type ShouldBrowserify = Record<NodeNativeModules[number], boolean>;

// Set to true the nativeNodeModues
// that should be browserified
// A key value pair declaring which builtinModules
// that should be browserified, e.g. `{ 'buffer': true }`
const shouldBrowserify: ShouldBrowserify = {};

export const mockNodeNative: Plugin = {
  name: 'mockNodeNative',
  setup: async (build) => {
		const jspmFsLibsPath = require.resolve(`@jspm/core/nodelibs/fs`);

		builtinModules.forEach((name) => {
			build.onResolve({ filter: new RegExp(`^${name}$`) }, () => {
			  let path: string = require.resolve('../../utils/empty');

				if (name in shouldBrowserify) {
					const polyfill = `${name}.js`;
					path = join(dirname(jspmFsLibsPath), '../browser', polyfill);

					// eslint-disable-next-line fleek-custom/no-default-error
					if (!existsSync(path)) {throw Error(`Oops! The path ${path} doesn't exist!`);}
				}

				return {
				  path,
				};
			});
		});
  },
};
