import jwt from "jsonwebtoken";
import { Request, Response, Router } from "express";

import FileModel from "../../models/fileModel";
import { Auth } from "./types";

const router = Router();

router.post("/signIn", async ({ body }: Request, res: Response) => {
  try {
    const { email, password } = body;
    const response = await FileModel.getData<Auth[]>();

    const result = response.find((item) => item.email === email);

    if (!result) {
      return res.status(404).json("Такого пользователя не существует");
    }

    if (result && result.password !== password) {
      return res.status(401).json("Пароль неверный");
    }

    const token = jwt.sign(result, "AVACADO");

    res.json({ fullname: `${result.surname} ${result.name}`, token });
  } catch (e) {}
});

export default router;
