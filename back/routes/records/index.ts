import { Response, Router } from "express";

import FileModel from "../../models/fileModel";
import { Request } from "../../types";
import { Category } from "../categories/types";
import { FormPayload, Record } from "./types";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const records = await FileModel.getData<Record[]>("records");
    const categories = await FileModel.getData<Category[]>("categories");

    const result = records.map(({ categoryId, ...other }) => {
      const { name } = categories.find((item) => item.id === categoryId);

      return { category: { id: categoryId, name }, ...other };
    });

    res.json(result);
  } catch (e) {
    console.log(e);
  }
});

router.post("/", async ({ body }: Request<FormPayload>, res: Response) => {
  try {
    const { amount, ...others } = body;
    const previos = await FileModel.getData<Record[]>("records");

    const id = previos.length + 1;

    await FileModel.setData("records", [
      ...previos,
      { id, amount: parseInt(amount, 10), ...others },
    ]);

    res.json(id);
  } catch (e) {
    console.log(e);
  }
});

export default router;
