import { Request, Response, Router } from "express";
import FileModel from "../../models/fileModel";

const router = Router();

type Result = Record<string, number>;

router.get("/", async (req: Request, res: Response) => {
  try {
    const result = await FileModel.getData<Result>("currencies");

    res.json({ result });
  } catch (e) {}
});

export default router;
