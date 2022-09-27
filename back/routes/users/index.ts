import { query, Request, Response, Router } from "express";

import FileModel from "../../models/fileModel";
import { User } from "../types";

const router = Router();

type GetById = Request<{ id?: string }>;

router.get("/:id", async ({ params: { id } }: GetById, res: Response) => {
  try {
    if (!id) {
      return res.status(400).json("Неккоректный id пользователя");
    }

    const users = await FileModel.getData<User[]>("users");

    const user = users.find((item) => item.id === parseInt(id));

    if (!user) {
      return res.status(404).json("Пользователь не найден");
    }

    const fullname = `${user.surname || ""} ${user.name}`.trim();

    res.json({ fullname, bill: user.bill });
  } catch (e) {}
});

export default router;
