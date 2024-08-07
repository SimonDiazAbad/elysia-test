import { Elysia } from "elysia";

export const userRoutes = new Elysia({
  prefix: "/users",
}).get("/", () => {
  return "hello, world";
}).get("/:id", (ctx) => {
  return `hello, ${ctx.params.id}`
});
