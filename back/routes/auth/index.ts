import jwt from "jsonwebtoken";
import { Response, Router } from "express";

import FileModel from "../../models/fileModel";
import { TokenUser } from "../../types";
import { R, CommonPayload, SignUpPayload, User } from "./types";

const router = Router();

// TODO connect express validator

const getToken = (data: TokenUser) => jwt.sign(data, process.env.JWT_KEY);

router.post("/signIn", async ({ body }: R<CommonPayload>, res: Response) => {
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

    const { surname, name, bill } = result;

    const fullname = `${surname || ""} ${name}`.trim();

    res.cookie(process.env.TOKEN_KEY, getToken({ name, email }));

    res.json({ bill, fullname });
  } catch (e) {}
});

router.post("/signUp", async ({ body }: R<SignUpPayload>, res: Response) => {
  const bill = 0;
  const { email, name, password } = body;

  const users = await FileModel.getData<User[]>("users");
  const user = users.find((item) => item.email === email);

  if (user) {
    return res.json("Такой пользователь уже существует");
  }

  // TODO hash password
  const result: User = { id: users.length + 1, bill, email, name, password };

  await FileModel.setData<User[]>("users", [...users, result]);

  res.cookie(process.env.TOKEN_KEY, getToken({ name, email }));

  res.json({ fullname: name, bill });
});

export default router;
