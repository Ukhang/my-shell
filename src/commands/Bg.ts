import { BuiltinCommand } from './BuiltinCommand';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export class Bg extends BuiltinCommand {
  async execute(args: string[]): Promise<void> {
    if (args.length === 0) {
      console.log('Usage: bg [job ID]');
      return;
    }

    const jobId = args[0];

    try {
      const command =
        process.platform === 'win32' ? 'tasklist' : `bg %${jobId}`;

      const { stdout, stderr } = await execAsync(command);

      if (stderr) {
        console.error(`bg error: ${stderr}`);
        return;
      }

      console.log(`Job ${jobId} has been resumed in the background:`);
      console.log(stdout);
    } catch (error) {
      console.error(
        `Error resuming job ${jobId} in the background: ${(error as Error).message}`,
      );
    }
  }
}
