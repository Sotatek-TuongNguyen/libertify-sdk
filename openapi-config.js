const config = {
  schemaFile: 'https://api.dev.libertify.com/pro/openapi.json',
  apiFile: './src/store/rtkquery/baseQueryApi.ts',
  apiImport: 'baseQuerySplitApi',
  outputFile: './src/store/rtkquery/libertifyApi.ts',
  exportName: 'libertifyApi',
  hooks: true,
};
module.exports = config;
