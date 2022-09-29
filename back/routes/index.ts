import { Router } from "express";

import authRouter from "./auth";
import currenciesRouter from "./currencies";
import categoriesRouter from "./categories";

interface Route {
  prefix: string;
  router: Router;
  isAuth?: boolean;
}

const routes: Route[] = [
  { prefix: "/auth", router: authRouter, isAuth: false },
  { prefix: "/currencies", router: currenciesRouter },
  { prefix: "/categories", router: categoriesRouter },
];

export default routes;
