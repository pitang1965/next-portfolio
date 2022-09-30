import { GraphQLClient, gql } from 'graphql-request';
import { Repository } from 'src/generated/graphql';

// GitHubからデータを取得
export const getGitHubData = async () => {
  const githubEndPoint = 'https://api.github.com/graphql';

  const query = gql`
    {
      user(login: "pitang1965") {
        pinnedItems(first: 5, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              languages(first: 5, orderBy: { field: SIZE, direction: DESC }) {
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
  const repositories: Repository[] = data.user.pinnedItems.nodes;
  return repositories;
};
