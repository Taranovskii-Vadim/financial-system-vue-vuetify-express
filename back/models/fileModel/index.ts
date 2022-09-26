import fs from "fs";
import path from "path";

// TODO more correct way use Record<string, unknown>
type Payload = object;

type FileName = "users";

const getFile = (name: FileName) =>
  path.resolve(__dirname, "..", "..", "database", `${name}.json`);

class FileModel {
  static getData = async <T>(name: FileName): Promise<T> =>
    new Promise((resolve, reject) =>
      fs.readFile(getFile(name), (e, data) =>
        e ? reject(e) : resolve(JSON.parse(data.toString()))
      )
    );

  static setData = async <T extends Payload>(
    name: FileName,
    data: T
  ): Promise<T> =>
    new Promise((resolve, reject) => {
      fs.writeFile(getFile(name), JSON.stringify(data), (e) =>
        e ? reject(e) : resolve(data)
      );
    });
}

export default FileModel;
