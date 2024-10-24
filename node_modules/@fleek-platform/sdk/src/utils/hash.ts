import { SdkRequiredNodeRuntimeError } from '@fleek-platform/errors';
import { blake3 } from '@noble/hashes/blake3';

import { isNode } from './node';

type CreateFileHashArgs = {
  file: Buffer | string;
  algorithm?: 'sha256' | 'sha512' | 'blake3';
};

export const createFileHash = async (opts: CreateFileHashArgs): Promise<string> => {
  if (!isNode) {
    throw new SdkRequiredNodeRuntimeError();
  }

  const { createHash } = await import('crypto');

  const { file, algorithm } = opts;

  switch (algorithm) {
    case 'blake3':
      return `${algorithm}-${Buffer.from(blake3(file)).toString('base64')}`;
    case 'sha256':
    case 'sha512':
      return `${algorithm}-${createHash(algorithm).update(file).digest('base64')}`;
    default:
      return `sha256-${createHash('sha256').update(file).digest('base64')}`;
  }
};
