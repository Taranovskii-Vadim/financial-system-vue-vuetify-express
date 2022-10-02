import { Response, Router } from "express";

import { Request } from "../../types";

const router = Router();

router.get("/", ({ user }: Request, res: Response) => res.json(user));

export default router;
