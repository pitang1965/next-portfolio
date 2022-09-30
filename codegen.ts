import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://api.github.com/graphql': {
        headers: {
          authorization: `Bearer ${process.env.GITHUB_BEARER_TOKEN}`,
        },
      },
    },
  ],
  documents: ['src/**/*.ts', 'src/**/*.tsx'],
  generates: {
    'src/generated/graphql.ts': {
      plugins: ['typescript'],
    },
  },
};

export default config;
