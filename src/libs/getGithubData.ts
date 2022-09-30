import { GraphQLClient, gql } from 'graphql-request';

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
};
