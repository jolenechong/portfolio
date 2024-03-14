import { Client, IPinnedRepo } from "get-pinned-repos";

export async function onRequestGet() {
  try {
    const value = process.env.REACT_APP_GITHUB_TOKEN;

    if (value === undefined) {
      throw new Error("GitHub token is undefined");
    }

    Client.setToken(value);

    const pinned = await Client.getPinnedRepos("jolenechong");

    return Response.json({
      statusCode: 200,
      body: JSON.stringify(pinned),
    });
  } catch (error) {
    console.error("Error in handler:", error);

    return Response.json({
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    });
  }
}