import { Router, Response } from "express";

import FileModel from "../../models/fileModel";
import { Request } from "../../types";
import { CommonDTO, Category } from "./types";

const router = Router();

router.post("/", async ({ body }: Request<CommonDTO>, res: Response) => {
  try {
    const { name, limit } = body;

    const previous = await FileModel.getData<Category[]>("categories");
    const id = previous.length + 1;

    await FileModel.setData("categories", [...previous, { id, name, limit }]);

    res.json(id);
  } catch (e) {
    console.log(e);
  }
});

export default router;
