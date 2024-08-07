import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { userRoutes } from "./controllers/users.controller";

const app = new Elysia({prefix: '/api'})
    .use(swagger())
  .get("/", () => "Hello Elysia")
  .use(userRoutes)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
