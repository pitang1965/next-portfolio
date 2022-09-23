import { GraphQLClient, gql } from 'graphql-request';
import { createServer } from '@graphql-yoga/node';

// GitHubからデータを取得

const resolvers = {
  Query: {
    async repositories() {
      const githubEndPoint = 'https://api.github.com/graphql';

      const query = gql`
        {
          user(login: "pitang1965") {
            pinnedItems(first: 5, types: REPOSITORY) {
              nodes {
                ... on Repository {
                  name
                  description
                  languages(
                    first: 5
                    orderBy: { field: SIZE, direction: DESC }
                  ) {
                    edges {
                      node {
                        color
                        name
                      }
                      size
                    }
                    totalSize
                  }
                  forkCount
                  stargazerCount
                  url
                  id
                }
              }
            }
          }
        }
      `;

      const graphQLClient = new GraphQLClient(githubEndPoint, {
        headers: {
          authorization: `Bearer ${process.env.GITHUB_BEARER_TOKEN}`,
        },
      });

      const data = await graphQLClient.request(query);
      const object = data.user.pinnedItems.nodes.map((node: any) => ({
        name: node.name,
        description: node.description,
        languages: node.languages.edges.map((edge: any) => ({
          color: edge.node.color,
          name: edge.node.name,
          percentage: Number(
            (
              (Number(edge.size) / Number(node.languages.totalSize)) *
              100.0
            ).toFixed(1)
          ),
        })),
        forkCount: node.forkCount,
        stargazerCount: node.stargazerCount,
        url: node.url,
        id: node.id,
      }));

      return object;
    },
  },
};

// APIとして値を返す

const typeDefs = /* GraphQL */ `
  type Query {
    repositories: [Repository!]!
  }
  type Repository {
    name: String!
    description: String
    languages: [Language!]!
    forkCount: Int!
    stargazerCount: Int!
    url: String!
    id:  ID!
  }
  type Language {
    color: String!
    name: String!
    percentage: Float!
  }
`;

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
  endpoint: '/api/github',
  // graphiql: false // uncomment to disable GraphiQL
});

export default server;
