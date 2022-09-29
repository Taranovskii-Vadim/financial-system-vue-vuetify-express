import express, { json } from "express";
import { config } from "dotenv";

config();

import routes from "./routes";
import { auhtMiddleware } from "./middlewares";

const server = express();

const PORT = 3000;

server.use(json());

routes.forEach(({ prefix, router, isAuth = true }) => {
  const completedPrefix = `/api${prefix}`;
  if (isAuth) {
    server.use(completedPrefix, auhtMiddleware, router);
  } else {
    server.use(completedPrefix, router);
  }
});

(() => {
  server.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
  });
})();
