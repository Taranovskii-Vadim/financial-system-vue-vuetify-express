import { Router, Response } from "express";

import FileModel from "../../models/fileModel";
import { Request, RequestWithID } from "../../types";

import { CommonDTO, Category } from "./types";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const result = await FileModel.getData<Category[]>("categories");

    res.json(result);
  } catch (e) {
    console.log(e);
  }
});

router.post("/", async ({ body }: Request<CommonDTO>, res: Response) => {
  try {
    const { name, limit } = body;

    const previous = await FileModel.getData<Category[]>("categories");

    const id = previous.length + 1;
    const result: Category = { id, name, limit: parseInt(limit, 10) };

    await FileModel.setData("categories", [...previous, result]);

    res.json(id);
  } catch (e) {
    console.log(e);
  }
});

router.put(
  "/:id",
  async ({ body, params }: RequestWithID<CommonDTO>, res: Response) => {
    try {
      const { id } = params;
      const { name, limit } = body;

      const previous = await FileModel.getData<Category[]>("categories");

      const category = previous.find((item) => item.id === parseInt(id, 10));

      if (!category) {
        return res.status(404).json("Категория не найдена");
      }

      category.name = name;
      category.limit = parseInt(limit, 10);

      await FileModel.setData("categories", previous);

      res.json(category);
    } catch (e) {
      console.log(e);
    }
  }
);

export default router;
