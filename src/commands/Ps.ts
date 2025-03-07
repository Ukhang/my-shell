import { BuiltinCommand } from "./BuiltinCommand";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export class Ps extends BuiltinCommand {
  async execute(): Promise<void> {
    const command = process.platform === "win32" ? "tasklist" : "ps aux";

    try {
      const { stdout, stderr } = await execAsync(command);

      if (stderr) {
        console.error(`ps error: ${stderr}`);
        return;
      }

      console.log(stdout);
    } catch (error) {
      console.error(`Error executing ps: ${(error as Error).message}`);
    }
  }
}