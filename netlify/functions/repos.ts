// import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
// import { Client, IPinnedRepo } from "get-pinned-repos";

// const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  
//   const value = process.env.REACT_APP_GITHUB_TOKEN;

//   const fetchData = async () => {
//     if (value !== undefined) {
//       Client.setToken(value);

//       try {
//         const pinned = await Client.getPinnedRepos("jolenechong");
//         return pinned
//       } catch (error) {
//         console.error("Error fetching pinned repos:", error);
//       }
//     }
//   };
//   const pinned = await fetchData();
//   return {
//     statusCode: 200,
//     body: JSON.stringify(pinned),
//   };
// };

// export { handler };

import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { Client, IPinnedRepo } from "get-pinned-repos";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  try {
    const value = process.env.REACT_APP_GITHUB_TOKEN;

    if (value === undefined) {
      throw new Error("GitHub token is undefined");
    }

    Client.setToken(value);

    const pinned = await Client.getPinnedRepos("jolenechong");

    return {
      statusCode: 200,
      body: JSON.stringify(pinned),
    };
  } catch (error) {
    console.error("Error in handler:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};

export { handler };
