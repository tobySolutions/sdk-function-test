import { SdkRequiredNodeRuntimeError } from '@fleek-platform/errors';

import { isNode } from '../utils/node';

export const requireNodeEnv = () => {
  if (isNode) {
    return;
  }

  throw new SdkRequiredNodeRuntimeError();
};
