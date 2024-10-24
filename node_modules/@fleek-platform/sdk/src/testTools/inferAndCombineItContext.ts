import * as vitest from 'vitest';

/** This function must be copied into each tested package. See docs for `mockDatabasesAndGraphqlForEachTest` in `@fleek-platform/tester` package. */
export const inferAndCombineItContext = <TFirstContext, TSecondContext>(
  _firstIt: (description: string, callback: (context: TFirstContext) => Promise<void>) => void,
  _secondIt?: (description: string, callback: (context: TSecondContext) => Promise<void>) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) => vitest.it as any as vitest.TestAPI<TFirstContext & TSecondContext>;
