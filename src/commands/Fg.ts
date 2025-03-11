import { BuiltinCommand } from './BuiltinCommand';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export class Fg extends BuiltinCommand {
  async execute(args: string[]): Promise<void> {
    if (args.length === 0) {
      console.log('Usage: fg [job ID]');
      return;
    }

    const jobId = args[0];

    try {
      const command =
        process.platform === 'win32' ? 'tasklist' : `fg %${jobId}`;

      const { stdout, stderr } = await execAsync(command);

      if (stderr) {
        console.error(`fg error: ${stderr}`);
        return;
      }

      console.log(`Job ${jobId} is now in the foreground:`);
      console.log(stdout);
    } catch (error) {
      console.error(
        `Error bringing job ${jobId} to the foreground: ${(error as Error).message}`,
      );
    }
  }
}
