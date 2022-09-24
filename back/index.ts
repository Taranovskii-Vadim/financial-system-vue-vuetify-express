import express, { json } from "express";

import routes from "./routes";

const server = express();

const PORT = 3000;

server.use(json());

routes.forEach(({ prefix, router, isAuth = true }) => {
  const completedPrefix = `/api${prefix}`;
  // TODO add middleware
  server.use(completedPrefix, router);
});

(() => {
  server.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
  });
})();
