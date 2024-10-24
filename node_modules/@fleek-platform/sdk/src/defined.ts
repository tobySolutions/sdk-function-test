/* eslint-disable no-process-env */

export type Defined = {
  SDK__AUTH_APPS_URL?: string;
  SDK__IPFS__STORAGE_API_URL?: string;
  SDK__GRAPHQL_API_URL?: string;
  SDK__UPLOAD_PROXY_API_URL?: string;
};

import { PrepareEsbuildDefineArgs } from '@fleek-platform/env-guards';

// These ENVs will be hardcoded during build. Do not use parseEnv function from @fleek-platform/env-guards
// IMPORTANT: Use only public values, no token secrets and stuff like that
// IMPORTANT: Those values will be visible in public source code pushed to NPM
export const defined = {
  SDK__AUTH_APPS_URL: process.env.SDK__AUTH_APPS_URL as string,
  SDK__IPFS__STORAGE_API_URL: process.env.SDK__IPFS__STORAGE_API_URL as string,
  SDK__GRAPHQL_API_URL: process.env.SDK__GRAPHQL_API_URL as string,
  SDK__UPLOAD_PROXY_API_URL: process.env.SDK__UPLOAD_PROXY_API_URL as string,
} satisfies PrepareEsbuildDefineArgs;

// The variables are parsed at build time, in order to ensure
// that the override is intentional we should stick
// with the application prefix to avoid unexpected behaviour for
// polluted environments that might have similar env vars
// e.g. FLEEK__UI_APP_URL
const override_env_var_prefix = '';

export const getDefined = (key: keyof typeof defined) => process?.env?.[`${override_env_var_prefix}${key}`] || defined[key];
