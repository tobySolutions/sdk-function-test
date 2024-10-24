export const testImport = async (path: string) => {
  if (IS_NODE) {
    return await import(path);
  }
}
