import { parseEnvs } from '@fleek-platform/env-guards';

export const secrets = parseEnvs([
  'SECRET_JWT_IDENTITY', //
]);
