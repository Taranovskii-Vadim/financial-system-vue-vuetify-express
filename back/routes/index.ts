import { Router } from "express";

import authRouter from "./auth";

interface Route {
  prefix: string;
  router: Router;
  isAuth?: boolean;
}

const routes: Route[] = [
  { prefix: "/auth", router: authRouter, isAuth: false },
];

export default routes;
