import { Response, Router } from "express";
import FileModel from "../../models/fileModel";

import { Request } from "../../types";
import { Currency } from "./types";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const result = await FileModel.getData<Currency[]>("currencies");

    res.json(result.map((item) => ({ ...item, date: new Date() })));
  } catch (e) {}
});

export default router;
