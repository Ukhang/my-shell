import { BuiltinCommand } from "./BuiltinCommand";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export class Jobs extends BuiltinCommand {
  async execute(): Promise<void> {
    try {
      const command = process.platform === "win32" ? "tasklist" : "jobs";
      
      const { stdout, stderr } = await execAsync(command);

      if (stderr) {
        console.error(`jobs error: ${stderr}`);
        return;
      }

      console.log(stdout);
    } catch (error) {
      console.error(`Error executing jobs: ${(error as Error).message}`);
    }
  }
}