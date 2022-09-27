import jwt from "jsonwebtoken";
import { Request, Response, Router } from "express";

import FileModel from "../../models/fileModel";
import { User } from "./types";

const router = Router();

// TODO connect express validator

// TODO use env variables
const getToken = (user: User) => jwt.sign(user, "AVACATO");

router.post("/signIn", async ({ body }: Request, res: Response) => {
  try {
    const { email, password } = body;
    const response = await FileModel.getData<User[]>("users");

    const result = response.find((item) => item.email === email);

    if (!result) {
      return res.status(404).json("Такого пользователя не существует");
    }

    if (result && result.password !== password) {
      return res.status(401).json("Пароль неверный");
    }

    res.json({ id: result.id, token: getToken(result) });
  } catch (e) {}
});

router.post("/signUp", async ({ body }: Request, res: Response) => {
  const { email } = body;

  const users = await FileModel.getData<User[]>("users");
  const user = users.find((item) => item.email === email);

  if (user) {
    return res.json("Такой пользователь уже существует");
  }

  const id = users.length + 1;

  const result: User = { id, ...body };

  await FileModel.setData<User[]>("users", [...users, result]);

  res.json({ id, token: getToken(result) });
});

export default router;
