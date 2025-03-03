import { BuiltinCommand } from "./BuiltinCommand";
import * as fs from "fs";

export class Ls extends BuiltinCommand {
  execute(args: string[]) {
    const path = args[0] || ".";
    fs.readdir(path, (err, files) => {
      if (err) {
        console.error(`Error reading directory: ${err}`);
        return;
      }
      console.log(files.join("\n"));
    });
  }
}