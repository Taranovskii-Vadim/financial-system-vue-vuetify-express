import fs from "fs";
import path from "path";

const BASE = path.resolve(__dirname, "..", "..", "database");

class FileModel {
  static getData = async <T>(): Promise<T> =>
    new Promise((resolve, reject) =>
      fs.readFile(path.resolve(BASE, "auth.json"), (e, data) =>
        e ? reject(e) : resolve(JSON.parse(data.toString()))
      )
    );
}

export default FileModel;
