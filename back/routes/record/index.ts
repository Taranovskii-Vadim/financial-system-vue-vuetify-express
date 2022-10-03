import { Response, Router } from "express";
import FileModel from "../../models/fileModel";

import { Request } from "../../types";
import { FormPayload, Record } from "./types";

const router = Router();

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
