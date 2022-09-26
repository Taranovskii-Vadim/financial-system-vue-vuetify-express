import jwt from "jsonwebtoken";
import { Request, Response, Router } from "express";

import FileModel from "../../models/fileModel";
import { User } from "./types";

const router = Router();

// TODO connect express validator

// TODO use env variables
const getToken = (user: User) => jwt.sign(user, "AVACATO");

const getFullname = (user: User) => `${user.surname || ""} ${user.name}`.trim();

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

    res.json({ token: getToken(result), fullname: getFullname(result) });
  } catch (e) {}
});

router.post("/signUp", async ({ body }: Request, res: Response) => {
  const { email, password, name } = body;

  const users = await FileModel.getData<User[]>("users");
  const user = users.find((item) => item.email === email);

  if (user) {
    return res.json("Такой пользователь уже существует");
  }

  const result: User = {
    id: users.length + 1,
    name,
    email,
    password,
  };

  await FileModel.setData<User>("users", result);

  res.json({ token: getToken(result), fullname: getFullname(result) });
});

export default router;
