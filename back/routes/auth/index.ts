import { Request, Response, Router } from "express";

import FileModel from "../../models/fileModel";
import { Auth } from "./types";

const router = Router();

// TODO add jwt later
router.get("/", async ({ body }: Request, res: Response) => {
  try {
    const { email, password } = body;
    const response = await FileModel.getData<Auth[]>();

    const result = response.find((item) => item.email === email);

    if (!result) {
      return res.json("Такого пользователя не существует");
    }

    if (result && result.password !== password) {
      return res.json("Пароль неверный");
    }

    res.json({ result });
  } catch (e) {}
});

export default router;
