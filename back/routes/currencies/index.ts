import { Request, Response, Router } from "express";
import FileModel from "../../models/fileModel";

const router = Router();

interface Result {
  key: string;
  rate: number;
}

router.get("/", async (req: Request, res: Response) => {
  try {
    const result = await FileModel.getData<Result[]>("currencies");

    res.json(result.map((item) => ({ ...item, date: new Date() })));
  } catch (e) {}
});

export default router;
