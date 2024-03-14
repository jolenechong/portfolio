// import { Client, IPinnedRepo } from "get-pinned-repos";
import { GraphQLClient, gql } from 'graphql-request';

export async function onRequestGet({ env }) {
  try {
    const token = env.REACT_APP_GITHUB_TOKEN;

    if (token === undefined) {
      throw new Error("GitHub token is undefined");
    }

    const client = new GraphQLClient("https://api.github.com/graphql", {
      fetch: fetch,
      headers: {
        "Authorization": `Bearer ${token}`,
        "User-Agent": "Portfolio" // Replace "YourAppName" with the name of your application
      }
    });

     const query = (gql) `
     {
         user(login: "jolenechong") {
             pinnedItems(first: 6, types: REPOSITORY) {
                 nodes {
                     ... on Repository {
                         name
                         url
                         stargazerCount
                         primaryLanguage {
                             name
                             color
                             id
                         }
                         description
                         createdAt
                         forkCount
                         homepageUrl
                         id
                         isArchived
                         isFork
                         isInOrganization
                         isTemplate
                         languages(first: 100) {
                             edges {
                                 node {
                                     name
                                     id
                                     color
                                 }
                             }
                         }
                     }
                 }
             }
         }
     }
 `;
    const res: Response = await client.request(query);
    
    return Response.json({
      statusCode: 200,
      body: res['user']['pinnedItems']['nodes'],
    });
  } catch (error) {
    console.error("Error in handler:", error);

    return Response.json({
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    });
  }
}