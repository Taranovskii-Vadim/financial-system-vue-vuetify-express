import { Router, Request, Response } from "express";

import FileModel from "../../models/fileModel";

const router = Router();

interface Result {
  readonly id: number;
  name: string;
  limit: number;
}

router.post("/", async ({ body }: Request, res: Response) => {
  try {
    const previous = await FileModel.getData<Result[]>("categories");
    const id = previous.length + 1;

    await FileModel.setData("categories", [...previous, { id, ...body }]);

    res.json(id);
  } catch (e) {
    console.log(e);
  }
});

export default router;
