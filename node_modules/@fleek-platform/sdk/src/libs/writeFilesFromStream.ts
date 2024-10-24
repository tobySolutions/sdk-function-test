import { SdkRequiredNodeRuntimeError,WriteFileFromStreamError } from '@fleek-platform/errors';
import type { ReadStream } from 'fs';

import { isNode } from '../utils/node';

export type WriteFilesArgs = {
  readStream: ReadStream;
  outputPath: string;
};

export const writeFilesFromStream = async (fileStreams: WriteFilesArgs[]) => {
  if (!isNode) {
    throw new SdkRequiredNodeRuntimeError();
  }

  try {
    const fs = await import('fs');
    const path = await import('path');
    const { pipeline }= await import('stream');
    const { promisify }= await import('util');
    const pipelineAsync = promisify(pipeline);

    await Promise.all(
      fileStreams.map(async ({ readStream, outputPath }) => {
        const dir = path.dirname(outputPath);
        await fs.promises.mkdir(dir, { recursive: true });

        const writeStream = fs.createWriteStream(outputPath);

        return pipelineAsync(readStream, writeStream);
      })
    );
  } catch (error) {
    throw new WriteFileFromStreamError();
  }
};
