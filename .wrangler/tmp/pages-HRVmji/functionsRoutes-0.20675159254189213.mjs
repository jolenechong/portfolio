import { onRequestGet as __repos_ts_onRequestGet } from "C:\\Users\\jolen\\dev\\portfolio\\functions\\repos.ts"

export const routes = [
    {
      routePath: "/repos",
      mountPath: "/",
      method: "GET",
      middlewares: [],
      modules: [__repos_ts_onRequestGet],
    },
  ]