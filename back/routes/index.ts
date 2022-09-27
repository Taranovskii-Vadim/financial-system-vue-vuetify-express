import { Router } from "express";

import authRouter from "./auth";
import currenciesRouter from "./currencies";

interface Route {
  prefix: string;
  router: Router;
  isAuth?: boolean;
}

const routes: Route[] = [
  { prefix: "/auth", router: authRouter, isAuth: false },
  { prefix: "/currencies", router: currenciesRouter, isAuth: false },
];

export default routes;
