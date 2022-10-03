import { Router } from "express";

import authRouter from "./auth";
import profileRouter from "./profile";
import currenciesRouter from "./currencies";
import categoriesRouter from "./categories";
import recordsRouter from "./records";

interface Route {
  prefix: string;
  router: Router;
  isAuth?: boolean;
}

const routes: Route[] = [
  { prefix: "/auth", router: authRouter, isAuth: false },
  { prefix: "/currencies", router: currenciesRouter },
  { prefix: "/categories", router: categoriesRouter },
  { prefix: "/profile", router: profileRouter },
  { prefix: "/records", router: recordsRouter },
];

export default routes;
