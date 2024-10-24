// Determines the platform at runtime
// eslint-disable-next-line no-process-env
export const isNode = typeof window === 'undefined' || process?.env?.IS_NODE;
