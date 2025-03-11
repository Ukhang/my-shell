import { BuiltinCommand } from "./BuiltinCommand";
import { promises as fs } from "fs";

export class Touch extends BuiltinCommand {
  async execute(args: string[]): Promise<void> {
    const filename = args[0];
    if (!filename) {
      console.log("Usage: touch <filename>");
      return;
    }

    try {
      await fs.writeFile(filename, "", { flag: "wx" });
      console.log(`File ${filename} created`);
    } catch (err: any) {
      if (err.code === "EEXIST") {
        console.error(`Error: File "${filename}" already exists.`);
      } else {
        console.error("Error creating file:", err.message);
      }
    }
  }
}