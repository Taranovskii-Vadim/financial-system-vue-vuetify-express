import { Router } from "express";

import authRouter from "./auth";
import usersRouter from "./users";

interface Route {
  prefix: string;
  router: Router;
  isAuth?: boolean;
}

const routes: Route[] = [
  { prefix: "/auth", router: authRouter, isAuth: false },
  { prefix: "/users", router: usersRouter, isAuth: false },
];

export default routes;
